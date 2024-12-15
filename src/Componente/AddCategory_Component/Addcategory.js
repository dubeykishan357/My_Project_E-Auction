import { useState } from "react";
import "././Addcategory.css";
import axios from "axios";
import { categoryapiurl } from "../../userapiurl";

function Addcategory()
{
   const [catnm,setCatnm]=useState();
   const [file, setFile]=useState();
   const [output, setOutput]=useState();

   const handleChange=(event)=>{
    setFile(event.target.files[0]);
    // console.log(event.target);

   }

   const  handlesubmit = (event) => {
  event.preventDefault();

  var formData = new FormData();
  formData.append ('catnm', catnm);
  formData.append ('caticon',file);
  // console.log(FormData);

  const config={
    'content-type':'multipart/form-data'
  };
  axios.post(categoryapiurl+"save",formData,config).then((response)=>{
    setCatnm("");
    setOutput("category added succefully....")
    document.getElementById("file").value="";
  }).catch((error)=>{
        console.log(error);
        
  })
   }

    const handleKeyDown=(e)=>{
        if(e.key==="Enter")
        handlesubmit(e)
      }
return(
  <>



    {/* {<!-- About Start -->} */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
     <div class="col-lg-6">
       <h1 class="display-5 text-uppercase mb-4">Addcategory<span class="text-primary">Here!!!</span> </h1>
       <font style={{"color":"green"}} >{output}</font>
       <form onSubmit={handlesubmit} onKeyDown={handleKeyDown}>
                <div class="w-100">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control border-dark"
                      style={{ padding: "20px 30px" }}
                      placeholder="Enter category name"
                      value={catnm}
                       onChange={e=>setCatnm(e.target.value)} 

                      
                     />
                  
                  </div>
                  <br/>
                  <div class="input-group">
                    <input
                      type="file"
                      class="form-control border-dark form-control-lg"
                      style={{ padding: "20px 30px" }}
                      id="file"
                     
                      onChange={handleChange}
                    />
                    <br/>
                    
                  </div>
                  <br/>
                  <button class="btn btn-success  rounded-3"type="button"  onClick={handlesubmit}>Sign Up</button>
                  
                </div>
                </form>
     </div>
           
        </div>
    </div>
    {/* {<!-- About End -->} */}
    

  </>
)
}
 export default Addcategory;



