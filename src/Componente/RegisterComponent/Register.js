import "./Register.css";
import { useState } from "react";
import axios from 'axios';
import { userapiurl } from "../../userapiurl";
import InnerHeader from "../InnerHeaderComponent/InnerHeader";


function Register() {

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlesubmit(e);
    }
  }
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [output, setOutput] = useState();
  const [output1, setOutput1] = useState();

  const handlesubmit = () => {
    if(!name) setOutput1("*Name is required");
    else if(!email) setOutput1("*email is required");
    else if(!password) setOutput1("*password is required");
    else if(!mobile) setOutput1("*mobile is required");
    else if(!gender) setOutput1("*gender is required");
    else if(!city) setOutput1("*city is required");
    else if(!address) setOutput1("*address is required");
    // if (name == undefined) setOutput("*Name is required");
    // else if (email == undefined) setOutput("*email is required");
    // else if (password == undefined) setOutput("*password is required");
    // else if (mobile == undefined) setOutput("*mobile is required");
    // else if (city == undefined) setOutput("*city is required");
    // else if (address == undefined) setOutput("*address is required");
    else {
      var userDetails = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        gender: gender,
        city: city,
        address: address,
      };

      axios.post(userapiurl + "save", userDetails).then(() => {
        
        setOutput("Register succufully...........")
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
        setTimeout(()=>{
          setOutput("");
        },3000);

      }).catch((error) => {
        console.log(error.message);
        
        setOutput1("user register failed....");

      });

    }

  };
  return (
    <>
    <div>
      <InnerHeader text="Register Here!!!" />
    </div>
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
                      Registration Form !!!
                    </h1>
                  </h3>
                  <font color="red">{output1}</font>
                  <font color="green">{output}</font>
                  <form onSubmit={handlesubmit} onKeyDown={handleKeyDown}>
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
                          <input
                            type="Password"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
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
                          <label class="form-check-label" for="male" style={{ cursor: "pointer" }}>
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
                        <br />
                        <div class="form-check form-check-inline">
                          <label class="form-check-label" for="female" style={{ "cursor": "pointer" }}>
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
                          style={{ cursor: "pointer" }}
                        >
                          <option >Select City</option>
                          <option>Anuppur</option>
                          <option>Shahdol </option>
                          <option>Umaria</option>
                          <option>katni</option>
                          <option>Jabalpur</option>
                          <option>Rewa </option>
                          <option>Ujjain</option>
                          <option>Dewas</option>
                          <option>Indore</option>
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
                        onClick={handlesubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
export default Register;


