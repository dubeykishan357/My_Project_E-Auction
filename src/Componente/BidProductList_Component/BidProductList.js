import { useState,useEffect } from 'react';
import './BidProductList.css';
import axios from 'axios';
import { productapiurl, userapiurl } from '../../userapiurl';

function BidProductList()
{
    const [userDetails,setUserDetails]=useState([]);

    
    // const manageuserstatus=(_id,s)=>{
    //   // alert(_id);
    //     if(s=="block")
    //     {
    //       var condition_obj={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
          
    //       axios.patch(userapiurl+"update",condition_obj).then((response)=>{
    //     //   console.log(response);
    //         // alert("User blocked!!!");  
    //         navigate("/manageusers");
    //       });
    //     }
    //     else if(s=="verify")
    //     {
    //       var condition_obj={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
          
    //       axios.patch(userapiurl+"update",condition_obj).then((response)=>{
    //     //   console.log(response); 
    //     // alert("User verifyed!!!");  
    //         navigate("/manageusers");
    //       });
    //     }
    //     else{
    //       // alert("delete")
    //         var condition_obj={"data":{"_id":_id} };
    //       // console.log(condition_obj);
    //       axios.delete(userapiurl+"delete",condition_obj).then((result)=>{
    //         // console.log(result.data);
    //         navigate("/manageusers");
    //       }).catch((error)=>{
    //         console.log(error);
    //       })

    //     }
    // }

    useEffect(()=>{
        var condition_obj={"":"user"};
        axios.get(productapiurl+"fetch",{params : {condition_obj : condition_obj}}).then((response)=>{
            console.log(response.data);
            // setUserDetails(response.data.status);

        }).catch((error)=>{
        console.log(error);
        })
    },[manageuserstatus])
return(
  <>



    {/* {<!-- About Start -->} */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
                <h1 class="display-5 text-uppercase mb-4">View & <span class="text-primary">Manageusers panal</span> </h1>
                
                <div class="row gx-5 py-2"> </div>
                <table class="table table-bordered ">
                    <tr>
                        <th>RegId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gander</th>
                        <th>info</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    {
                        userDetails.map((row)=>(
                         <tr>
                            <td>{row._id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                            <td>{row.address}</td>
                            <td>{row.city}</td>
                            <td>{row.gander}</td>
                            <td>{row.info}</td>
                            <td>
                                {row.status==1 && <font color="green">Verified</font>}
                                {row.status==0 && <font color="red">Blocked</font>}
                            </td>
                            <td>
                                {row.status==1 && <font onClick={()=>{manageuserstatus(row._id,'block')}} color="blue">Change Status</font>}
                                {row.status==0 && <font onClick={()=>{manageuserstatus(row._id,'verify')}} color="blue">Change Status</font>}
                                <br/>
                                <font onClick={()=>{manageuserstatus(row._id,'delete')}} color="orange">Delete</font>
                            </td>
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
 export default BidProductList;



