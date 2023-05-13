import {DialogContent, DialogOverlay} from '@reach/dialog'

import {Icon} from '../Icon'
import * as React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import * as styles from './modal.css'

interface Props {
  isOpen: boolean
  onDismiss: () => void
}
export type ModalProps = React.PropsWithChildren<Props>

export default function Modal(props: ModalProps) {
  const {isOpen, onDismiss, children} = props

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      className={styles.overlay}
    >
      <div className={styles.backdrop} />
      <DialogContent aria-label='Menu' className={styles.content}>
        <div className={styles.wrapper}>
          <button onClick={onDismiss} className={styles.button}>
            <Icon name='X' />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </button>
          {children}
        </div>
      </DialogContent>
    </DialogOverlay>
  )
}
