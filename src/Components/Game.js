import React, { useContext } from "react";
import { Context } from "../Context";

function Game() {
  const {
    // board,
    reset,
    // moveTiles,
    moveTwoDTiles,
    secBoard,
    rows,
    columns,
    totalNumb,
  } = useContext(Context);

  return (
    <div>
      {/* one dimensional array 
          uncomment to display
      */}
      {/* <div className="outer-container">
        <div
          className="container"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {board.map((num, index) =>
            num === 15 ? (
              <div
                className="tile oddTile"
                key={index}
                onClick={() => console.log(num, index)}
              >
                {num}
              </div>
            ) : (
              <div
                className="tile"
                key={index}
                onClick={() => moveTiles(index)}
              >
                {num}
              </div>
            )
          )}
        </div>
        <button className="btn" onClick={() => reset("1d")}>
          Slumpa
        </button>
      </div> */}
      {/* one dimensional array */}
      <div className="outer-container">
        <div
          className="container"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {secBoard.map((items, index) =>
            items.map((subItems, subIndex) =>
              subItems === totalNumb ? (
                <div
                  className="tile oddTile"
                  key={subIndex}
                  onClick={() => moveTwoDTiles(index, subIndex)}
                >
                  {subItems}
                </div>
              ) : (
                <div
                  className="tile"
                  key={subIndex}
                  onClick={() => moveTwoDTiles(index, subIndex)}
                >
                  {subItems}
                </div>
              )
            )
          )}
        </div>
        <button className="btn" onClick={() => reset("2d")}>
          Slumpa
        </button>
      </div>
    </div>
  );
}

export default Game;
