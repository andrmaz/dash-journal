import * as React from 'react'

import styled from 'styled-components'

interface AccordionProps {
  title: string
}

export const Accordion: React.FC<AccordionProps> = props => {
  const [expanded, setExpanded] = React.useState<boolean>(false)
  const onClick = () => setExpanded(!expanded)

  return (
    <Wrapper>
      <Header>
        <Button
          aria-expanded={expanded}
          aria-controls='section'
          id='accordion'
          onClick={onClick}
        >
          <Title>
            {props.title}
            <Icon>
              {expanded ? (
                <span aria-label='arrow-down'>∨</span>
              ) : (
                <span aria-label='arrow-up'>∧</span>
              )}
            </Icon>
          </Title>
        </Button>
      </Header>
      {expanded ? (
        <div id='section' role='region' aria-labelledby='accordion'>
          <Container>
            <Content>
              <div>{props.children}</div>
            </Content>
          </Container>
        </div>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: auto;
  width: min(300px, 100%);
  border-radius: var(--border-radius-medium);
  border: solid 1px ${p => p.theme.colors.gray['300']};
`
const Header = styled.h3`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  width: 100%;
  background-color: var(--color-background);
`
const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  color: ${p => p.theme.colors.black};
  text-transform: capitalize;
`
const Container = styled.div`
  padding-left: ${p => p.theme.spacing(6)};
  padding-right: ${p => p.theme.spacing(6.5)};
`
const Content = styled.fieldset`
  border-top: solid 1px ${p => p.theme.colors.gray['300']};
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4.5)};
`
const Icon = styled.span`
  margin-left: auto;
`
