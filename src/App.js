import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = ()  => {

  const expenses = [
    {
      id: 'e1',
      title: 'Atomic Habits',
      amount: 25.08,
      date: new Date(2022, 2, 11),
    },
    {
      id: 'e2',
      title: 'The Kite Runner',
      amount: 30.5,
      date: new Date(1997, 9, 2),
    },

    {
      id: 'e3',
      title: 'To Kill a Mockingbird',
      amount: 34.5,
      date: new Date(2000, 11, 28),
    },
    {
      id: 'e4',
      title: 'Crime and Punishment',
      amount: 50.11,
      date: new Date(2015, 7, 20),
    },

  ];

  return (
    <div >
      <h2>Sara! Let's get you started!</h2>
      <Expenses items = {expenses}></Expenses>
      
    </div>
  );
}

export default App;
