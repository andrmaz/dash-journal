import {Breadcrumb} from '~/components/Breadcrumb'
import {Outlet} from '@remix-run/react'
import {links} from '~/data'
import styled from 'styled-components'

export default function Profile() {
  return (
    <Wrapper>
      <Breadcrumb links={links.profile} />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: ${p => p.theme.spacing(3)};
`
