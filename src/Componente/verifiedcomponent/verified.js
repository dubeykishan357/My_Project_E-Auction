// import { Navigate , useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { userapiurl } from '../../userapiurl';
// import axios from 'axios';

// function Verifyuser()
// {
//     const params = useParams(); 

//     useEffect(()=>{
//      axios.get(userapiurl+"fetch?email="+params.email).then((response)=>{
//         if(response.data[0].__v==0)
//         {
//             var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
//             axios.patch(userapiurl+"update",updateDetails).then((response)=>{
//                console.log("User verified....");    
//             });    
//         }       
//      });
//     },[]);

//     return(
//         <div>
//             <Navigate to='/login' />
//         </div>
//     )
// }

// export default Verifyuser;



import { useEffect } from "react";
import { userapiurl } from "../../userapiurl";
import { useParams } from "react-router-dom";
import axios from "axios";




function Verifiied() {
    const { email } = useParams();
    console.log(email);

    useEffect(() => {
        var condition_obj = {
            condition_obj: { email: email },
            content_obj: { status: 1 }
        };
        axios.patch(userapiurl + "update", condition_obj).then((response) => {
            console.log(response.data);
            // setUserDetails(response.data.status);

        }).catch((error) => {
            console.log(error);
        })
    }, [email])

    return (
        <>


        </>
    )


}
export default Verifiied;