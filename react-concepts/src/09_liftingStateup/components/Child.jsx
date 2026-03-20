import React from "react";

function Child({ count }) {
  return (
    <div>
      <h1 className="text-xl">👉 Child Component</h1>
      <p>Child A Count: {count}</p>
    </div>
  );
}

export default Child;
