import "./ChangePassword.css";
import axios from "axios";
import { userapiurl } from "../../userapiurl";
import { useState, useEffect } from "react";

function ChangePassword() { 
  const [password, setPassword] = useState();
  const [currentpassword, setCurrentpassword] = useState();
  const [newpassword, setNewpassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [output, setOutput] = useState();
  const [output1, setOutput1] = useState();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") document.getElementById("chngbtn").click();
  };

  const handlesubmit = () => {
    if (currentpassword == undefined) setOutput("Current Password is required");
    else if (newpassword == undefined) setOutput("*New password is required");
    else if (confirmpassword == undefined)
      setOutput("*confirm password is required");

    else {
      if (password === currentpassword) {
        setPassword("password match");
        // setTimeout =>({
        //   setPassword:("")
        // },2000)
        if (newpassword === confirmpassword) {
          setOutput1("password Matched");
          // setTimeout =>({
          //   setPassword1:("")
          // },2000)
          const condition_obj = {
            condition_obj: { _id: localStorage.getItem("_id") },
            content_obj: { password: newpassword },
          };
          axios
            .patch(userapiurl + "update", condition_obj)
            .then((response) => {
              setOutput1(" Password changed successfully!!!!!");
              setCurrentpassword("");
              setNewpassword("");
              setConfirmpassword("");
            })
            .catch((error) => {
              setOutput("Error changing password: " + error.message);
            });
        }
      
      } else {
        setOutput("Error missmatch password.");
        setCurrentpassword("");
        setNewpassword("");
        setConfirmpassword("");
      }
    }
  };
  useEffect(() => {
    const userId = localStorage.getItem("_id");
    var condition_obj = { _id: userId };
    axios
      .get(userapiurl + "fetch", { params: { condition_obj: condition_obj } })
      .then((response) => {
        setPassword(response.data.status[0].password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-6 bg-light">
            <h1 class="display-5 text-uppercase mb-4">
              Change <span class="text-primary">Password Section</span>{" "}
            </h1>
            <div class="col-sm-12">
              <h4 class="text-black text-uppercase mb-4">
                Change Password here!!
              </h4>
              <font color="red">{output}</font>
              <font color="Green">{output1}</font>
              <form>
                <div class="w-100">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control border-dark"
                      style={{ padding: "20px 30px" }}
                      placeholder="Enter Your Current Password"
                      value={currentpassword}
                      onChange={(e) => setCurrentpassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control border-dark form-control-lg"
                      style={{ padding: "20px 30px" }}
                      placeholder="Enter Your New Password"
                      value={newpassword}
                      onChange={(e) => setNewpassword(e.target.value)}
                    />
                    <br />
                  </div>
                  <br />
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control border-dark form-control-lg"
                      style={{ padding: "20px 30px" }}
                      placeholder="Confirm Your New Password"
                      value={confirmpassword}
                      onKeyDown={(e) => handleKeyDown(e)}
                      onChange={(e) => {
                        setConfirmpassword(e.target.value);
                      }}
                    />
                    <br />
                  </div>
                  <br />
                  <button
                    class="btn btn-success rounded-3"
                    id="chngbtn"
                    type="button"
                    onClick={handlesubmit}
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePassword;
