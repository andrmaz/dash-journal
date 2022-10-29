import * as React from 'react'

import type {Event} from 'react-big-calendar'
import {Meeting} from '~/components/Meeting'
import Modal from '~/components/Modal'

interface EventModalProps {
  isOpen: boolean
  onDismiss: () => void
  event: Event | null
  date: Date | null
}

const EventModal = (props: EventModalProps) => {
  const {isOpen, onDismiss, event, date} = props

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Meeting event={event} start={date} />
    </Modal>
  )
}

export default EventModal
