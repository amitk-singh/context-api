const reducer = (state,action)=>{

    switch(action){
      case 'increment':
        console.log(state)
        return state+1
      case 'decrement':
        return state-1
      case 'reset':
        return 0
      default:
        return state      
    }
  
    
  }

  export default reducer;