import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";

function NewExpenses(props) {
    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
}
    return <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}/>
    </div>
};

export default NewExpenses;