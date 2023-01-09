

import { useState } from "react";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date : new Date(2021, 4, 8)
  },

  {
    id: 'e2',
    title: 'Desk Paper',
    amount: 94.12,
    date : new Date(2019, 4, 8)
  },

  {
    id: 'e3',
    title: 'Book 2',
    amount: 94.12,
    date : new Date(2019, 4, 8)
  }
  ,

  {
    id: 'e4',
    title: 'Book 3',
    amount: 94.12,
    date : new Date(2020, 4, 8)
  }
  

 
  
];

function App() {


  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function addExpenseHandler(expense){
    setExpenses((prevExpense) => {
        
          return [expense, ...prevExpense]
      })
  }


  return (

    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <NewExpense onAddExpense = {addExpenseHandler} />
         <Expenses  items={expenses}></Expenses>
    </div>
    
  );
}


export default App;
