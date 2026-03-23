import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Data } from "./context/Context";

/*
✅ Definition ( useContext ) :- useContext hook in react allows you to consume or access the value of a context directly within a function component. It is used when you want to read the data from a context that has been provided by a parent component using the contextAPI.
*/

function UseContextHook() {
  const [user, setUser] = useState({
    name: "Akash kashyap",
    isLoggedIn: false,
  });

  return (
    <div>
      <h1 className="text-3xl">👉 UseContext-Hook in React</h1>
      <div>
        {/* Double curly braces are used because JSX requires {} to evaluate JavaScript, and the inner {} represent an object literal. */}
        <Data.Provider value={{ user, setUser }}>
          <Dashboard />
        </Data.Provider>
      </div>
    </div>
  );
}

export default UseContextHook;
