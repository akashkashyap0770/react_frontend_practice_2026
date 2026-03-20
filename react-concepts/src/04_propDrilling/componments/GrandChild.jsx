import React from 'react'

function GrandChild({ value, state, updateState }) {
  return (
    <div>
      <h1 className='text-3xl'>👉 Grand-Child-Component</h1>
      <div className='flex flex-col gap-y-5'>
        <p>{value}</p>
        <div>
          <p>Count: {state}</p>
          <button onClick={updateState}>Update State</button>
        </div>
      </div>
    </div>
  )
}

export default GrandChild