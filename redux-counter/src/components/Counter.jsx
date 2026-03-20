import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../app/features-slices/counter/counterSlice";


function Counter() {
    // ✅ useSelector reads data from Redux store and updates the component automatically when state changes.
    // useSelector Redux store se data read karta hai aur component ko automatically updated data deta hai jab state change hoti hai.
    const count = useSelector((state) => state.counter);
    // ✅ useDispatch is used to send actions to Redux, optionally with payload, to update state.
    // Interview Line :- useDispatch Redux action ko trigger karta hai, aur payload ke through data reducer tak bhejta hai.
    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: "20px" }} className="text-2xl">
            <h2>Count: {count}</h2>

            {/* <button onClick={() => dispatch(increment())}>➕ Increment</button>
            <button onClick={() => dispatch(decrement())}>➖ Decrement</button> */}
            <button onClick={() => dispatch(increment(1))}>➕ Increment</button>
            <button onClick={() => dispatch(decrement(1))}>➖ Decrement</button>
            <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        </div>
    );
}

export default Counter;
