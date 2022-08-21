import {DialogContent, DialogOverlay} from '@reach/dialog'

import {Icon} from './Icon'
import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {fadeIn} from '~/utils/animations'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  onDismiss: () => void
}
type ModalProps = React.PropsWithChildren<Props>

export default function Modal({isOpen, onDismiss, children}: ModalProps) {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <Wrapper>
          <CloseButton onClick={onDismiss}>
            <Icon name='X' />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          {children}
        </Wrapper>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} var(--duration-medium);
`
const Content = styled(DialogContent)`
  position: relative;
  background: var(--color-background);
  width: 25%;
  height: 100%;
  padding: ${p => p.theme.spacing([6, 8])};
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} var(--duration-long) both;
  animation-delay: var(--duration-short);
`
const CloseButton = styled.button`
  position: absolute;
  top: ${p => p.theme.spacing(2)};
  right: 0;
  margin: 0;
  padding: ${p => p.theme.spacing(4)};
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: ${p => p.theme.spacing(0.5)};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`
