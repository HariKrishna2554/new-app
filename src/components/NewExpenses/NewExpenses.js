import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";
import React from "react";

function NewExpenses(props) {
    const saveExpenseDataHandler = (enteredExpensesData) =>{
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
};
    return <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpenses;