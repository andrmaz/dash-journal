import * as React from 'react'

import {Header} from '~/composer/Header'
import {Navbar} from '~/composer/Navbar'
import {Sidebar} from '~/composer/Sidebar'
import type {User} from '@prisma/client'
import {routes} from '~/data'
import styled from 'styled-components'
import {useLocation} from '@remix-run/react'

interface LayoutProps {
  user: User
}

export const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const location = useLocation()
  const title = routes.get(location.pathname) || 'Detail'

  return (
    <Wrapper>
      <Navbar user={props.user} />
      <Container>
        <Header title={title} />
        <Content>{props.children}</Content>
        <Sidebar />
      </Container>
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
