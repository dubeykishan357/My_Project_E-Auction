import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { bidapiurl, productapiurl } from "../../userapiurl";
import { useEffect, useState } from "react";

function Product() {
  const params = useParams();

  const [pList, setProductList] = useState([]);
  const [auctionCurrentp, setAuctionCurrentp] = useState();
  const [auctionCurrentp1, setAuctionCurrentp1] = useState();

  const handlebidproduct = () => {
    setAuctionCurrentp1(auctionCurrentp);

    pList.map((row) => {
      var bidDetails = {
        p_id: row._id,
        user_id: localStorage.getItem("email"),
        bidprice: auctionCurrentp,
      };
      axios
        .post(bidapiurl + "save", bidDetails)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    var condition_obj = { _id: params._id };
    // console.log(params.subcatnm);

    axios
      .get(productapiurl + "fetch", {
        params: { condition_obj: condition_obj },
      })
      .then((response) => {
        // console.log(response.data.productDetails);
        setProductList(response.data.productDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params._id]);

  return (
    <>
      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-12">
            <div class="text-center ">
              <h1 class="display-5 text-center text-uppercase mb-4 d-flex">
                Bid{" "}
                <span class="text-primary">
                  Product Here!!! {params.subcatnm}
                </span>{" "}
              </h1>
            </div>

            <br />
            <br />
            <br />
            <form class="d-flex justify-content-center align-items-center border border-dark col-lg-5 ">
              {/* <table class="form-control border-dark " > */}

              <div id="categorymain1">
                {pList.map((row) => (
                  <div class="categorypart1 text-center ">
                    <img
                      src={`../assets/upload/product/${row.piconnm}`}
                      height="100"
                      width="150"
                      alt={`Product ${row.title}`} 
                    />
                    <br />
                    <h4>Title :{row.title}</h4>
                    <br />
                    <h4>Description :{row.description}</h4>
                    <br />
                    <h4>Baseprice :{row.baseprice}</h4>
                    <br />
                    <label class="form-label" for="Name">
                      {/* {" "} */}
                      <h4>Auction Current price : &#8377;{auctionCurrentp1}</h4>
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      onChange={(e) => setAuctionCurrentp(e.target.value)}
                    />
                    <br />
                    <button
                      type="button"
                      class="btn btn-success rounded-3"
                      onClick={() => handlebidproduct()}
                    >
                      Bid Product
                    </button>
                  </div>
                ))}
              </div>
              {/* </table> */}
            </form>
          </div>
        </div>
      </div>
      {/* {<!-- About End -->} */}
    </>
  );
}
export default Product;
