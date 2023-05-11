import ExpensesDate from "../Expenses/ExpensesDate";
import Cards from "../UI/Cards";
import "./CreateTable.css"

function CreateTable(props) {
    const data = props.items
    
    return (
    <Cards className="create-table">
        <table>
            <tr>
            <th>Date</th>
            <th>Items</th>
            <th>Amount</th>
            </tr>
            {data.map((value, key) => {
            return (
                <tr key={key}>
                <td>{value.price}</td>
                <td>{value.title}</td>
                <td><ExpensesDate date={value.date}/></td>
                </tr>
            )
            })}
        </table>
        </Cards>
    );
}

export default CreateTable;