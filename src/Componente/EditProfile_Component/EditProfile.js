import { useState } from 'react';
import './EditProfile.css'
import axios from 'axios';
import { userapiurl } from '../../userapiurl';
import { useNavigate } from 'react-router-dom';

function EditProfile()
{

  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [output, setOutput] = useState(localStorage.getItem("output"));


function EP(){
  var condition_obj={"condition_obj":{"_id":(localStorage.getItem('_id'))},"content_obj":{"name":name,"email":email, "mobile":mobile, "address":address , "city":city, "gender":gender}};
  
  axios.patch(userapiurl+"update",condition_obj).then((response)=>{ 
    setOutput("User Updated Successfully....") 
   
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem('mobile',mobile);
    localStorage.setItem("address",address);
    localStorage.setItem("city",city);
    localStorage.setItem("gender",gender);

  });

};
  

return(
  <>



    {/* {<!-- About Start -->} */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
                <h1 class="display-5 text-uppercase mb-4">EditProfile <span class="text-primary">Section</span> </h1>
                
                <section class=" gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100 ">
            <div class="col-12 col-lg-9 col-xl-7 ">
              <div
                class="card shadow-2-strong card-registration"
                style={{ "border-radius": "15px" }}
              >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">
                    <h1 style={{ textAlign: "center" }}>
                      EditProfile !!!
                    </h1>
                  </h3>
                  <font color="green">{output}</font>
                
                  <form >
                    <div class="row ">
                      <div class="col-md-6 mb-4">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="Name">
                            {/* {" "} */}
                            Name
                          </label>
                          <input
                            type="text"
                            id="Name"
                            class="form-control form-control-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="emailAddress">
                            Email
                          </label>
                          <input
                            type="email"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          {/* <input
                            type="Password"
                            //  id="phoneNumber"
                            // class="form-control form-control-lg" 
                            // value={password}
                            //  onChange={(e) => setPassword(e.target.value)}
                                   /> */}
                        </div>
                      </div>

                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div
                          data-mdb-input-init
                          class="form-outline datepicker w-100"
                        >
                          <label for="phone" class="form-label">
                            Mobile
                          </label>
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <span class=" text-grey">Gender: </span>
                        
                        &nbsp;&nbsp;
                        
                        <div class="form-check form-check-inline">
                          <label class="form-check-label" for="male" style={{cursor:"pointer"}}>
                            Male
                          </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            value="male"
                            name="gender"
                            id="male"
                            onChange={(e) => setGender(e.target.value)}
                          />
                        </div>
                        <br/>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label" for="female" style={{"cursor":"pointer"}}>
                            Female
                            </label>
                          <input
                            class="form-check-input"
                            type="radio"
                            value="female"
                            name="gender"
                            id="female"
                            onChange={(e) => setGender(e.target.value)}
                          />
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">
                        <label class="form-label select-label">City</label>
                        &nbsp;&nbsp;
                        <select
                          class="select form-control-lg"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          style={{cursor:"pointer"}}
                        >
                          <option >Select City</option>
                          <option>Indore</option>
                          <option>Rewa </option>
                          <option>Jabalpur</option>
                          <option>kotma</option>
                    <option>Sahdol</option>
                    <option>Anuppur</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <label class="form-label select-label">Address</label>
                        <textarea
                          rows="4"
                          cols="50"
                          class="rounded-3 pill-3"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                      <button
                        data-mdb-ripple-init
                        class="btn btn-success rounded-3"
                        type="button"
                        onClick={EP}
                       
                      >
                       EditProfile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
   
  

                </div>
        </div>
    </div>
    
    {/* {<!-- About End -->} */}

  </>
)
}
 export default EditProfile;



