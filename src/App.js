import React, { useState, useEffect } from "react";
// STYLE
import styled from "styled-components";

function App() {
  const [playBoxs, setPlayBoxs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [turn, setTurn] = useState(1);

  useEffect(() => {}, []);

  const ClickDisc = (disc, row, column) => {
    if (playBoxs[row][column] !== 0) {
      return;
    } else if (canClickSpot(row, column) === true) {
      let affectedDiscs = getAffectedDiscs(row, column);
      if (turn === 1) {
        flipDisks(affectedDiscs, row, column);
        setTurn(2);
      } else if (turn === 2) {
        flipDisks(affectedDiscs, row, column);
        setTurn(1);
      }
    }
  };

  //클릭할수있는곳인지 확인
  function canClickSpot(row, column) {
    let affectedDiscs = getAffectedDiscs(row, column);
    if (affectedDiscs.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  //영향을 받는박스인지 확인
  function getAffectedDiscs(row, column) {
    let affectedDiscs = [];
    //to the right
    let couldBeAffected = [];
    let columnIterator = column;
    while (columnIterator < 7) {
      columnIterator += 1;
      let valueAtSpot = playBoxs[row][columnIterator];

      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: row, column: columnIterator };
        couldBeAffected.push(discLoction);
      }
    }
    //to the left
    couldBeAffected = [];
    columnIterator = column;
    while (columnIterator > 0) {
      columnIterator -= 1;
      let valueAtSpot = playBoxs[row][columnIterator];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: row, column: columnIterator };
        couldBeAffected.push(discLoction);
      }
    }

    //above
    couldBeAffected = [];
    let rowIterator = row;
    while (rowIterator > 0) {
      rowIterator -= 1;
      let valueAtSpot = playBoxs[rowIterator][column];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: column };
        couldBeAffected.push(discLoction);
      }
    }

    //below
    couldBeAffected = [];
    rowIterator = row;
    while (rowIterator < 7) {
      rowIterator += 1;
      let valueAtSpot = playBoxs[rowIterator][column];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: column };
        couldBeAffected.push(discLoction);
      }
    }

    //down right
    couldBeAffected = [];
    rowIterator = row;
    columnIterator = column;
    while (rowIterator < 7 && columnIterator < 7) {
      rowIterator += 1;
      columnIterator += 1;
      let valueAtSpot = playBoxs[rowIterator][columnIterator];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: column };
        couldBeAffected.push(discLoction);
      }
    }
    //down left
    couldBeAffected = [];
    rowIterator = row;
    columnIterator = column;
    while (rowIterator < 7 && columnIterator > 0) {
      rowIterator += 1;
      columnIterator -= 1;
      let valueAtSpot = playBoxs[rowIterator][columnIterator];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: columnIterator };
        couldBeAffected.push(discLoction);
      }
    }

    //above right;
    couldBeAffected = [];
    rowIterator = row;
    columnIterator = column;
    while (rowIterator > 0 && columnIterator < 7) {
      rowIterator -= 1;
      columnIterator += 1;
      let valueAtSpot = playBoxs[rowIterator][columnIterator];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: columnIterator };
        couldBeAffected.push(discLoction);
      }
    }
    //above left;
    couldBeAffected = [];
    rowIterator = row;
    columnIterator = column;
    while (rowIterator > 0 && columnIterator > 0) {
      rowIterator -= 1;
      columnIterator -= 1;
      let valueAtSpot = playBoxs[rowIterator][columnIterator];
      if (valueAtSpot === 0 || valueAtSpot === turn) {
        if (valueAtSpot === turn) {
          affectedDiscs = affectedDiscs.concat(couldBeAffected);
        }
        break;
      } else {
        let discLoction = { row: rowIterator, column: columnIterator };
        couldBeAffected.push(discLoction);
      }
    }
    return affectedDiscs;
  }

  function flipDisks(affectedDiscs, row, column) {
    affectedDiscs.map((spot, idx) => {
      if (playBoxs[spot.row][spot.column] === 2) {
        setPlayBoxs(
          playBoxs.map((items, idx) => {
            return idx === spot.row || idx === row
              ? items.map((item, idx) => {
                  return idx === spot.column || idx === column ? 1 : item;
                })
              : items;
          })
        );
      } else if (playBoxs[spot.row][spot.column] === 1) {
        setPlayBoxs(
          playBoxs.map((items, idx) => {
            return idx === spot.row || idx === row
              ? items.map((item, idx) => {
                  return idx === spot.column || idx === column ? 2 : item;
                })
              : items;
          })
        );
      }
    });
  }

  return (
    <MainBox>
      <InnerBox>
        {playBoxs.map((playBox, row) => {
          return (
            <PlayBoxBar key={row}>
              {playBox.map((disc, column) => {
                return (
                  <PlayBox
                    key={column}
                    onClick={() => {
                      ClickDisc(disc, row, column);
                    }}
                  >
                    <PlayDisc disc={disc}></PlayDisc>
                  </PlayBox>
                );
              })}
            </PlayBoxBar>
          );
        })}
      </InnerBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  background: brown;
  width: 850px;
  height: 850px;
  margin: auto;
  display: flex;
`;
const InnerBox = styled.div`
  background: green;
  width: 800px;
  height: 800px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const PlayBoxBar = styled.div`
  width: 800px;
  height: 100px;
  margin: auto;
  display: flex;
`;
const PlayBox = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
`;

const PlayDisc = styled.div`
  background: ${(props) =>
    props.disc === 0 ? "none" : props.disc === 1 ? "black" : "white"};
  cursor: ${(props) => (props.disc === 0 ? "pointer" : "")};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
`;

export default App;
