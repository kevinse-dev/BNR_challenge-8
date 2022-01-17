import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default function Update() {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperince] = useState('')
  const [lvl, setLvl] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(async() => {
    fetchDataById()
    setUsername(await data.username)
    setEmail(await data.email)
    setPassword(await data.password)
    setExperince(data.experience)
    setLvl(data.lvl)
  },[])

  const fetchDataById = async() => {
    const response = await axios.get(`http://localhost:5000/api/players/${id}`)
    .then(player => {
      setData(player.data.message)
    })
    .catch(err => console.log(err))
  }

  const update = async() => {
    const updateData = await axios.put(`http://localhost:5000/api/players/${id}`, {
      username,
      email,
      password,
      experience,
      lvl
    })
    .then(player => {
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    update()
  }

console.log(username);


  return (
    <div className='App'>
      <div className='container bg-primary mt-5 w-25 py-5'>
      <h1>Update</h1>
        <Form className="ms-5" onSubmit={(e) => handleSubmit(e)}>
          <Row form>
            <Col md={10}>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input id='username' name='username'  defaultValue={data.username} onChange={(e) => setUsername(e.target.value)} type='text' autoComplete="on" />
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input id='email' name='email' defaultValue={data.email}  onChange={(e) => setEmail(e.target.value)} type='email' />
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input id='password' name='password' defaultValue={data.password}  onChange={(e) => setPassword(e.target.value)} type='password'/>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={10}>
              <FormGroup>
                <Label for='experience'>Experience</Label>
                <Input id='experience' name='experience'defaultValue={data.experience}  onChange={(e) => setExperince(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={10}>
              <FormGroup>
                <Label for='lvl'>Level</Label>
                <Input id='lvl' name='lvl' defaultValue={data.lvl}  onChange={(e) => setLvl(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Button className="me-5">Update</Button>
        </Form>
      </div>
    </div>
  );
}
