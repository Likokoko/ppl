import React, { useState } from "react";
import RandomUser from "./data";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState([]);
  return (
    <main>
      <section className="container">
        <h3>{people} birthdays today</h3>
        <RandomUser people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default App;
