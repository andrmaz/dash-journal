import {render, screen} from 'test-utils'

import Modal from './'
import type {ModalProps} from './Modal'

const props: ModalProps = {
  isOpen: true,
  onDismiss: vi.fn(),
  children: '',
}

it('should have a dismiss button', () => {
  render(<Modal {...props} />)
  const button = screen.getByRole('button', {name: /dismiss/i})
  expect(screen.getByRole('dialog')).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
