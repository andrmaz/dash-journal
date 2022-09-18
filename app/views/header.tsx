import {Chip} from '../components/Chip'
import React from 'react'
import {icons} from '~/data'
import styled from 'styled-components'

interface HeaderProps {
  title: string
}

export const Header = ({title}: HeaderProps) => (
  <Wrapper>
    <div>
      <Title>{title}</Title>
    </div>
    <Container>
      {icons.map(({action, name}) => (
        <Chip action={action} icon={{name}} key={action} />
      ))}
    </Container>
  </Wrapper>
)

const Wrapper = styled.header`
  grid-area: header;
  height: 5rem;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: ${p => p.theme.colors.blue_magenta};
`
const Title = styled.h1`
  display: inline-block;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-large);
  line-height: var(--font-height-normal);
  margin: 6px 0 6px 10px;
  vertical-align: top;
  text-transform: capitalize;
`
const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`
