import * as React from 'react'
import * as styles from './breadcrumb.css'

interface BreadcrumbProps {
  links: Readonly<{pathname: string; label: string}[]>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <nav aria-label='Breadcrumb' className={styles.wrapper}>
      <ol className={styles.list}>
        {props.links.map(({pathname, label}) => (
          <li className={styles.item} key={pathname}>
            <a href={pathname}>{label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
