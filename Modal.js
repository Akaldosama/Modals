import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

export default function Modal() {
    
  return (
    <div>
        <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <form className="form-controls">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Phone"/>
            <input type="text" placeholder="Address"/>
            <select>
              <option value="Uzbek">UZ</option>
              <option value="Russian">RU</option>
              <option value="English">EN</option>
            </select>
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}
