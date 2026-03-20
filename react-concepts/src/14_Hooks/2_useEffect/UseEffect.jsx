import React, { useState, useRef, useEffect } from "react";

function UseEffectVsRef() {
  // useState → triggers re-render
  const [stateCount, setStateCount] = useState(0);

  // useRef → does not trigger re-render
  const refCount = useRef(0);

  // side effect for stateCount
  useEffect(() => {
    document.title = `State Count: ${stateCount}`;
    console.log("State Count updated:", stateCount);
  }, [stateCount]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">useState vs useRef Demo</h1>

      <div className="mb-5">
        <h2 className="text-xl">useState Counter: {stateCount}</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => setStateCount(stateCount + 1)}
        >
          Increment State
        </button>
        <p>✅ UI updates automatically and document title changes.</p>
      </div>

      <div>
        <h2 className="text-xl">useRef Counter: {refCount.current}</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => {
            refCount.current += 1;
            console.log("Ref Count:", refCount.current);
            alert(
              `Ref Count incremented: ${refCount.current} (UI does NOT update)`,
            );
          }}
        >
          Increment Ref
        </button>
        <p>
          ❌ UI does NOT update for refCount. Only console/alert shows the
          change.
        </p>
      </div>
    </div>
  );
}

export default UseEffectVsRef;
