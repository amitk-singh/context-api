import React,{useContext} from "react";
import CountContext  from "../context/countContext";



const ComponentB = () => {

    const countContext = useContext(CountContext);

  return (
    <div>ComponentB {countContext.countState}
     
     <button onClick={()=>countContext.countDispatch('increment')}>Inc</button>
     <button onClick={()=>countContext.countDispatch('decrement')}>Dec</button>
     <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentB;