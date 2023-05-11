import Cards from "../UI/Cards";
import "./Filter.css"
import React, {useState} from "react";
import CreateTable from "../CreateTable/CreateTable";

function FilterWithSearch(props) {
    const [enteredDate, setEnteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const filteredItems = props.items.filter((selectedDate) => { return props.items.date === enteredDate});

    return (
        <div>
        <Cards className="custom-filter">
            <div>Filter by Date</div>
            <input type="date" min="2014-05-01" max="2024-01-01" onChange={dateChangeHandler} />
        </Cards>
        <CreateTable items={filteredItems} />
        </div>
    );
}

export default FilterWithSearch;