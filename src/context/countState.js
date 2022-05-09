import React,{useReducer} from 'react';
import CountContext from './countContext';
import CountReducer from './countReducer';




const CountState = (props)=>{

    const initialState = 0;
    const [count, dispatch] = useReducer(CountReducer, initialState);


    return <CountContext.Provider value={{countState:count, countDispatch:dispatch}} >
   {props.children}
    </CountContext.Provider>
}


export default CountState;