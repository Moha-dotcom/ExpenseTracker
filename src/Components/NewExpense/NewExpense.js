
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

  

const NewExpense  = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    function saveExpenseDataHandler (enterredExpenseData){
        const expenseData = {
            ...enterredExpenseData,
            id : (Math.random() * 10_00_000000).toString()
        };
        
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }


    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense= {saveExpenseDataHandler} onCancle = {stopEditingHandler} />}
        </div>
    )

}
export default  NewExpense;