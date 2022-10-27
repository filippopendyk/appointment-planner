import React from "react";

export const Tile = ({item}) => {
  const itemAsArray = Object.values(item);
  
  return (
    <div className="tile-container">
      {itemAsArray.map((item,index) => {
        if(index === 0){
          return <p className="tile-title">{item}</p>
        }
        return <p className="tile">{item}</p>
      })}
    </div>
  );
};
