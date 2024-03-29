import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick1(){
    alert("Hello! Button 01 clicked!");
  }

  const handleClick2 = () => {
    alert("Hello! Button 02 clicked!");
  }

  const handleClick4 = (number) => {
    alert(number + 5);
  }

  return (
    <>
      
      <h1>React core concepts - 02</h1>

      <Friends></Friends>
      <Users></Users>
      
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick1}>Button 01</button>
      <button onClick={handleClick2}>Button 02</button><br />
      <button onClick={() => {alert("Hello! Button 03 clicked!")}}>Button 03</button>
      <button onClick={() => {handleClick4(10)}}>Button 04</button>
      
    </>
  )
}

export default App
