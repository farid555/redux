import React from 'react'
import {connect} from "react-redux"
import {increment, decrement} from "../redux/counter/actions.js"


const Counter = ({count, increment, decrement}) => {

  console.log(count, increment, decrement);
  return (
    <div className="flex flex-col items-center" > <h2 className="font-sans text-black text-lg font-bold"> Counter Number: {count}</h2>
    <div className="grid justify-items-stretch box-content h-28 w-96 
     bg-blue-500 p-16">
    
    <button className="font-sans text-white text-md font-bold m-2 p-2 bg-red-400 rounded-lg shadow-md"  onClick={increment}>Increment
     </button>
    <button className="font-sans text-white text-md font-bold m-2 p-2 bg-red-400 rounded-lg shadow-md"  onClick={decrement}>Decrement
     </button>
      
    </div>
    </div>
  )
}

const mapStateToProps =(state) =>{
    return{
      count: state.value,
    }
   
}


const mapDispatchToProps =(dispatch) =>{
 
  return{
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

