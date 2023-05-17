import * as React from 'react'
import * as styles from './accordion.css'

interface AccordionProps {
  title: string
}

export const Accordion: React.FC<AccordionProps> = props => {
  const [expanded, setExpanded] = React.useState<boolean>(false)
  const onClick = () => setExpanded(!expanded)

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>
        <button
          aria-expanded={expanded}
          aria-controls='section'
          id='accordion'
          onClick={onClick}
          className={styles.button}
        >
          <span className={styles.title}>
            {props.title}
            <span className={styles.icon}>
              {expanded ? (
                <span aria-label='arrow-down'>∨</span>
              ) : (
                <span aria-label='arrow-up'>∧</span>
              )}
            </span>
          </span>
        </button>
      </h3>
      {expanded ? (
        <div id='section' role='region' aria-labelledby='accordion'>
          <div className={styles.container}>
            <fieldset className={styles.content}>
              <div>{props.children}</div>
            </fieldset>
          </div>
        </div>
      ) : null}
    </div>
  )
}
