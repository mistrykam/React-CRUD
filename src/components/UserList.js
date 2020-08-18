import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idToRemove, setIdToRemove] = useState("");

  const areYouSureHandler = (id) => {
    setIdToRemove(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const removeUserHandler = () => {
    removeUser(idToRemove);
    closeModal();
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div>Are you sure?</div>
        <div>
          <button onClick={removeUserHandler} className="btn btn-success mr-1">
            Yes
          </button>
          <button onClick={closeModal} className="btn btn-danger">
            No
          </button>
        </div>
      </Modal>
      <ListGroup>
        {users.map((user) => (
          <ListGroupItem key={user.id} className="d-flex">
            <strong>{user.name}</strong>
            <div className="ml-auto">
              <Link className="btn btn-warning mr-1" to={`/edituser/${user.id}`}>
                Edit
              </Link>
              <Button onClick={() => areYouSureHandler(user.id)} className="btn btn-danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default UserList;
