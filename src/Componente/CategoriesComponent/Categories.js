import { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { categoryapiurl } from "../../userapiurl";
import {Link} from "react-router-dom"
// import Card from "../Card_Component/Card";

function Categories() {
  const [cList, setCatList] = useState([]);

  useEffect(() => {
    axios
      .get(categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-12">
            <h1 class="display-5 text-uppercase mb-4">
              Viwe <span class="text-primary">Categories &gt;&gt;</span>{" "}
            </h1>
            <center>
            <div id ="categorymain">
              {
                cList.map((row)=>(

                  <Link to={`/subcategories/${row.catnm}`}>
              <div class="categorypart">
                <img src ={`./assets/upload/caticon/${row.caticonnm}`} height="100" width="150"/>
                <br/>
                <b>{row.catnm}</b>
              </div>
              </Link>
              ))
              }
            </div>
            </center>
          </div>
        </div>
      </div>
      {/* {<!-- About End -->} */}
    </>
  );
}
export default Categories;
