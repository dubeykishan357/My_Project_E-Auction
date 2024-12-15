import { useEffect, useState } from "react";
import "./ViewBiddingDetails.css";
import { bidapiurl } from "../../userapiurl";
import axios from "axios";
import { useParams } from "react-router-dom";
function ViewBiddingDetails() {

    const [vDetails, setVDetails]=useState([]);
    const params = useParams();

   
    useEffect(() => {

        var condition_obj = { "_id": params._id };
        // console.log(params.subcatnm);

        axios.get(bidapiurl + "fetch", { params: { condition_obj: condition_obj } }).then((response) => {
            // console.log(response.data);
            setVDetails(response.data);

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
                        <h1 class="display-5 text-uppercase mb-4">Show Bidding<span class="text-primary"> Details!!</span> </h1>

                        <table class="table table-bordered">
                            <tr>
                                <th>BiddingID</th>
                                <th>ProductID</th>
                                <th>UserID</th>
                                <th>Bidding Price</th>
                                <th>Info</th>
                            </tr>

                            {
                                vDetails.map((row) => (
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.p_id}</td>
                                        <td>{row.user_id}</td>
                                        <td>{row.bidprice}</td>
                                        <td>{row.info}</td>
                                        </tr>
                             ))
                             }

                        </table>

                    </div>

                </div>
            </div>
            {/* {<!-- About End -->} */}


        </>
    )
}
export default ViewBiddingDetails;


