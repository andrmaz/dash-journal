import React from 'react'
import styled from 'styled-components'

interface ManagerProps {}

export const Manager = (props: ManagerProps) => {
  return (
    <Wrapper>
      <Header>
        <h3>Client meeting</h3>
      </Header>
      <div></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${p => p.theme.spacing(3)};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
