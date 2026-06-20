import React from "react";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Customer Dashboard</h1>

      <UserCard
        name="Manoj Chawda"
        email="manoj@test.com"
      />
    </div>
  );
}

export default App;