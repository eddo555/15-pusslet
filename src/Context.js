import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider(props) {
  // const [board, setBoard] = useState([]);
  const [resetBoard, setResetBoard] = useState(false);
  // const [oddTile, setOddTile] = useState();

  const [secBoard, setSecBoard] = useState([]);
  const [resetSecBoard, setResetSecBoard] = useState(false);

  //set number of rows and columns
  const rows = 4;
  const columns = 5;
  const totalNumb = rows * columns;

  // 1d array

  // useEffect(() => {
  //   let num = [];
  //   //set board
  //   for (let index = 0; index < totalNumb; index++) {
  //     num.push(index + 1);
  //   }
  //   //randomize board
  //   num = num.sort(() => Math.random() - 0.5);
  //   setBoard(num);

  //   //find and set the grey tile
  //   const greyTile = num.indexOf(totalNumb);
  //   setOddTile(greyTile);
  // }, [resetBoard]);

  useEffect(() => {
    //2d array

    var newBoard = new Array(rows);

    for (let i = 0; i < rows; i++) newBoard[i] = new Array(rows);

    var start = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        newBoard[i][j] = start;
        start = start + 1;
      }
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        setSecBoard(newBoard);
      }
    }

    //randomize board

    for (var i = 0; i < newBoard.length; i++) {
      for (var j = 0; j < newBoard[i].length; j++) {
        var i1 = Math.floor(Math.random() * newBoard.length);
        var j1 = Math.floor(Math.random() * newBoard.length);

        var temp = newBoard[i][j];
        newBoard[i][j] = newBoard[i1][j1];
        newBoard[i1][j1] = temp;
      }
      setSecBoard(newBoard);
    }
  }, [resetSecBoard]);

  //change state in resetBoard in order to run useEffect and reset the board
  const reset = (board) => {
    board === "1d"
      ? setResetBoard(!resetBoard)
      : setResetSecBoard(!resetSecBoard);
  };

  // move tiles in 1d array
  // const moveTiles = (num) => {
  //   console.log("clicked Tile", num);

  //   setBoard((array) => {
  //     let data = [...array];
  //     let temp = data[oddTile];

  //     if (num > oddTile) {
  //       data[oddTile] = data[oddTile + 1];
  //       data[oddTile + 1] = temp;
  //       console.log("oddTile + 1");
  //       return data;
  //     }
  //     if (num <= oddTile) {
  //       data[oddTile] = data[oddTile - 1];
  //       data[oddTile - 1] = temp;
  //       console.log("oddTile - 1");
  //       return data;
  //     }
  //   });
  // };

  const moveTwoDTiles = (i, j) => {
    // console.log("clicked Tile", i, j);
    //unfinished
  };

  return (
    <div>
      <Context.Provider
        value={{
          // board,
          reset,
          // moveTiles,
          moveTwoDTiles,
          secBoard,
          rows,
          columns,
          totalNumb,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
