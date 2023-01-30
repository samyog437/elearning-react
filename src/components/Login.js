import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../css/register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h3>Login</h3>
      <div className="reg">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="enter email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={handleLogin}>Login</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
