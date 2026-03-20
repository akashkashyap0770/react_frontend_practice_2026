import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl">👉 Dashboard</h2>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
