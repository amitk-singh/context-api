import './App.css';
import React,{useReducer} from 'react'; // step-2

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const CountContext = React.createContext() // step-4

// step-1
const initialState = 0;

const reducer = (state,action)=>{

  switch(action){
    case 'increment':
      console.log(state)
      return state+1
    case 'decrement':
      return state-1
    case 'reset':
      return initialState
    default:
      return state      
  }

  
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState); //step-3 (similar to useState) // reducer is function

  return (

    <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>

    
    <div className="App">
        {count}
     <ComponentA/>
     <ComponentB/>
     <ComponentC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
