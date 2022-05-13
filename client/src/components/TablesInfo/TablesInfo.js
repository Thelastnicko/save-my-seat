import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./TablesInfo.scss";
import axios from "axios";

const TablesInfo = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let [tableSelected, setTableSelected] = useState(null);

  let [openTables, setOpenTables] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
  });
  useEffect(() => {
    let queryParams = queryString.parse(location.search);
    axios
      .get(
        `http://localhost:8080/reservations/tables/${queryParams.date}/${queryParams.time}`
      )
      .then((res) => {
        let ot = { ...openTables };
        for (const v of res.data) {
          ot[v.table] = false;
        }
        console.log(ot);
        setOpenTables(ot);
      })
      .catch((err) => {});
  }, []);
  const setTable = (table) => {
    if (openTables[table]) {
      setTableSelected(table);
    }
  };
  const confirm = () => {
    if (tableSelected === null) {
      alert("Please select a table");
      return;
    }
    let payLoad = queryString.parse(location.search);
    payLoad.table = tableSelected;
    axios
      .post("http://localhost:8080/reservations", payLoad)
      .then((res) => {
        navigate(
          `/confirmation?date=${payLoad.date}&time=${payLoad.time}&guests=${payLoad.guests}`
        );
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const goBack = () => {
    navigate(`/`);
  };
  return (
    <section className="tables-container">
      <div className="tables">
        <div className="tables__wrapper">
          <div className="tables__seat">
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[1] ? "green" : "red",
              }}
              onClick={() => setTable(1)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[2] ? "green" : "red",
              }}
              onClick={() => setTable(2)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <div className="wall"></div>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[3] ? "green" : "red",
              }}
              onClick={() => setTable(3)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[4] ? "green" : "red",
              }}
              onClick={() => setTable(4)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[5] ? "green" : "red",
              }}
              onClick={() => setTable(5)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[6] ? "green" : "red",
              }}
              onClick={() => setTable(6)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[7] ? "green" : "red",
              }}
              onClick={() => setTable(7)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
          </div>
          <div className="tables-vertical">
            <div className="tables__window"></div>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[8] ? "green" : "red",
              }}
              onClick={() => setTable(8)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            <span className="seat-1-left"></span>
            <span className="seat-2-left"></span>
            <div
              className="tables__table"
              style={{
                background: openTables[9] ? "green" : "red",
              }}
              onClick={() => setTable(9)}
            ></div>
            <span className="seat-2-left"></span>
            <span className="seat-1-right"></span>
            {/* Bar seats start here */}
            <div className="tables-vertical__bar">
              <div className="tables-vertical__seats">
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[10] ? "green" : "red",
                  }}
                  onClick={() => setTable(10)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[11] ? "green" : "red",
                  }}
                  onClick={() => setTable(11)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[12] ? "green" : "red",
                  }}
                  onClick={() => setTable(12)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[13] ? "green" : "red",
                  }}
                  onClick={() => setTable(13)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[14] ? "green" : "red",
                  }}
                  onClick={() => setTable(14)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[15] ? "green" : "red",
                  }}
                  onClick={() => setTable(15)}
                ></span>
                <span
                  className="tables-vertical__seat"
                  style={{
                    background: openTables[16] ? "green" : "red",
                  }}
                  onClick={() => setTable(16)}
                ></span>
              </div>
              <div className="tables-vertical__bar-counter"></div>
            </div>
          </div>
          <div className="confirmation-buttons">
            <button className="confirmation-buttons__back" onClick={goBack}>
              Back
            </button>
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
