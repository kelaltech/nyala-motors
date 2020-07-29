import React from 'react'
import './modal.scss'
// import Close from './close/close'
import { Button } from 'gerami'

type modalProps = {
  show: boolean
  modalClosed: any
}

const Modal: React.FC<modalProps> = (props) => {
  const showHide = props.show ? 'modal display-block' : 'modal display-none'
  return (
    <div className={showHide}>
      <section className="modal-mail">
        {props.children}
        <Button onClick={props.modalClosed}>Close</Button>
      </section>
    </div>
  )
}

export default Modal
