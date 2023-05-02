import ExpensesItem from "./ExpensesItem";
import "./Expense.css";
import Cards from "../UI/Cards";

function Expenses(props) {
    return(
        <Cards className="expenses">
            <ExpensesItem
                title={props.items[0].title}
                price={props.items[0].price}
                date={props.items[0].date}
            />
            <ExpensesItem
                title={props.items[1].title}
                price={props.items[1].price}
                date={props.items[1].date}
            />
            <ExpensesItem
                title={props.items[2].title}
                price={props.items[2].price}
                date={props.items[2].date}
            />
        </Cards>
    );
}

export default Expenses;
