import React from "react";
import "./Welcome.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <nav className="nav">
        <MusicNoteIcon className="gif" />
        <h1 className="WebsiteName">Super Market</h1>
      </nav>

      <div className="PrincipalDiv">
        <Link className="LikeButton" to="/ProductPage">
          Product
        </Link>
        <Link className="LikeButton" to="/DeliveryMan">
          Delivery Man
        </Link>
        <Link className="LikeButton" to="/Ads">
          Ads
        </Link>
        <Link className="LikeButton" to="/livraison">
          Prix Livraison
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
