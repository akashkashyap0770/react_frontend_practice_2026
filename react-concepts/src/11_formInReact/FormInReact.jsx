import React, { useState } from "react";

function FormInReact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      // 👉 React me jab hum state update karte hain, to purani state automatically save nahi hoti. Agar hume purani values bhi rakhni ho aur sirf kuch change karna ho, to hum spread operator (...) ka use karte hain.
      ...formData,
      /* 
            📝 Yaad rakhne ka rule:-
                { name: value } → static key
                { [name]: value } → dynamic key ✅

                👉 React me jab hum object ke andar koi key dynamically update karna chahte hain, to [name] ka use karte hain. Ye computed property name hai jo input field ke name attribute ke hisaab se object ke key ko dynamically set karta hai.
            */
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1 className="text-3xl">👉 Form in React</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>React Form</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormInReact;
