import './Login.css';
import axios from 'axios';
import { userapiurl } from '../../userapiurl';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import InnerHeader from '../InnerHeaderComponent/InnerHeader';


function Login()
{

  const navigate = useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [output,setOutput]=useState(); 
  const [output1, setOutput1] = useState();
  
  const handlesubmit = () => {
   
    if (email === undefined) setOutput("*email is required");
    else if (password === undefined) setOutput("*password is required");
    
    else {
      var userDetails = {
        email: email,
        password: password,
        
      };
        
       axios.post(userapiurl+"login",userDetails).then((response)=>{
        var user=response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",user._id);
        localStorage.setItem("name",user.name);
        localStorage.setItem("email",user.email);
        localStorage.setItem("mobile",user.mobile);
        localStorage.setItem("city",user.city);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("address",user.address);
        localStorage.setItem("info",user.info);
        localStorage.setItem("role",user.role);
          

        (user.role==="admin")?navigate("/admin"):navigate("/user");
        setOutput1("Login succefully....");
        // setPassword("");
       }).catch(()=>{
         setOutput("Invaild user and verified your account....");
         setEmail("");
         setPassword("");
       });

    }

  }
  const handleKeyDown=(e)=>{
    if(e.key==="Enter")
    handlesubmit(e)
  }
  
  return(
    <>
    <div>
      <InnerHeader text="Login Us" />
    </div>
    
    <div class="container-fluid py-6 px-5 justi">
        <div class="row g-5">
            <div class="col-lg-6 bg-light">
                <h1 class="display-5 text-uppercase mb-4">Login <span class="text-primary">Section</span> </h1>
                <div class="col-sm-12">
                <h4 class="text-black text-uppercase mb-4">Login here!!</h4>
                <font color="red">{output}</font>
                <font color="Green">{output1}</font>
                <form onSubmit={handlesubmit} onKeyDown={handleKeyDown}>
                <div class="w-100">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control border-dark"
                      style={{ padding: "20px 30px" }}
                      placeholder="Enter Your Email Address"
                     value={email}onChange={e=>setEmail(e.target.value)}  />
                  
                  </div>
                  <br/>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control border-dark form-control-lg"
                      style={{ padding: "20px 30px" }}
                      placeholder="Enter Your Password"
                      value={password}onChange={e=>setPassword(e.target.value)}/>
                    <br/>
                    
                  </div>
                  <br/>
                  <button class="btn btn-primary px-4 p-3"type="button"  onClick={handlesubmit}>Sign Up</button>
                  
                </div>
                </form>
              </div>
            </div> 
            </div>
    </div>
    
    </>
  )
}
export default Login;



