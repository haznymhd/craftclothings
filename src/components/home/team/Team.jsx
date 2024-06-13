import React from "react";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:hazny.mhd@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+94717777668";
  };

  return (
    <>
      <section className="team background">
        <div>
          <h2 className="container01">Craft Clothings</h2>
          <p className="container001">
          Crafted with Precision and Passion with CraftClothing
          </p>
        </div>
        <div className="container">
          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button onClick={handleEmailClick}>
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="btn4" onClick={handlePhoneClick}>
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
