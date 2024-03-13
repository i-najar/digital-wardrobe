import React, { useState } from "react";
import Piece from "./components/Piece";
import clothes from "./data/clothes";
import "./App.css";

// Create a new Piece component for every one that exists in our database.
// Could have something like:
// [pieces, setPieces] = useState([])
// <pieces.map((piece, index) => {<Piece key={w/e} id={index} img={image} onChecked={deleteItem}/>}))>
// Every piece should be an object with relevant info: piece1 = {type: shirt, color: blue, imageURL: picture.site/shirt}
// Put them in an array called "pieces".

function App() {
  const [images, setImages] = useState(clothes);

  return (
    <div className="App">
      <h1>Hi....</h1>
      {images.map((piece, index) => (
        <Piece key={index} id={index} type={piece.type} imgURL={piece.imgURL} />
      ))}
    </div>
  );
}

export default App;
