import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./TablesInfo.scss";

const TablesInfo = () => {
  let location = useLocation();
  let [tableSelected, setTableSelected] = useState(null);

  const setTable = (table) => {
    setTableSelected(table);
  };
  const confirm = () => {
    let payLoad = queryString.parse(location.search);
    payLoad.table = tableSelected;
    console.log(payLoad);
  };
  return (
    <section className="tables-container">
      <div className="tables">
        <div className="tables__wrapper">
          <div className="tables__seat">
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table" onClick={() => setTable(1)}></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table" onClick={() => setTable(2)}></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <div className="wall"></div>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table" onClick={() => setTable(3)}></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
          </div>
          <div className="tables-vertical">
            <div className="tables__window"></div>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div className="tables__table"></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            {/* Bar seats start here */}
            <div className="tables-vertical__bar">
              <div className="tables-vertical__seats">
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
                <span className="tables-vertical__seat"></span>
              </div>
              <div className="tables-vertical__bar-counter"></div>
            </div>
          </div>
          <div className="confirmation-buttons">
            <button className="confirmation-buttons__back">Back</button>
            <button className="confirmation-buttons__confirm" onClick={confirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablesInfo;
