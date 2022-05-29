import React from "react";
import "./ads.css";
import Header from '../Welcome/Header'

import { useEffect, useState } from "react";
import AdViewAll from "./AdViewAll";

function AllAds() {
  const [Ads, setAds] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost:3001/ads//get_all_ads",
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
      <Header />
      <h1 className='text-5xl font-semibold mt-4 ml-4'>Publicités : </h1>
      {Ads.map((ad) => (
        <div className='mx-4'>
          <AdViewAll
            id={ad._id}
            name={ad.name}
            showed={ad.showed}
            imgURL={ad.img}
          />
        </div>
      ))}
    </div>
  )
}

export default AllAds;
