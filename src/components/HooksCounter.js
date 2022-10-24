import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from "../redux/counter/actions.js"

const HooksCounter = () => {

 
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value)=>{
    dispatch(increment(value));
  }

  const decrementHandler = (value)=>{
    dispatch(decrement(value));
 }
  return (
    <div className="flex flex-col items-center" > <h2 className="font-sans text-black text-lg font-bold"> Counter Number: {count}</h2>
    <div className="grid justify-items-stretch box-content h-28 w-96 
     bg-blue-500 p-16">
    
    <button className="font-sans text-white text-md font-bold m-2 p-2 bg-red-400 rounded-lg shadow-md"  onClick={()=> incrementHandler(5)}>Increment
     </button>
    <button className="font-sans text-white text-md font-bold m-2 p-2 bg-red-400 rounded-lg shadow-md"  onClick={() => decrementHandler(5)}>Decrement
     </button>
      
    </div>
    </div>
  )
}

export default HooksCounter;
