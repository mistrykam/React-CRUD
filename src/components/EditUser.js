import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function EditUser(props) {
  const { users, updateUser } = useContext(GlobalContext);
  const id = props.match.params.id; // get the id from the paramters
  const [uname, setUname] = useState(users.filter((user) => user.id === id)[0].name);
  const history = useHistory();

  const handleSubmit = (event) => {
    if (uname !== "") {
      updateUser(id, uname);
      history.push("/");
    } else {
      event.preventDefault();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <FormGroup>
        <Label>User Name</Label>
        <Input type="email" autoFocus value={uname} onChange={(event) => setUname(event.target.value)} placeholder="Enter user@example.com"></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-success">
        Update User
      </Button>
      <Link to="/" className="btn btn-warning ml-2">
        Cancel
      </Link>
    </Form>
  );
}

export default EditUser;
