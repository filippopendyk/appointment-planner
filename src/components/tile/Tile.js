import React from "react";

export const Tile = ({item}) => {
  const itemAsArray = Object.values(item);
  
  return (
    <div className="tile-container">
      {itemAsArray.map((item,index) => {
        if(index === 0){
          return <p key={index} className="tile-title">{item}</p>
        }
        return <p key={index} className="tile">{item}</p>
      })}
    </div>
  );
};
