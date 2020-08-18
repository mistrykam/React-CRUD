import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddUser() {
  const [uname, setState] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (event) => {
    if (uname !== "") {
      addUser(uname);
      history.push("/");
    } else {
      event.preventDefault();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <FormGroup>
        <Label>User Name</Label>
        <Input type="email" autoFocus onChange={(event) => setState(event.target.value)} placeholder="Enter user@example.com"></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-success">
        Add User
      </Button>
      <Link to="/" className="btn btn-warning ml-2">
        Cancel
      </Link>
    </Form>
  );
}

export default AddUser;
