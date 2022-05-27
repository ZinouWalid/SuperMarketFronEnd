import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const [Prom, setProm] = useState(false);

  useEffect(() => {
    if (props.Prom == "0%") {
      setProm(false);
    } else {
      setProm(true);
    }
  }, []);

  function DeleteClick() {
    var axios = require("axios");
    var data = JSON.stringify({
      id: props.id,
    });

    var config = {
      method: "post",
      url: "http://localhost/product/delete_product",
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
    <div className="productView">
      <div className="imageName">
        <img className="imageproduct" src={props.img} alt="" />
        <p>{props.name}</p>
        {(!Prom && <h5>{props.price}</h5>) ||
          (Prom && (
            <div>
              <p>{props.price}</p>
              <h5>{props.Prom}</h5>
              <h5>{props.price}</h5>
            </div>
          ))}
      </div>

      <div className="flexButtons">
        <Link to={"/ModifyProduct/" + props.id} className="addtobasket">
          Modify
        </Link>

        <a className="addtobasket" onClick={DeleteClick}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default Product;
