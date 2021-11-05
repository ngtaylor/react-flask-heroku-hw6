import './App.css';
import React, { useState } from "react";

function App() {
  const[name, setName] = useState(" ");
  const[lastName, setLastName] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Fetching user' + name +  ' last name...')
    fetch("/app/" + name)
      .then(response =>
          response.json()
        )
      .then(data => {
        setLastName(data.lastName)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div>
    <form onSubmit = {handleSubmit}>
            <p>Enter User First Name:</p>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
    </form>
    <p>
      User Last Name:
    </p>
    <p>
      {lastName}
    </p>
    </div>
  );
}

export default App;
