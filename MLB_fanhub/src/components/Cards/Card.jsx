import React from "react";

function Card({teamName='null'}) {
  return (
    <div className="bg-amber-300 card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{teamName}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Info</button>
        </div>
      </div>
    </div>
  );
}

export default Card;