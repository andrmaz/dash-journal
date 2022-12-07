import * as React from 'react'

import {Event} from '~/components/Event'
import type {Meeting} from '@prisma/client'
import Modal from '~/components/Modal'

interface EventModalProps {
  isOpen: boolean
  onDismiss: () => void
  event: Meeting | null
  date: Date
}

const EventModal = (props: EventModalProps) => {
  const {isOpen, onDismiss, event, date} = props

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Event event={event} date={date} />
    </Modal>
  )
}

export default EventModal
