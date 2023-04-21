import Expanses from "./components/Expanses";
import FirstComponent from "./components/FirstComponents";

const App = () => {
  const product = [
    {title:'apple', price:64, date:new Date(2015, 5, 22)},
    {title:'orange', price:52, date:new Date(2016, 5, 22)},
    {title:'mango', price:40, date:new Date(2017, 5, 22)}]
    
  return (
    <div>
      <h1>Let's Start Now</h1>
      <p className='discription'>Hai, I am a First Component in Your Program</p>
      <Expanses></Expanses>
    </div>
  );
}

export default App;
