import * as React from 'react'

import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node'
import {Form, Link, useActionData, useSearchParams} from '@remix-run/react'
import {createUserSession, getUserId} from '~/session.server'
import {json, redirect} from '@remix-run/node'
import {safeRedirect, validateEmail} from '~/utils/auth'

import {verifyLogin} from '~/models/user.server'

export const loader: LoaderFunction = async ({request}) => {
  const userId = await getUserId(request)
  if (userId) return redirect('/')
  return json({})
}

interface ActionData {
  errors?: {
    email?: string
    password?: string
  }
}

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const redirectTo = safeRedirect(formData.get('redirectTo'), '/')
  const remember = formData.get('remember')

  if (!validateEmail(email)) {
    return json<ActionData>(
      {errors: {email: 'Email is invalid'}},
      {status: 400}
    )
  }

  if (typeof password !== 'string' || password.length === 0) {
    return json<ActionData>(
      {errors: {password: 'Password is required'}},
      {status: 400}
    )
  }

  if (password.length < 8) {
    return json<ActionData>(
      {errors: {password: 'Password is too short'}},
      {status: 400}
    )
  }

  const user = await verifyLogin(email, password)

  if (!user) {
    return json<ActionData>(
      {errors: {email: 'Invalid email or password'}},
      {status: 400}
    )
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === 'on' ? true : false,
    redirectTo,
  })
}

export const meta: MetaFunction = () => {
  return {
    title: 'Login',
  }
}

export default function LoginPage() {
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') || '/'
  const actionData = useActionData<ActionData>()
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus()
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus()
    }
  }, [actionData])

  return (
    <div>
      <div>
        <Form method='post'>
          <div>
            <label htmlFor='email'>Email address</label>
            <div>
              <input
                ref={emailRef}
                id='email'
                required
                autoFocus={true}
                name='email'
                type='email'
                autoComplete='email'
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby='email-error'
              />
              {actionData?.errors?.email && (
                <div id='email-error'>{actionData.errors.email}</div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <div>
              <input
                id='password'
                ref={passwordRef}
                name='password'
                type='password'
                autoComplete='current-password'
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby='password-error'
              />
              {actionData?.errors?.password && (
                <div id='password-error'>{actionData.errors.password}</div>
              )}
            </div>
          </div>

          <input type='hidden' name='redirectTo' value={redirectTo} />
          <button type='submit'>Log in</button>
          <div>
            <div>
              <input id='remember' name='remember' type='checkbox' />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <div>
              Don't have an account?{' '}
              <Link
                to={{
                  pathname: '/join',
                  search: searchParams.toString(),
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
