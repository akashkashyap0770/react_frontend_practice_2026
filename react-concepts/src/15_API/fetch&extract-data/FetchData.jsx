import React, { useEffect, useState } from "react";

function FetchData() {
  // API :- API stands for Application Programming Interface. It allows communication between the client and the server, acting as a bridge between them.

  //   ✅ Lazy initialization of state:- Lazy initialization React ke useState hook ka ek feature hai
  //  jisme direct value dene ki jagah ek function pass kiya jata hai. Iska benefit ye hai ki expensive logic (jaise localStorage, se data read karna, heavy calculation ya data processing), sirf initial render ke time execute hota hai, har re-render par nahi.

  //  Is example me localStorage se users data sirf ek baar, read hota hai aur agar data available ho to JSON.parse karke state me store kar diya jata hai.
  const [users, setUsers] = useState(() => {
    //🔹 API se data JSON hota hai, localStorage me save karte time string banate hain, aur get karte time JSON.parse se wapas JS object banate hain.
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // Hum useEffect ke andar data fetch karte hain taaki component bar-bar render hone par multiple API calls na ho. Phir jo API se data milta hai, use state me store kar dete hain aur last me .map() ka use karke UI me render karte hain.
  useEffect(() => {
    if (users.length === 0) {
      fetch("http://localhost:5000/api/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          setUsers(data.results);
          localStorage.setItem("users", JSON.stringify(data.results));
        })
        .catch((err) => {
          console.error("Frontend fetch error:", err);
          setError(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Fetch Data</h1>
      <h2>
        API is a general way for applications to communicate, while REST API is
        a specific type of API that follows REST principles using HTTP methods.
      </h2>

      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.large} alt="user" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FetchData;
