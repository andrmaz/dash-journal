import {Breadcrumb} from '~/components/Breadcrumb'
import {Outlet} from '@remix-run/react'
import {links} from '~/data'
import * as styles from '~/styles/profile.css'

export default function Profile() {
  return (
    <section className={styles.wrapper}>
      <Breadcrumb links={links.profile} />
      <Outlet />
    </section>
  )
}
