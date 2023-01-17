import React, {useState} from 'react';
import './App.css';
import {Login} from "./login/Login";
import {Layout} from "./Layout";


function App() {
    const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
        {
            isLogged ?
                <Layout />
                :
                <Login onLogin={setIsLogged} />
        }
    </div>
  );
}

export default App;
