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
        <p>
          Tu reserva se ha registrado satisfactoriamente. Te recomendamos llegar
          a timepo ya que tienes 15 min de espera para tomar tu reserva.
        </p>
        <div className="confirmation-container__details">
          <div className="confirmation-container__details__client">
            <p>Name:{queryParams.name}</p>
            <p>Date:{queryParams.date}</p>
            <p>Time:{queryParams.time}</p>
            <p>Table:{queryParams.table}</p>
            <Link to="/">
              <button className="confirmation-container__details__button">
                Done
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
