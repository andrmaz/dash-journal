import {Button} from '~/components/Button'
import React from 'react'
import styled from 'styled-components'

type User = {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <Wrapper>
      <div>
        <Title>Dash Journal</Title>
      </div>
      <div>
        {user ? (
          <>
            <Welcome>
              Welcome, <b>{user.name}</b>!
            </Welcome>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <RightButton
              primary
              size='small'
              onClick={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </div>
    </Wrapper>
  </header>
)

const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`
const Title = styled.h1`
  display: inline-block;
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  vertical-align: top;
`
const Welcome = styled.span`
  color: ${p => p.theme.colors.blue_magenta};
  font-size: 14px;
  margin-right: 10px;
`
const RightButton = styled(Button)`
  margin-left: 10px;
`
