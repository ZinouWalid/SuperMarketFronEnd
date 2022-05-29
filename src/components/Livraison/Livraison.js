import React from "react";
import "./Livraison.css";
import { useEffect, useState } from "react";
import Header from '../Welcome/Header'

function Livraison() {
  const [Wilaya, setWilaya] = useState("");
  const [Commune, setCommune] = useState({});
  const [Wilayas, setWilayas] = useState([]);
  const [Price, setPrice] = useState();
  const [Communes, setCommunes] = useState([]);

  const [WilayaM, setWilayaM] = useState("");
  const [CommuneM, setCommuneM] = useState({});
  const [WilayasM, setWilayasM] = useState([]);
  const [PriceM, setPriceM] = useState();
  const [CommunesM, setCommunesM] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: "http://localhost/wilaya/get_all_wilayas",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setWilayas(response.data.wilayas);
        setWilayasM(response.data.wilayas);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var axios = require("axios");
    var data = JSON.stringify({
      wilaya: Wilaya,
    });

    var config = {
      method: "post",
      url: "http://localhost/wilaya/get_communes_by_wilayas",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommunes(response.data.wilayas[0].cities);
        console.log(response.data.wilayas[0].cities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Wilaya]);
  useEffect(() => {
    var axios = require("axios");
    var data = JSON.stringify({
      wilaya: WilayaM,
    });

    var config = {
      method: "post",
      url: "http://localhost/wilaya/get_communes_by_wilayas",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommunesM(response.data.wilayas[0].cities);
        console.log(response.data.wilayas[0].cities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [WilayaM]);

  return (
    <div className="principalDivLivraison">
      <div className="leftLivraison">
        <h3>See Prices </h3>
        <div className="input-container1">
          <h5 className="icon">Wilaya</h5>
          <select
            className="input-field"
            onChange={(e) => {
              setWilaya(e.target.value);
            }}
            value={Wilaya}
          >
            {Wilayas.map((fbb) => (
              <option value={fbb.name}>{fbb.name}</option>
            ))}
          </select>
        </div>

        <div className="input-container1">
          <h5 className="icon">Commune</h5>
          <select
            className="input-field"
            onChange={(e) => {
              setCommune(JSON.parse(e.target.value));
              setPrice(JSON.parse(e.target.value).price);
            }}
            value={JSON.stringify(Commune)}
          >
            {Communes.map((commune) => (
              <option value={JSON.stringify(commune)}>{commune.name}</option>
            ))}
          </select>
        </div>

        <div>
          <h2>Prix : {Price} DA</h2>
        </div>
      </div>
      <div className="rightLivraison">
        <h3>Modify Prices </h3>
        <div className="input-container1">
          <h5 className="icon">Wilaya</h5>
          <select
            className="input-field"
            onChange={(e) => {
              setWilayaM(e.target.value);
            }}
            value={WilayaM}
          >
            {WilayasM.map((fbbM) => (
              <option value={fbbM.name}>{fbbM.name}</option>
            ))}
          </select>
        </div>

        <div className="input-container1">
          <h5 className="icon">Commune</h5>
          <select
            className="input-field"
            onChange={(e) => {
              setCommuneM(JSON.parse(e.target.value));
            }}
            value={JSON.stringify(CommuneM)}
          >
            {CommunesM.map((communeM) => (
              <option value={JSON.stringify(communeM)}>{communeM.name}</option>
            ))}
          </select>
        </div>

        <div className="input-container1">
          <h5 className="icon">Prix</h5>

          <input
            className="input-field"
            type="Number"
            placeholder="put the new price here"
            name="usrnm"
            value={PriceM}
            onChange={(e) => {
              setPriceM(e.target.value);
            }}
          />
        </div>

        <button type="" className="SignUpButton">
          Modify{" "}
        </button>
      </div>
    </div>
  );
}

export default Livraison;
