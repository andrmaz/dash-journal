import {Container} from '~/views/Container'
import type {LinksFunction} from '@remix-run/node'
import {Navbar} from '~/views/Navbar'
import styled from 'styled-components'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.8.0/react-datepicker.min.css',
    },
  ]
}

export default function Index() {
  return (
    <Wrapper id='root'>
      <Navbar />
      <Container />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: var(--background-color);
`
