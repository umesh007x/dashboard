import React from "react";
import manual from "../assets/img/manual_lg.png";
import warranty from "../assets/img/warranty.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services__cards">
        <div className=" services__cards--card services__cards--card1 ">
          <h3 className="analytics__tiles--title">Calibrated</h3>

          <div className="calibrated">
            <div className="calibrated--1"></div>
            <p className="calibrated__text">36</p>
          </div>
          <div className="calibrated">
            <div className="calibrated--2"></div>
            <p className="calibrated__text">16</p>
          </div>
          <div className="calibrated">
            <div className="calibrated--3"></div>
            <p className="calibrated__text">8</p>
          </div>
        </div>
        <div className=" services__cards--card services__cards--card2 ">
          <h3 className="analytics__tiles--title">Calibrated</h3>
          <div className="manual">
            <img alt="" src={manual} />
          </div>
          <button className="manual__btn">User Manual</button>
          <button className="manual__btn">Service Manual</button>
        </div>
        <div className=" services__cards--card services__cards--card3 ">
          <h3 className="analytics__tiles--title">Warranty</h3>
          <div className="warranty">
            <img alt="" src={warranty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
