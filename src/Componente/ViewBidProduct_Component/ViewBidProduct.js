import { useEffect, useState } from "react";
import "./ViewBidProduct";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { productapiurl } from "../../userapiurl";

function ViewBidProduct() {

    const params = useParams();

    const [pDetails, setPdetails] = useState([]);

    useEffect(() => {
        var condition_obj = { "_id": params._id };
        axios.get(productapiurl + "fetch", { params: { condition_obj: condition_obj } }).then((response) => {
            // console.log(response.data.productDetails);
            setPdetails(response.data.productDetails);

        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <>

            {/* About Start */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="display-5 mb-4">View Bid Product<span class="text-primary"> List</span> </h1>

                            <table class="table table-bordered">
                                <tr>
                                    <th>ProductID</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Base Price</th>
                                    <th>Product Icon</th>
                                    <th>Info</th>
                                    <th>Action</th>
                                </tr>

                                {
                                      pDetails.map((row)=>(
                                        <tr>
                                          <td>{row._id}</td>
                                          <td>{row.title}</td>
                                          <td>{row.subcatnm}</td>
                                          <td>{row.description}</td>
                                          <td>{row.baseprice}</td>
                                          <td>{
                                            <img src={` ../assets/upload/product/${row.piconnm}`}class="h-50 w-50" />
                                            }</td>
                                          {/* <td>{row.piconnm}</td> */}
                                          <td>{row.info}</td>
                                          <td><Link to={`/viewbiddingdetails/${row._id}`} >Show Bid</Link></td>
                                        </tr>
                                      ))
                                }

                            </table>

                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>

    )
}
export default ViewBidProduct;