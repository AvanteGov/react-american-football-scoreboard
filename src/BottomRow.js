import React, { useState } from "react";
import "./App.css";



const BottomRow = () => {

  const [gameDown, setGameDown] = useState(0);
  const [gameQuarter, setGameQuarter] = useState(0);

  return (

    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{gameDown}</div>
        <button className="controlButtons__downAdvance" onClick={ () => {
          if (gameDown < 4) {
            setGameDown(gameDown + 1)
          } else {
            setGameDown(0)
          }
        }}>Advance Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{gameQuarter}</div>
        <button className="controlButtons__quarterAdvance" onClick={ () => {
          if (gameQuarter < 4) {
            setGameQuarter(gameQuarter + 1)
          } else {
            setGameQuarter(0)
          }
        }}>Advance Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
