//Reactilla ohjelmoitaessa yleensä kaikki renderöitävä sisältö määritellään Reactin komponenttien avulla.
import SignIn from './components/SignIn'

const modal = document.getElementById("myModal");
const kirjaudu = document.getElementById('register');
const closebtn = document.getElementById("closeModal");

//Modaalin aukaisu:
kirjaudu.onclick = function(){
  modal.style.display = "block";
}

//Modaalin sulkeminen:
closebtn.onclick = function(){
  modal.style.display = "none";
  //upDate();
}

const App = () => {
  console.log('Sähköinen työtilausjärjestelmä')
  return (
    <div>
      <img src="/public/logo192.png" alt="Logo"/>
      <h1>Sähköinen työtilausjärjestelmä</h1>
      <h2>Rekisteröidy</h2>
      <div>
          <button id="register" type="submit">Rekisteröidy</button>
      </div>

      <div id="myModal" class="modal">
          <div class="modal-content">

            <form name="registerForm">   
              <div class="row">
                  <div class="row">
                      <label for="name">Käyttäjätunnus:</label>
                      <input type="text" id="name" name="name"/>
                  </div>
                  <div class="row">
                      <label for="name">Salasana:</label>
                      <input type="text" id="password" name="password"/>
                  </div> 
              </div>
            </form>
            <div class="button">
                <button id="closeModal" type="submit">Register</button>
            </div>

        </div>
      </div>

      <h2>Kirjaudu</h2>
      <form>
        Käyttäjätunnus: <SignIn />
        Salasana: <SignIn />
        <div>
          <button type="submit">Kirjaudu</button>
        </div>
      </form>
    </div>
  )
  }

export default App;
