import React from "react";
import "./ProductPage.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Products/Product";
import ReactPaginate from "react-paginate";
function ProductPage() {
  const [SearchBoolean, setSearchBoolean] = useState(false);

  const [Search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 26;

  useEffect(() => {
    const getComments = async () => {
      var axios = require("axios");
      var data = "";

      var config = {
        method: "post",
        url: "http://localhost/product/get_pages",
        headers: {},
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log("data :" + JSON.stringify(response.data));
          const total = response.data.product;
          setpageCount(Math.ceil(total / limit));
        })
        .catch(function (error) {
          console.log(error);
        });

      // console.log(Math.ceil(total/12));
    };

    getComments();
  }, []);

  useEffect(() => {
    const getComments = async () => {
      var axios = require("axios");
      var data = {
        category: "All",
        limit: limit,
      };

      var config = {
        method: "post",
        url: `http://localhost/product/get_product_with_category`,
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response);

          setItems(response.data.product);
        })
        .catch(function (error) {
          console.log(error);
        });
      // console.log(Math.ceil(total/12));
    };

    getComments();
  }, []);

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    var axios = require("axios");
    var data = {
      SearchBoolean: SearchBoolean,
      tags: Search.trim().toLowerCase(),
      limit: limit,
      currentPage: currentPage,
    };
    var config = {
      method: "post",
      url: `http://localhost/product/get_pages_productes_superMarket`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response);
        setItems(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function SearchButton(data) {
    let currentPage = data.selected + 1;

    var axios = require("axios");
    var data = JSON.stringify({
      tags: Search.trim().toLowerCase(),
      limit: limit,
      currentPage: currentPage,
    });

    var config = {
      method: "post",
      url: "http://localhost/product/search_product",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setItems(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });

    var data1 = JSON.stringify({
      tags: Search.trim().toLowerCase(),
    });

    var config = {
      method: "post",
      url: "http://localhost/product/search_product_forpages",
      headers: {
        "Content-Type": "application/json",
      },
      data: data1,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const total = response.data.product.length;
        setpageCount(Math.ceil(total / limit));
      })
      .catch(function (error) {
        console.log(error);
      });

    setSearchBoolean(true);
  }

  return (
    <div>
      <div className="navbar">
        <div className="navleft">
          <img
            className="gife"
            src="./images/output-onlinegiftools.gif"
            alt=""
          />
          <h1 className="Websitename">SUPER - MARKET</h1>
        </div>

        <div className="searchDiv">
          <input
            type="text"
            name=""
            value={Search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search Product"
            className="searchInput"
          />
          <button type="" className="searchButton" onClick={SearchButton}>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="Product_ADD">
        <h1>products : </h1>
        <a href="/AddproductPage" className="addProduct">
          Add Product
        </a>
      </div>
      <div className="ProductDisplay">
        <div className="prdct">
          <Grid container justify="center" spacing={4}>
            {items.map((product) => (
              <Grid className="productgrid" item xs={12} sm={6} md={4} lg={3}>
                <Product
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  id={product._id}
                  promotion={product.promotion}
                />
              </Grid>
            ))}
          </Grid>
          <div className="paginationDiv">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
