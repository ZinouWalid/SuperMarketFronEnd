import React from "react";
import { useEffect, useState } from "react";

function AddAds() {
  const [ImgURL, setImgURL] = useState("");
  const [Name, setName] = useState("");
  const [AdLink, setAdLink] = useState("");

  function Add() {
    var axios = require("axios");
    var data = JSON.stringify({
      name: Name,
      img: ImgURL,
      AdLink: AdLink,
    });

    var config = {
      method: "post",
      url: "http://localhost/ads/add_ads",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Ads added");
    window.location.reload(false);
  }
  return (
    <div>
      {" "}
      <div className="page">
        <div className="background"></div>{" "}
        <div className="PrincipalDivSignIn">
          <h3>Add Ad </h3>

          <div className="input-container1">
            <h5 className="icon">Ad name </h5>

            <input
              className="input-field"
              type="text"
              value={Name}
              placeholder="Put here the name of the ad"
              name="usrnm"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">image URL </h5>

            <input
              className="input-field"
              type="text"
              value={ImgURL}
              placeholder="Put here the URL for the ad's image "
              name="usrnm"
              onChange={(e) => {
                setImgURL(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">Ad link </h5>

            <input
              className="input-field"
              type="text"
              value={AdLink}
              placeholder="Put here the link you want to be sent to when they click on the ad"
              name="usrnm"
              onChange={(e) => {
                setAdLink(e.target.value);
              }}
            />
          </div>

          <button type="" className="SignUpButton" onClick={Add}>
            ADD{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAds;
