import React, { useReducer } from 'react'

// 1️⃣ Define reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function UseReducer() {

    // 2️⃣ Initialize useReducer
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1 className="text-3xl">👉 useReducer Hook in React</h1>
            <div className='flex flex-col gap-y-5'>
                <h2>Counter with useReducer Hook</h2>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducer