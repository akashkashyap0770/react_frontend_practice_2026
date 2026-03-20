import React from 'react'

function Prop(props) {

  return (
    <div className='flex flex-col justify-center gap-5'>
      <h1 className='text-4xl'>👉 Props in React</h1>
      <div>
        <p>🙎Name: {props.name}</p>
        <p>🧑‍💻Role: {props.role}</p>
        <button className='bg-blue-600 p-2 rounded-md text-xl' onClick={props.fun}>Click and alert the result.</button>
      </div>
    </div>
  )
}

export default Prop