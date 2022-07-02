import React, { useState } from "react";
import "./index.css";
import data from "./data";
import List from "./List";
function App() {
  const [peopleDetails, setPeopleDetails] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{peopleDetails.length} Birthdays today</h3>
        <List peopleDetails={peopleDetails} />
        <button
          onClick={() => {
            setPeopleDetails([]);
          }}
        >
          Clear
        </button>
      </section>
    </main>
  );
}

export default App;
