import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainComponent.scss";
import { DatePicker, TimePicker, InputNumber, Button } from "antd";
import moment from "moment";

const MainComponent = (props) => {
  let navigate = useNavigate();
  let [date, setDate] = useState(moment(new Date(), "YYYY-MM-DD"));
  let [time, setTime] = useState("8:00 pm");
  let [guests, setGuests] = useState(2);
  const onChangeDatePicker = (date, dateString) => {
    setDate(dateString);
  };
  const onChangeTimePicker = (timeIn, timeString) => {
    setTime(timeIn.format("hh:mm a"));
  };
  const onChangeGuests = (guests) => {
    setGuests(guests);
  };

  const onClickFindTable = () => {
    navigate(
      `/tables?date=${date.format("YYYY-MM-DD")}&time=${time}&guests=${guests}`
    );
  };
  return (
    <section className="main-container">
      <h1 className="main-container__title">Welcome</h1>
      <p className="main-container__description">
        Please note that due to limited seating, reservations for groups of two
        or less may be sat at our bar. We keep a limited number of tables
        available for walk-ins. Please email us for last minute reservations and
        special requests and we’ll do our best to accommodate.
      </p>
      <div className="form-container">
        <h3 className="form-container__title">Reservation information</h3>
        <div className="form-container__pickers">
          <DatePicker
            defaultValue={moment(date, "YYYY-MM-DD")}
            onChange={onChangeDatePicker}
          />
          <TimePicker
            defaultValue={moment(time, "hh:mm a")}
            onChange={onChangeTimePicker}
            format="hh:mm a"
            use12Hours
          />
          <InputNumber
            min={1}
            max={6}
            value={guests}
            onChange={onChangeGuests}
          />
        </div>
        <Button className="btn" onClick={onClickFindTable}>
          Find table
        </Button>
      </div>
    </section>
  );
};

export default MainComponent;
