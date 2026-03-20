import React from 'react'
import GrandChild from './GrandChild'

function Child({ value, state, updateState }) {
  return (
    <div>
      <h1 className='text-3xl'>👉 Child-Component</h1>
      <div className='flex flex-col gap-y-5'>
        <GrandChild value={value} state={state} updateState={updateState} />
      </div>
    </div>
  )
}

export default Child