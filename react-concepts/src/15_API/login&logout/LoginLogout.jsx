import React, { useState } from "react";

function LoginLogout() {
  // Predefined (mock) user credentials
  const userData = {
    validEmail: "ak@gmail.com",
    validPassword: "1234",
  };
  // Form State
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ✅ Lazy initialization (no useEffect needed)
  const [isLogged, setIsLogged] = useState(() => {
    return localStorage.getItem("users") ? true : false;
  });

  // ✅ Handle Input Change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // handleLogin
  function handleLogin() {
    const { username, email, password } = formData;
    if (email === userData.validEmail && password === userData.validPassword) {
      localStorage.setItem(
        "users",
        JSON.stringify({ email, password, username }),
      );
      setIsLogged(true);
      alert(`✅ Loggin successfull!`);
    } else {
      alert(`❌ Invalid email or password.`);
    }
  }

  // handleLogout
  function handleLogout() {
    localStorage.removeItem("users");
    setIsLogged(false);
    setEmail("");
    setPassword(""); // reset form
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    alert("👋 Logged out.");
  }

  return (
    <div>
      <h1 className="text-3xl">
        Login & Logout Without API (with Email/Password Check)
      </h1>
      {!isLogged ? (
        <>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2 className="text-3xl">
            Welcome {JSON.parse(localStorage.getItem("users"))?.username}🎉
          </h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default LoginLogout;
