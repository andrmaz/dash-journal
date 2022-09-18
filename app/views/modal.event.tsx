import * as React from 'react'

import type {Event} from 'react-big-calendar'
import {Meeting} from '~/components/Meeting'
import Modal from '~/components/Modal'

interface EventModalProps {
  isOpen: boolean
  onDismiss: () => void
  event: Event | null
}

const EventModal = (props: EventModalProps) => {
  const {isOpen, onDismiss, event} = props

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Meeting event={event} action='/' />
    </Modal>
  )
}

export default EventModal
