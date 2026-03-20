import React from "react";
import { Data } from "../context/Context";

function UserProfile() {
  return (
    <div>
      <h1 className="text-2xl">👉 User-Profile</h1>

      <Data.Consumer>
        {({ user, setUser }) => {
          const toggleLogin = () => {
            setUser({
              ...user,
              isLoggedIn: !user.isLoggedIn,
            });
          };

          return (
            <div className="flex flex-col gap-y-5">
              {/* 🔹 Name */}
              <p>Name: {user.isLoggedIn ? user.name : "You have to login"}</p>

              {/* 🔹 Status */}
              <p>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</p>

              {/* 🔹 Toggle Button */}
              <button onClick={toggleLogin}>
                {user.isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          );
        }}
      </Data.Consumer>
    </div>
  );
}

export default UserProfile;
