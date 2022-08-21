import {Button} from './Button'
import React from 'react'
import styled from 'styled-components'

interface ManagerProps {
  onOpen: () => void
}

export const Manager = ({onOpen}: ManagerProps) => {
  return (
    <Wrapper>
      <Header>
        <h3>Client meeting</h3>
        <Button size='small' onClick={onOpen}>
          New
        </Button>
      </Header>
      <div></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${p => p.theme.spacing(1)};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
