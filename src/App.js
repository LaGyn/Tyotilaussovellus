//Reactilla ohjelmoitaessa yleensä kaikki renderöitävä sisältö määritellään Reactin komponenttien avulla.
import React, { useState } from 'react';
import SignIn from './components/SignIn'
import Register from './components/Register';
import Button from 'react-bootstrap/Button';

const App = () => {
  console.log('Sähköinen työtilausjärjestelmä')
  
  return (
    <div className="p-3">
      <div className='container'>
        <img src="/public/logo192.png" alt="Logo"/>
        <h1>Sähköinen työtilausjärjestelmä</h1>
      </div>

      <div className='container'>
        <div className='mt-3 float-end'>
          <h2>Uusi käyttäjä?</h2>
          <Register />
        </div>
      </div>

      <div className='container'>
        <div className='mt-3'>
          <h2>Kirjaudu</h2>
          <form>
            Käyttäjätunnus: <SignIn />
            Salasana: <SignIn />
            <div className='mt-3'>
              <Button variant="primary" type="submit">Kirjaudu</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  }

export default App;
