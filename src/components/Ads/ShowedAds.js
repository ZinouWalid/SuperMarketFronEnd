import React from "react";
import { useEffect, useState } from "react";
import AdViewAll from "./AdViewAll";

function ShowedAds() {
  const [Ads, setAds] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost/ads//get_showed_ads",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.ads));
        setAds(response.data.ads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {Ads.map((ad) => (
        <div className="AdsDiv">
          <AdViewAll
            showedPage="true"
            id={ad._id}
            name={ad.name}
            showed={ad.showed}
            imgURL={ad.img}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowedAds;
