import React, { useState } from 'react'
// import { preview } from 'vite'

function HookCounter2() {
    const initialcount = 0;
    const[count,setCount]=useState(initialcount)
    // count incrFive = () =>{
        //  for(let i=0; i<5;i++)
        // {
         //   setCount(myprev => myprev+5)
      //  }
    //}
  return (
    <div>
    Count:{count}
    <button onClick={ ()=>setCount(initialcount)}>Reset</button>
    <button onClick={ ()=>setCount(prevecount =>prevecount+1)}>Increament</button>
    <button onClick={ ()=>setCount(prevecount => prevecount-1)}>Decrement</button>
    <button onClick={ ()=>setCount(prevecount => prevecount+5)}>Increament 5</button>
    </div>
  )
}

export default HookCounter2