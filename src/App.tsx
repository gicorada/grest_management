import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase'

function App() {
  const [iscritti, setIscritti] = useState(['']);

  async function getIscritti() {
    try {
      const { data, error } = await supabase.from("iscrizioni").select("*");
  
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(data);
        setIscritti(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }


  useEffect(() => {
    getIscritti();
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Lista Iscritti</h1>
        <ul>
          {iscritti.map((iscritto: any) => (
            <li key={iscritto.id}>
              {iscritto.id} - {iscritto.nome} - {iscritto.cognome} - {iscritto.dob}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
