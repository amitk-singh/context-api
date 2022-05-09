import './App.css';


import React,{ useContext } from 'react';
import CountContext from './context/countContext';


import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";





function App() {

  const countContext = useContext(CountContext);

  return (

   

  
    <div className="App">
      {countContext.countState}
     <ComponentA/>
     <ComponentB/>
     <ComponentC/>
    </div>
   
    
  );
}

export default App;
