import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default function Tambah() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperince] = useState("");
  const [lvl, setLvl] = useState("");
  const navigate = useNavigate();

  const addPlayer = async () => {
    const add = await axios
      .post("http://localhost:5000/api/players", {
        username,
        email,
        password,
        experience,
        lvl,
      })
      .then(player => {
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addPlayer();
  };

  return (
    <div className='App'>
      <div className='container bg-primary mt-5 w-25 py-5'>
        <h1>Tambah player</h1>
        <Form className='ms-5' onSubmit={e => handleSubmit(e)}>
          <Row form>
            <Col md={10}>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input id='username' name='username' onChange={e => setUsername(e.target.value)} type='text' autoComplete='on' />
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input id='email' name='email'onChange={e => setEmail(e.target.value)} type='email' />
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input id='password' name='password' onChange={e => setPassword(e.target.value)} type='password' />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={10}>
              <FormGroup>
                <Label for='experience'>Experience</Label>
                <Input id='experience' name='experience'  onChange={e => setExperince(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='lvl'>Level</Label>
                <Input id='lvl' name='lvl' onChange={e => setLvl(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Button className='me-5'>Tambah</Button>
        </Form>
      </div>
    </div>
  );
}
