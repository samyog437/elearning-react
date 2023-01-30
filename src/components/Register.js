import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "../css/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    axios
      .post("http://localhost:3001/user/register", { email, password })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password !== confirmPassword
    ) {
      setValid("is-invalid");
      setMessage("Passwords do not match");
    } else if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      setValid("is-valid");
    }
  }, [confirmPassword, password]);
  return (
    <>
      <h3>Register</h3>
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
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              className={valid}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="re-enter password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormFeedback>{message}</FormFeedback>
          </FormGroup>
          <Button color="primary" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
