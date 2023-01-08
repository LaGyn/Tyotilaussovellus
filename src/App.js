//Reactilla ohjelmoitaessa yleensä kaikki renderöitävä sisältö määritellään Reactin komponenttien avulla.
//import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn'
import Register from './components/Register';
import Button from 'react-bootstrap/Button';


const App = () => {
  console.log('Sähköinen työtilausjärjestelmä')

  return (
    <div className="container-sm p-3">
      <div className='mt-3'>
        <img src="/public/logo192.png" alt="Logo"/>
        <h1>Sähköinen työtilausjärjestelmä</h1>
      </div>

      <div>
        <div className='mt-3 float-end'>
          <h2>Uusi käyttäjä?</h2>
          <Register/>
        </div>
      </div>

      <div>
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
