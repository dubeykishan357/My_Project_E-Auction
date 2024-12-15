import { useEffect, useState } from "react";
import "./SubCategories.css";
import axios from "axios";
import { subcategoryapiurl } from "../../userapiurl";
import { Link, useParams } from "react-router-dom";

function SubCategories() {

  const params = useParams();
  const [scList, setSubCatList] = useState([]);

  useEffect(() => {
    var condition_obj = { "catnm": params.catnm };
    axios.get(subcategoryapiurl + "fetch", { params: { condition_obj: condition_obj } }).then((response) => {
      // console.log(response.data);
      setSubCatList(response.data);

    }).catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <>
      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-12">
            <h1 class="display-5 text-uppercase mb-4">
              View <span class="text-primary">SubCategories &gt;&gt; {params.catnm}</span>{" "}
            </h1>
            <center>
              <div id="categorymain">
                {
                  scList.map((row) => (
                    < Link to={`/productList/${row.subcatnm}`}>
                      <div class="categorypart">
                        <img src={`../assets/upload/subcaticon/${row.subcaticonnm}`} height="100" width="150" />
                        <br />
                        <b>{row.subcatnm}</b>
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
export default SubCategories;
