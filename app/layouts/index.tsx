import * as React from 'react'

import {Header} from '~/views/Header'
import {Navbar} from '~/views/Navbar'
import {Sidebar} from '~/views/Sidebar'
import type {User} from '@prisma/client'
import {routes} from '~/data'
import styled from 'styled-components'
import {useLocation} from '@remix-run/react'

type LayoutProps = React.PropsWithChildren<{user: User}>

export const Layout = ({user, children}: LayoutProps) => {
  const location = useLocation()
  const title = routes.get(location.pathname) || ''

  return (
    <Wrapper>
      <Navbar user={user} />
      <Container>
        <Header title={title} />
        <Content>{children}</Content>
        <Sidebar />
      </Container>
      <Container />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: var(--background-color);
`
const Container = styled.main`
  height: 100%;
  flex: 1;
  flex-basis: fit-content;
  display: grid;
  grid-template-areas: 'header header' 'content aside';
  grid-template-rows: 5rem auto;
  grid-template-columns: 3fr 2fr;
`
const Content = styled.section`
  height: 100%;
  width: 100%;
`
