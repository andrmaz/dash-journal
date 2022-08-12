import {DatePicker} from '~/components/DatePicker'
import {Header} from '~/components/Header'
import type {LinksFunction} from '@remix-run/node'
import {Sidebar} from '~/components/Sidebar'
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
      <Sidebar />
      <Container>
        <Header title='Dashboard' />
        <Content></Content>
        <Time>
          <Calendar>
            <DatePicker />
          </Calendar>
        </Time>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: var(--background-color);
`
const Container = styled.main`
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
const Time = styled.aside`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  margin: auto 0;
  border-left: 1px solid var(--color-foreground);
`
const Calendar = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  place-items: center;
`
