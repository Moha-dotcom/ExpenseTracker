
import { useState } from 'react'
import './ExpenseForm.css'





const ExpenseForm = (props) => {
   const [userInput, setUserInput]  = useState({
        enteredtitle : '',
        enteredAmount : '',
        enteredDate : ''
    })
    function titleChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredtitle :event.target.value}
        })
    }
    function amountChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredAmount  :event.target.value}
        })
    }
    
    function dateChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredDate  : event.target.value}
        })  
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault()
        const expense = {
            title : userInput.enteredtitle,
            amount : userInput.enteredAmount,
            date : new Date(userInput.enteredDate)
        }
      
        console.log(new Date(userInput.enteredDate))

        if(expense.title.trim() !== ""  && expense.amount.trim() !== ""  && expense.date !== "Invalid Date"){
            props.onSaveExpense(expense);
        }
      
        setUserInput({
            enteredAmount : "",
            enteredtitle : "",
            enteredDate : ""

        })


     
    }


  

    return  (
        <form  onSubmit={FormSubmitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <lable>  Title </lable>
                    <input  onChange={titleChangeHandler} value={userInput.enteredtitle}  type="text" min={0.01} step={0.01}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Amount </lable>
                    <input onChange={amountChangeHandler}  value={userInput.enteredAmount}  type="number" min={0.01} step={0.01}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Date </lable>
                    <input  onChange={dateChangeHandler}  value={userInput.enteredDate}  type="date" min="2012-01-01"  max="2025-01-01" />
                </div>
                <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancle}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>

        </form>
    )
}

export default ExpenseForm;