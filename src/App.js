import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(actions.increament());
  };
  const decreament = () => {
    dispatch(actions.decreament());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div className='App'>
      <h1>Counter Ap By Redux Toolkit</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>+</button>{" "}
      <button onClick={decreament}>-</button>{" "}
      <button onClick={addBy}>Add Value By 10</button>
    </div>
  );
}

export default App;
