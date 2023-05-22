import React from "react";
import Cards from "./components/UI/Cards";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
// import FilterWithSearch from "./components/Filter/Filter";
// import CreateTable from "./components/CreateTable/CreateTable";

function App() {
  const expenses = [
    {title:'apple', price:64, date:new Date(2015, 5, 22)},
    {title:'orange', price:52, date:new Date(2023, 4, 11)},
    {title:'mango', price:40, date:new Date(2017, 5, 22)}
  ];

  const addExpenseHandler = expense => {
    console.log("hai");
    console.log(expense);
  };

  return (
    <Cards>
      <h1>Let's Start Now</h1>
      {/* <FilterWithSearch items={expenses}/> */}
      {/* <CreateTable items={expenses} /> */}
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </Cards>
  );
}

export default App;
