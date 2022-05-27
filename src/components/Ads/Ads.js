import React from "react";
import { Link } from "react-router-dom";

function Ads() {
  return (
    <div>
      <Link className="LikeButton" to="/Ads/allAds">
        All Ads
      </Link>
      <Link className="LikeButton" to="/Ads/showedAds">
        Showed Ads
      </Link>
      <Link className="LikeButton" to="/Ads/addAds">
        Add Ads
      </Link>
    </div>
  );
}

export default Ads;
