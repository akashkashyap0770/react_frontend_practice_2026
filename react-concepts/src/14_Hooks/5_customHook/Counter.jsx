import React from 'react'
import useCustomHook from './useCustomHook'

function Counter() {

    const { count, increment, decrement, reset } = useCustomHook(0);

    return (
        <div>
            <h1 className="text-3xl">👉 useReducer Hook in React</h1>
            <div className='flex flex-col gap-y-2'>
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter