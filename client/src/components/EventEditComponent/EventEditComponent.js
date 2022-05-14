import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DatePicker, TimePicker, InputNumber } from "antd";
import "./EventEditComponent.scss";
import moment from "moment";
import axios from "axios";

const EventEditComponent = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let [date, setDate] = useState(moment(new Date(), "YYYY-MM-DD"));
  let [guests, setGuests] = useState(0);
  let [time, setTime] = useState("8:00 pm");
  let [table, setTable] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:8080/reservations/" + id)
      .then((res) => {
        setDate(moment(res.data.date, "YYYY-MM-DD"));
        setTime(res.data.time);
        setTable(res.data.table);
        setGuests(res.data.guests);
      })
      .catch(() => {});
  }, []);

  const onChangeDatePicker = (date, dateString) => {
    setDate(date);
  };
  const onChangeGuests = (guests) => {
    setGuests(guests);
  };
  const onChangeTimePicker = (timeIn, timeString) => {
    setTime(timeIn.format("hh:mm a"));
  };
  const onChangeTable = (table) => {
    setTable(table);
  };
  const onClickUpdate = () => {
    if (window.confirm("Are you sure you want to update this reservation?")) {
      let payload = {
        id,
        date: date.format("YYYY-MM-DD"),
        time,
        table,
        guests,
      };
      axios
        .put("http://localhost:8080/reservations/" + id, payload)
        .then(() => {
          alert("this reservation has been updated!");
          navigate("/events");
        })
        .catch((err) => {
          alert("An error has occured, please verify your reservation!");
        });
    }
  };
  return (
    <div className="event-edit-container">
      <div className="event-form-container">
        <DatePicker
          value={moment(date, "YYYY-MM-DD")}
          onChange={onChangeDatePicker}
        />
        <TimePicker
          value={moment(time, "hh:mm a")}
          onChange={onChangeTimePicker}
          format="hh:mm a"
          use12Hours
        />
        <InputNumber min={1} max={16} value={table} onChange={onChangeTable} />
        <InputNumber min={1} max={6} value={guests} onChange={onChangeGuests} />
      </div>
      <button className="btn-update" onClick={onClickUpdate}>
        Update
      </button>
    </div>
  );
};

export default EventEditComponent;
