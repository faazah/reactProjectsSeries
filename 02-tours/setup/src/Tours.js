import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  // console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((item) => {
          return <Tour key={item.id} {...item} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
