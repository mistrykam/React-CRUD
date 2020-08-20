import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddUser() {
  const [uname, setUname] = useState({ value: "", error: "" });
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const isValidForm = () => {
    if (uname.value.trim() === "" || uname.value.indexOf("@") < 0 || uname.value.indexOf(".") < 0) {
      setUname({ error: "Missing User Name: format user@example.com" });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    if (isValidForm()) {
      addUser(uname.value);
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
        <Input
          type="text"
          autoFocus
          onChange={(event) => setUname({ value: event.target.value, error: "" })}
          placeholder="Enter user@example.com"
        ></Input>
        <span style={{ color: "red" }}>{uname.error}</span>
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
