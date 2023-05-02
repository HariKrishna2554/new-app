import ExpensesDate from './ExpensesDate';
import Cards from "../UI/Cards";
import './ExpenseItem.css';

function ExpensesItem(props) {
    const buttonHandler = () => {
        alert("Items Details are Saved!");
    };
    return (
        <Cards className='expense-item'>
            <ExpensesDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Cards className='expense-item__price'>${props.price}</Cards>
            </div>
            <button onClick={buttonHandler}>Save items</button>
        </Cards>
    );
}

export default ExpensesItem;