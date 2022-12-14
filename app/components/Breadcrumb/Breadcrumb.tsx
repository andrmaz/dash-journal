import * as React from 'react'

import styled from 'styled-components'

interface BreadcrumbProps {
  links: Readonly<{pathname: string; label: string}[]>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <Wrapper aria-label='Breadcrumb'>
      <List>
        {props.links.map(({pathname, label}) => (
          <Item key={pathname}>
            <a href={pathname}>{label}</a>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 0.8em 1em;
  border: 1px solid ${p => p.theme.colors.gray['700']};
  border-radius: var(--border-radius-medium);
  background: ${p => p.theme.colors.gray['300']};
  & [aria-current='page'] {
    color: var(--color-dark);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
  }
`
const List = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`
const Item = styled.li`
  display: inline;
  text-transform: capitalize;
  &::before {
    display: inline-block;
    margin: 0 0.25em;
    transform: rotate(15deg);
    border-right: 0.1em solid currentcolor;
    height: 0.8em;
    content: '';
  }
`
