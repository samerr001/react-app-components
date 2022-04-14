import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
      setIsEditing(!isEditing)
  }
  return (
    <div className="new-expense">
        {!isEditing ?
        <button onClick={startEditingHandler} >Add new Expense</button> : 
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} startEditingHandler={startEditingHandler}/> }
    </div>
  );
};

export default NewExpense;
