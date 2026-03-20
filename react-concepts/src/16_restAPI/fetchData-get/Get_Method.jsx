import React, { useEffect, useState } from "react";

function Get_Method() {
  const [users, setUsers] = useState([]);

  // RestAPI :- REST API stands for Representational State Transfer. It is an architectural style of API that follows REST principles using HTTP methods.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Users Data", data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>GET Request – Fetch Data</h2>
      <h2>
        API is a general way for applications to communicate, while REST API is
        a specific type of API that follows REST principles using HTTP methods.
      </h2>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.address.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Get_Method;
