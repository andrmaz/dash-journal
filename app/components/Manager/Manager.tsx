import type {Meeting} from '@prisma/client'
import React from 'react'
import {formatDateMeeting} from '~/utils/date'
import styled from 'styled-components'
import {useFetcher} from '@remix-run/react'

export const Manager = () => {
  const fetcher = useFetcher<Meeting>()
  const isLoading = fetcher.state === 'loading'

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/meetings/next')
    }
  }, [fetcher])

  if (isLoading) return <>Loading ...</>
  return (
    <Wrapper>
      <Header>
        <Title>Client meeting</Title>
      </Header>
      {fetcher.data ? (
        <p>
          Your next meeting "{fetcher.data.title}" will start on{' '}
          {formatDateMeeting(fetcher.data.start)}.
        </p>
      ) : (
        <p>No meeting planned yet.</p>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${p => p.theme.spacing([3, 9])};
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h3`
  margin-bottom: ${p => p.theme.spacing(3)};
`
