import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
