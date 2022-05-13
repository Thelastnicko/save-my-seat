import React from "react";
import "./Confirmation.scss";

const Confirmation = () => {
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
            <p>Name:</p>
            <p>Date:</p>
            <p>Time</p>
            <p>Table:</p>
            <button className="confirmation-container__details__button">
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
