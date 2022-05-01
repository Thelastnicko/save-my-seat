import React, { useState } from "react";
import "./MainComponent.scss";
import { DatePicker, TimePicker, InputNumber, Button } from "antd";
import moment from "moment";

const MainComponent = (props) => {
  let [date, setDate] = useState(moment(new Date(), "YYYY-MM-DD"));
  let [time, setTime] = useState("11:00 am");
  let [guests, setGuests] = useState(2);

  const onChangeDatePicker = (date, dateString) => {
    setDate(dateString);
  };
  const onChangeTimePicker = (time, timeString) => {
    setTime(time, timeString);
  };
  const onChangeGuests = (guests) => {
    setGuests(guests);
  };
  const onClickFindTable = () => {
    props.history.push("/tables");
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
            defaultValue={moment(time, "HH:mm a")}
            onChange={onChangeTimePicker}
            format="HH:mm a"
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