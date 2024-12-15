import { useEffect, useState } from "react";
import "./BiddingDetails.css";
import { useParams } from "react-router-dom";
import { bidapiurl } from "../../userapiurl";

function BiddingDetails(){

    const params= useParams();
     
    const [pDetails,setPDetails]=useState();

    useEffect(() => {
        var condition_obj = { "_id": params._id };
        axios.get(bidapiurl + "fetch", { params: { condition_obj: condition_obj } }).then((response) => {
            // console.log(response.data.productDetails);
            setPDetails(response.data.productDetails);

        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return(
        <>
        {/* About Start */}
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
<h1 class="mb-4">Bid Product Here!!!</h1>
<font style={{"color":"blue"}} >{output}</font>

<table>
<tr>
<td>ProductID : </td>
<td>{pDetails._id}</td>
</tr>
<tr>
<td>Base Price : </td>
<td>&#8377;{pDetails.baseprice}</td>
</tr>  
<tr>
<td>Auction Current Price : </td>
<td>&#8377;{cPrice}</td>
</tr>
<tr>
<td>Enter Your Bid Price : </td>
<td>
<form>
{/* <input type="text" class="form-control" value={BidPrice} onChange={e => setBidPrice(e.target.value)} /> */}
<br/>
{/* <button onClick={handleSubmit} type="button" class="btn btn-danger">Bid Product</button> */}
</form>
</td>
</tr>
</table>

                </div>
            </div>
        </div>
    </div>
    {/* About End */}
</>
    )
}