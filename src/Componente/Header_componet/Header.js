import "./Header.css";
import { useState, useEffect } from "react";
import Auth from "../Auth_Component/Auth";


function Header() {
  const [HeaderContent, setHeaderContent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "admin"
    ) {
      setHeaderContent(
        <>
          <div
            class="container-fluid px-5 d-none d-lg-block"
            style={{ height: "75px" }}
          >
            <div class="row gx-5">
              {/* <div class="col-lg-4 text-center py-3">
                <div class="d-inline-flex align-items-center">
                    <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    <div class="text-start">
                        <h6 class="text-uppercase fw-bold">Our Office</h6>
                        <span>XXX Street, Indore, INDIA</span>
                    </div>
                </div>
            </div> */}
              <div class="col-lg-8 text-center border-start border-end py-3">
                <div class="d-inline-flex align-items-center">
                  <div class="text-start">
                    <h2 class="text-uppercase fw-bold">
                      WellCome <font color="red">admin</font>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-center py-3">
                <div class="d-inline-flex align-items-center">
                  <div class="text-start">
                    <h2>{localStorage.getItem("email")}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "user"
    ) {
      setHeaderContent(
        <>
          <div
            class="container-fluid px-5 d-none d-lg-block"
            style={{ height: "75px" }}
          >
            <div class="row gx-5">
              {/* <div class="col-lg- text-center py-3">
                <div class="d-inline-flex align-items-center">
                    <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    
                </div>
            </div> */}
              <div class="col-lg-8 text-center border-start border-end py-3">
                <div class="d-inline-flex align-items-center">
                  <div class="text-start">
                    <h2 class="text-uppercase fw-bold">
                      WellCome <font color="red">User</font>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-center py-3">
                <div class="d-inline-flex align-items-center">
                  <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div class="text-start">
                    <h6 class="text-uppercase fw-bold">Email Us</h6>
                    <span>eauction@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      setHeaderContent(
        <>
          <div
            class="container-fluid px-5 d-none d-lg-block"
            style={{ height: "75px" }}
          >
            <div class="row gx-5">
              <div class="col-lg-4 text-center py-3">
                <div class="d-inline-flex align-items-center">
                  <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div class="text-start">
                    <h6 class="text-uppercase fw-bold">Our Office</h6>
                    <span>XXX Street, Indore, INDIA</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-center border-start border-end py-3">
                <div class="d-inline-flex align-items-center">
                  <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div class="text-start">
                    <h6 class="text-uppercase fw-bold">Email Us</h6>
                    <span>eauction@gmail.com</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 text-center py-3">
                <div class="d-inline-flex align-items-center">
                  <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div class="text-start">
                    <h6 class="text-uppercase fw-bold">Call Us</h6>
                    <span>XXX XXX XXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });

  return(
    <>
    <Auth />
    { HeaderContent }
    </>
 )
}

export default Header;
