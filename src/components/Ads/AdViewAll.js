import React from "react";

function AdViewAll(props) {
  function deleteAd() {
    var axios = require("axios");
    var data = JSON.stringify({
      id: props.id,
    });

    var config = {
      method: "post",
      url: "http://localhost/ads/delete_ad",
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
    alert("Ad deleted");
    window.location.reload(false);
  }

  function updateAd() {
    var axios = require("axios");
    var data = JSON.stringify({
      id: props.id,
      showed: props.showed,
    });

    var config = {
      method: "post",
      url: "http://localhost/ads/modify_ad",
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
    window.location.reload(false);
  }
  return (
    <div>
      <div className="NameAd">
        <h2>{props.name}</h2>{" "}
      </div>
      <div className="ImgAd">
        <img src={props.imgURL} alt="" className="ImgElmt" />
      </div>
      <div className="ButtonsAd">
        {(!props.showed && (
          <button className="Show" onClick={updateAd}>
            Show it
          </button>
        )) ||
          (props.showed && (
            <button className="Unshow" onClick={updateAd}>
              Unshow it
            </button>
          ))}{" "}
        {!props.showedPage && (
          <button className="AdButton" onClick={deleteAd}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default AdViewAll;
