import "./App.css";
import { useReducer } from "react";
import {upAction,downAction,resetAction,updateAction} from './store/actions/counter-action'
import counterReducer from './store/reducers/counter-reducer';

let initialState = 0;

function App() {
  const [myState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
      <h1>Counter</h1>
      <div id="numbercount">{myState}</div>
      <div id="button_id">
        <button onClick={() => dispatch(upAction())}>UP</button>
        <button onClick={() => dispatch(downAction())}>DOWN</button>
        <button onClick={() => dispatch(resetAction())}>RESET</button>
        <button onClick={() => dispatch(updateAction(6))}>UPDATE</button>
      </div>
    </div>
  );
}

export default App;
