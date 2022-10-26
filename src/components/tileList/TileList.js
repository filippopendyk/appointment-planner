import React from "react";
import { Tile } from "../tile/Tile";

const TileList = (props) => {
  const array = props.arrayToRender;
  return (
    <ul>
      {array.map((item,index) => {
        return <Tile key={index} item={item}/>
      })}
    </ul>
  );
};

export default TileList;