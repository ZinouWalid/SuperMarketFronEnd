import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ModifyProductpage() {
  let Productid = useParams();
  console.log(Productid);
  const [Product, setProduct] = useState({});
  console.log(Product);
  const [id, setid] = useState();
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [Promontion, setPromontion] = useState();

  const [rating, setrating] = useState();
  const [category, setcategory] = useState();
  const [img, setimg] = useState();
  const [tags, settags] = useState();

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
        setid(response.data.product.id);
        setname(response.data.product.name);
        setprice(response.data.product.price);
        setPromontion(response.data.product.promotion);
        setrating(response.data.product.rating);
        setcategory(response.data.product.category);
        setimg(response.data.product.img);
        settags(response.data.product.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function UpdateProduct() {
    var axios = require("axios");
    var data = JSON.stringify({
      id: id,
      name: name,
      price: price,
      promotion: Promontion,
      rating: rating,
      category: category,
      img: img,
      tags: tags,
    });

    var config = {
      method: "post",
      url: "http://localhost/product/modify_product",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Product Updated");
        window.history.back();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="page">
        <div className="background"></div>{" "}
        <div className="PrincipalDivSignIn">
          <h3>Modify Product Informations</h3>

          <div className="input-container1">
            <h5 className="icon">name</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Product Name"
              name="usrnm"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">Price</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Price"
              name="usrnm"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">Promotion</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Promotion"
              name="usrnm"
              value={Promontion}
              onChange={(e) => {
                setPromontion(e.target.value);
              }}
            />
          </div>

          <div className="input-container1">
            <h5 className="icon">rating</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Rating"
              name="usrnm"
              value={rating}
              onChange={(e) => {
                setrating(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">category</h5>
            <select
              className="select"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            >
              <option value="epicerie-bonbons-chocolat">
                epicerie-bonbons-chocolat
              </option>
              <option value="epicerie-vaisselle">epicerie-vaisselle</option>
              <option value="epicerie-alimentaire">epicerie-alimentaire</option>
              <option value="boissons">boissons</option>
              <option value="miels-confitures-pates-a-tartiner">
                miels-confitures-pates-a-tartiner
              </option>
              <option value="cosmetique">cosmetique</option>
              <option value="nettoyage">nettoyage</option>
            </select>
          </div>
          <div className="input-container1">
            <h5 className="icon">Image URL</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Image URL"
              name="usrnm"
              value={img}
              onChange={(e) => {
                setimg(e.target.value);
              }}
            />
          </div>
          <div className="input-container1">
            <h5 className="icon">tags</h5>

            <input
              className="input-field"
              type="text"
              placeholder="Tags ( Separate them with a comma (,) )"
              name="usrnm"
              value={tags}
              onChange={(e) => {
                settags(e.target.value);
              }}
            />
          </div>

          <button type="" className="SignUpButton" onClick={UpdateProduct}>
            UPDATE{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyProductpage;
