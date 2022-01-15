import React, { useState, useEffect } from "react";
// STYLE
import styled from "styled-components";
function App() {
  const [playBoxs, setPlayBoxs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [turn, setTurn] = useState("W");

  const ClickDisc = (disc, mainIdx, innerIdx) => {
    if (turn === "W") {
      setPlayBoxs(
        playBoxs.map((items, idx) => {
          return idx === mainIdx
            ? items.map((item, idx) => {
                return idx === innerIdx ? 2 : item;
              })
            : items;
        })
      );
      setTurn("B");
    } else if (turn === "B") {
      setPlayBoxs(
        playBoxs.map((items, idx) => {
          return idx === mainIdx
            ? items.map((item, idx) => {
                return idx === innerIdx ? 1 : item;
              })
            : items;
        })
      );
      setTurn("W");
    }
  };

  return (
    <MainBox>
      <InnerBox>
        {playBoxs.map((playBox, mainIdx) => {
          return (
            <PlayBoxBar key={mainIdx}>
              {playBox.map((disc, innerIdx) => {
                return (
                  <PlayBox
                    key={innerIdx}
                    onClick={() => {
                      ClickDisc(disc, mainIdx, innerIdx);
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
