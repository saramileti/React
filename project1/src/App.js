import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
  

const DUMMY_EXPENSES = [
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
      date: new Date(2021, 9, 2),
    },

    {
      id: 'e3',
      title: 'To Kill a Mockingbird',
      amount: 34.5,
      date: new Date(2020, 11, 28),
    },
    {
      id: 'e4',
      title: 'Crime and Punishment',
      amount: 50.11,
      date: new Date(2019, 7, 20),
    },

  ];
const App = ()  => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
   
  }

  return (
    <div >
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}></Expenses>
      
    </div>
  );
}

export default App;
