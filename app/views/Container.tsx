import {Header} from './Header'
import React from 'react'
import {Sidebar} from './Sidebar'
import styled from 'styled-components'

export const Container = () => {
  return (
    <Wrapper>
      <Header title='Dashboard' />
      <Content></Content>
      <Sidebar />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-areas: 'header header' 'content aside';
  grid-template-rows: 5rem auto;
  grid-template-columns: 3fr 2fr;
`
const Content = styled.section`
  height: 100%;
  width: 100%;
`
