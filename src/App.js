import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState(0);
  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setUsers(response)
    })
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome! Here is a list of GitHub users:
        </p>
        {
          (users!==0) ?
            users.map(user => {
              return (
                <div class="container">
                  <div class="top">
                    <h1>{user.login}</h1>
                  </div>
                  <div class="bottom">
                    <img src={user.avatar_url}/> 
                    <p>User No: {user.id}</p>
                    <p><a href={user.html_url}>Account link</a></p>
                  </div>
                </div>
              )
            }) : null
        }
      </header>
    </div>
  );
}

export default App;
