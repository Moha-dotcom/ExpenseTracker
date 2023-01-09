import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpenseChart from './ExpenseChart'
import './ExpenseList.css'


function Expenses(props) {

    const [filterSelectedYear, setfilterSelectedYear] = useState("2023");


   const filterchangeHandler  =( (selectedYear) => {
            setfilterSelectedYear(selectedYear)
   })

   const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterSelectedYear;
   })

   let expenseContent =  <p className='expenses-list__fallback'>No   Expenses   Found</p>

   function filterMethod (){
   return filteredExpense.length > 0 ? 
                filteredExpense.map((expense) => (
                <ExpenseItem   className='expenses-list'
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}>
                </ExpenseItem>) )
             :
                expenseContent
   }

    return (
        <div>
         
        
        <Card className="expenses">
        <ExpensesFilter selected = {filterSelectedYear} onchangeFilter={filterchangeHandler}></ExpensesFilter>
        <ExpenseChart expenses={filteredExpense} />
          {filterMethod()}
       
        </Card>

        </div>

    )
}

export default Expenses