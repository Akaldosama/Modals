import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";

export default function Users({modal, toggle, users, setUsers}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [lang, setLang] = useState("");

  const saveFunc = (e) => {
    e.preventDefault()
    let payload = {
      name,
      phone,
      address,
      lang,
    };
    users.push({ ...payload });
    setUsers([...users]);
    toggle(false);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>
        <h3>Add User Panel</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={saveFunc} id="form">
          <input type="text" placeholder="Name" className="form-control mb-2" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Phone" className="form-control mb-2" onChange={(e) => setPhone(e.target.value)} />
          <input type="text" placeholder="Address" className="form-control mb-2" onChange={(e) => setAddress(e.target.value)} />
          <select className="form-control" onChange={(e) => setLang(e.target.value)} >
            <option value="" hidden>Select your Language</option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Uzbek">Uzbek</option>
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <button type="submit" form="form" className="btn btn-primary">Save</button>
      </ModalFooter>
    </Modal>
  );
}
