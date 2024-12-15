import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import { productapiurl } from "../../userapiurl";
import { Link, useParams } from "react-router-dom";

function ProductList() {

  const params = useParams();
  const [pList, setPList] = useState([]);

  const handlebidproduct = () => {

  }


  useEffect(() => {
    var condition_obj = { "subcatnm": params.subcatnm };
    axios.get(productapiurl + "fetch", { params: { condition_obj: condition_obj } }).then((response) => {
      // console.log(response.data.productDetails);
      // const fetchProductDetails = response.data;

      // var p = fetchProductDetails.map(product => {

      //   const initialtime = new Date(product.info);
      //   const timedifference = (new Date() - initialtime) / (1000 * 60);

      //   return {
      //     ...product,
      //     timedifference: timedifference

      //   }
      // });
      setPList(response.data.productDetails);


    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <>
      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-12">



            <h1 class="display-5 text-uppercase mb-4">
              View <span class="text-primary">ProductList &gt;&gt; {params.subcatnm}</span>{" "}
            </h1>
            {
              pList.map((row) => (
                <center>
                  <table id="ptable" border="1"><tr>
                    <td rowspan="3">
                      <center>
                        <img src={`../assets/upload/product/${row.piconnm}`} height="100" width="150" />
                      </center>
                    </td>
                    <td><b>Title : {row.title} </b></td>
                  </tr>
                    <tr>
                      <td><b>Description : {row.description}</b></td>
                    </tr>
                    <tr>
                      <td>
                        <b>Base price : {row.baseprice}</b>
                        <br />
                      </td>
                    </tr>

                    <center>
                         {row.timedifference > 24 ? <button>Bid Closed</button> : <Link to={`/product/${row._id}`} ><button  type="button" class="btn btn-success rounded-3">Bid Running</button></Link>} 
                      {/* <Link to={`/product/${row._id}`} type="button" class="btn btn-success rounded-3">Bid Running</Link>  */}
                    </center>
                    {/* <Link to="" type="button" class="btn btn-success rounded-3" onClick={handlebidproduct} >Bid Product</Link> */}




                  </table>
                </center>
              ))
            }



          </div>
        </div>
      </div>
      {/* {<!-- About End -->} */}
    </>
  );
}
export default ProductList;
