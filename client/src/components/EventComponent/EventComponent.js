import React, { useEffect, useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import { useNavigate } from "react-router-dom";
import "./EventComponent.scss";
import axios from "axios";

const EventComponent = () => {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  useEffect(() => {
    let logged = localStorage.getItem("logged");
    if (logged !== "true") {
      navigate("/login");
    }
    axios
      .get("http://localhost:8080/reservations")
      .then((res) => {
        let resData = res.data.map((v, idx) => {
          v.key = `${idx + 1}`;
          return v;
        });
        setData(resData);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  const recordDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      axios
        .delete("http://localhost:8080/reservations/" + id)
        .then(() => {
          alert("this reservation has been deleted!");
          window.location.reload();
        })
        .catch(() => {});
    }
  };
  return (
    <div className="event-component-contaniner">
      <TableComponent delete={recordDelete} data={data} />
    </div>
  );
};

export default EventComponent;
