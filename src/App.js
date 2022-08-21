import logo from './logo.svg';
import './App.css';
import data from './data';
import List from './List';
import { useState } from 'react';

function App() {
  const [people, setProple] = useState(data);
  // console.log(people);
  return (
      <main>
        <section className='container'>
          <h2>Birthday Reminder</h2>
          <h3>{people.length} Birthday Today</h3>
          {/* <h2>{people[1].name}</h2> */}
          <List birthdaypeople={people} />
        <button onClick={() => console.log('you clicked me!')}>Clear All</button>
        </section>
      </main>
  );
}

export default App;
