import React, { useState } from 'react';
import './App.css';
import moment from 'moment';

const date = new Date();

function App() {
  const [ event, setEvent] = useState('');
  return (
    <div id="container">
        <div>
          <h1>The Acme Event App</h1>
          <h2>Today is { moment(date).format('ddd MM/DD/YYYY')}</h2>
          <form>
            <input placeholder='New Date...'></input>
            <input placeholder='Title...'></input>
            <input placeholder='Content...'></input>
            <button>SAVE</button>
          </form>
        </div>
      <div>
        <button>X</button>
      </div>
    </div>
  )
}
export default App;
