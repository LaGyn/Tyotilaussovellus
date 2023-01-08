import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import userService from '../services/users';

const Lomake = () => {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    userService
      .getAll()
      .then(response => {
        console.log(response)
        setUsers(response)
    })
  }, [])

  const saveUser = (event) => {
    let salasana1 = document.getElementById('ssana1').value;
    let salasana2 = document.getElementById('ssana2').value;
    if (salasana1 !== salasana2) {
      alert('Tarkista salasana!')
      event.preventDefault()
      document.getElementById("ssana2").value="";
    }
    else if (salasana1 === salasana2) {
      alert('Rekisteröinti onnistui!')
      //event.preventDefault()
      const userObject = {
        name: newUser,
        password: newPassword
      }
      userService
        .create(userObject)
        .then(response => {
          setUsers(users.concat(response)) // Luodaan uusi taulukko jossa uusi lisäys
        })
    }
    console.log(users)
  }

  const handleNewUser = (event) => {
    console.log(event.target.value)
    setNewUser(event.target.value)
  }

  const handleNewPassword = (event) => {
    console.log(event.target.value)
    setNewPassword(event.target.value)
  }

  return (
    <Form onSubmit={saveUser}>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Käyttäjätunnus:</Form.Label>
        <Form.Control value={newUser} onChange={handleNewUser} type="text" placeholder="Käyttäjätunnus" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Salasana:</Form.Label>
        <Form.Control value={newPassword} onChange={handleNewPassword} type="password" placeholder="Salasana" required id="ssana1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
      <Form.Label>Salasana uudelleen:</Form.Label>
        <Form.Control type="password" placeholder="Salasana uudelleen" required id="ssana2" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Tallenna
      </Button>
    </Form>
  );
}

export default Lomake;