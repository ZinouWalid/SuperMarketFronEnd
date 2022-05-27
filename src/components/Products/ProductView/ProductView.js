import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./ProductView.css";
import { addToCart } from "../../../store/actions/actions";
import { connect } from "react-redux";

function ProductView(props) {
  let Productid = useParams();
  const [Product, setProduct] = useState({});
  useEffect(() => {
    var axios = require("axios");
    var data = {
      id: Productid.id,
    };

    var config = {
      method: "post",
      url: "http://localhost/product/get_product_view",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.product));
        setProduct(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [QTE, setQTE] = useState(1);

  function HandleChangeQte(event) {
    const value = event.target.value;

    if (value < 1) return;

    setQTE(value);
  }

  function addToCart(product) {
    props.addToCart(product, QTE);
  }

  return (
    <div className="page">
      <div className="background"></div>
      <div className="principalDivProduct">
        <img src={Product.img} alt="" />
        <div className="leftDivProduct">
          <h3>{Product.name}</h3>
          <Rating name="read-only" value={3.3} readOnly />
          <br />

          <h5>{Product.price}</h5>
          <br />

          <input
            type="number"
            name=""
            value={QTE}
            className="qteinput"
            onChange={HandleChangeQte}
          />
          <br />
          <br />
          <div className="totalAdd">
            <h5>Total : {parseInt(Product.price) * QTE} DA</h5>
            <button className="addtobasket" onClick={() => addToCart(Product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productsInfo, quantity) =>
      dispatch(addToCart(productsInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(ProductView);
