import Cards from "./components/UI/Cards";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expense = [
    {title:'apple', price:64, date:new Date(2015, 5, 22)},
    {title:'orange', price:52, date:new Date(2016, 5, 22)},
    {title:'mango', price:40, date:new Date(2017, 5, 22)}
  ];

  return (
    <Cards>
      <h1>Let's Start Now</h1>
      <Expenses items={expense}/>
    </Cards>
  );
}

export default App;
