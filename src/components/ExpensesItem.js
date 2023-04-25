import ExpensesDate from './ExpensesDate';
import Cards from './Cards';
import './ExpenseItem.css';

function ExpensesItem(props) {
    return (
        <Cards className='expense-item'>
            <ExpensesDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Cards className='expense-item__price'>${props.price}</Cards>
            </div>
        </Cards>
    );
}

export default ExpensesItem;