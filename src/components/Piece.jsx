import React from "react";
import "./Piece.css";

function Piece(props) {
  return (
    <div className="piece">
      <h1>{props.type}</h1>
      <img src={props.imgURL} alt="clothing-img"></img>
    </div>
  );
}

export default Piece;
