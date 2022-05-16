import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./Confirmation.scss";

const Confirmation = () => {
  let location = useLocation();
  let queryParams = queryString.parse(location.search);
  return (
    <section className="confirmation-container">
      <h1>Thank you!</h1>
      <div className="confirmation-container__wrapper">
        <p className="confirmation-container__wrapper__description">
          Your reservation at The Ace has been booked. Please arrive on time,
          your reservation with be held for 15 minutes
        </p>
        <div className="confirmation-container__details">
          <div className="confirmation-container__details__client">
            <div className="confirmation-container__details__titles">
              <p>Name:</p>
              <p>Date:</p>
              <p>Time:</p>
              <p>Table:</p>
            </div>
            <div className="confirmation-container__details__data">
              <p>{queryParams.name}</p>
              <p>{queryParams.date}</p>
              <p>{queryParams.time}</p>
              <p>{queryParams.table}</p>
            </div>
          </div>
          <Link to="/">
            <button className="confirmation-container__details__button">
              Done
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
