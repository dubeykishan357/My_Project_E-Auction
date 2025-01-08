import "./Nav.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [NavContent, setNavContent] = useState();
  useEffect(() => {
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "admin"
    ) {
      setNavContent(
        <>
          <div class="container-fluid sticky-top bg-success bg-light-radial shadow-sm px-3 pe-lg-0">
            <nav class="navbar navbar-expand-lg bg-success bg-light-radial navbar-dark py-3 py-lg-0">
              <a href="index.html" class="navbar-brand">
                <Link to="">
                  {" "}
                  <h1 class="m-0 text-white">
                    <img src="./assets/img/Auction_logo.png" height={75} />
                    <span style={{ color: "#f89309" }}>e</span>
                    <span style={{ color: "#492315" }}>Auction</span>
                  </h1>
                </Link>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                  <Link to="/admin" class="nav-item nav-link active">
                    AdminHome
                  </Link>
                  <Link to="/manageusers" class="nav-item nav-link">
                    Managrusers
                  </Link>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Setting
                    </a>
                    <div class="dropdown-menu m-0">
                      <Link to="/editprofile" class="dropdown-item">
                        Edit Profile
                      </Link>
                      <Link to="/changepassword" class="dropdown-item">
                        Change Password
                      </Link>
                    </div>
                  </div>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Manage Category
                    </a>
                    <div class="dropdown-menu m-0">
                      <Link to="/addcategory" class="dropdown-item">
                        AddCategory
                      </Link>
                      <Link to="/addsubcategory" class="dropdown-item">
                        AddSubcategry
                      </Link>
                    </div>
                  </div>
                  <Link to="/logout" class="nav-item nav-link">
                    logout
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    } else if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "user"
    ) {
      setNavContent(
        <>
          <div class="container-fluid sticky-top bg-success bg-light-radial shadow-sm px-3 pe-lg-0 ">
            <nav class="navbar navbar-expand-lg bg-success bg-light-radial navbar-dark py-3 py-lg-0">
              <a href="index.html" class="navbar-brand">
                <Link to="">
                  {" "}
                  <h1 class="m-0 text-white">
                    <img src="./assets/img/Auction_logo.png" height={75} />
                    <span style={{ color: "#f89309" }}>e</span>
                    <span style={{ color: "#492315" }}>Auction</span>
                  </h1>
                </Link>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                  <Link to="/user" class="nav-item nav-link active">
                    UserHome
                  </Link>
                  <Link to="/addproduct" class="nav-item nav-link">
                    Add Product
                  </Link>

                  <Link to="/categories" class="nav-item nav-link">
                    SearchProduct
                  </Link>

                  <Link to="/viewbidproduct" class="nav-item nav-link">
                    View Bid Product
                  </Link>

                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Setting
                    </a>
                    <div class="dropdown-menu m-0">
                      <Link to="/editprofile" class="dropdown-item">
                        Edit Profile
                      </Link>
                      <Link to="/changepassword" class="dropdown-item">
                        Change Password
                      </Link>
                    </div>
                  </div>
                  <Link to="/logout" class="nav-item nav-link">
                    logout
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    } else {
      setNavContent(
        <>
          <div class="container-fluid sticky-top bg-success bg-light-radial shadow-sm px-3 pe-lg-0">
            <nav class="navbar navbar-expand-lg bg-success bg-light-radial navbar-dark py-3 py-lg-0">
              <a href="index.html" class="navbar-brand">
                <Link to="">
                  {" "}
                  <h1 class="m-0 text-white">
                    <img src="./assets/img/Auction_logo.png" height={75} />
                    <span style={{ color: "#f89309" }}>e</span>
                    <span style={{ color: "#492315" }}>Auction</span>
                  </h1>
                </Link>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                  <Link to="/" class="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/About" class="nav-item nav-link">
                    About
                  </Link>
                  <Link to="/Content" class="nav-item nav-link">
                    Contact
                  </Link>
                  <Link to="/Service" class="nav-item nav-link">
                    Service
                  </Link>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div class="dropdown-menu m-0">
                      <Link to="/" class="dropdown-item">
                        Our Project
                      </Link>
                      <Link to="/" class="dropdown-item">
                        Testimonial
                      </Link>
                      <Link to="/" class="dropdown-item">
                        Blog
                      </Link>
                    </div>
                  </div>
                  <Link to="/Register" class="nav-item nav-link">
                    Register
                  </Link>
                  <Link to="/login" class="nav-item nav-link">
                    login
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    }
  });

  return <>{NavContent}</>;
}
export default Nav;







// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import Banner from "../BannerComponent/Banner"

// function Home() {
//   const [homeSection, setHomeSection] = useState();

//   useEffect(() => {
//     if (
//       localStorage.getItem("token") != undefined &&
//       localStorage.getItem("role") == "admin"
//     ) {
//       setHomeSection(
//         <>
//           {/* <!-- Navbar Start --> */}
//           <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//             <a
//               href="index.html"
//               class="navbar-brand d-flex align-items-center px-4 px-lg-5"
//             >
//               <h2 class="m-0 text-primary">
//                 <i class="fa fa-book me-3"></i>eLEARNING
//               </h2>
//             </a>
//             <button
//               type="button"
//               class="navbar-toggler me-4"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarCollapse">
//               <div class="navbar-nav ms-auto p-4 p-lg-0">
//                 <Link to="/main">
//                   <a class="nav-item nav-link active">AdminHome</a>
//                 </Link>
               
//                 <Link to="/login">
//                   <a class="nav-item nav-link">Login</a>
//                 </Link>
//               </div>
//             </div>
//           </nav>

          
//           {/* <!-- Navbar End --> */}
//         </>
//       );
//     } 
//     else if (localStorage.getItem("token") !=undefined && localStorage.getItem("role")=="user")
//  {
//         setHomeSection(
//             <>
//               {/* <!-- Navbar Start --> */}
//               <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//                 <a
//                   href="index.html"
//                   class="navbar-brand d-flex align-items-center px-4 px-lg-5"
//                 >
//                   <h2 class="m-0 text-primary">
//                     <i class="fa fa-book me-3"></i>eLEARNING
//                   </h2>
//                 </a>
//                 <button
//                   type="button"
//                   class="navbar-toggler me-4"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarCollapse"
//                 >
//                   <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarCollapse">
//                   <div class="navbar-nav ms-auto p-4 p-lg-0">
//                     <Link to="/main">
//                       <a class="nav-item nav-link active">UserHome</a>
//                     </Link>
                   
//                     <Link to="/login">
//                       <a class="nav-item nav-link">Login</a>
//                     </Link>
//                   </div>
//                 </div>
//               </nav>
    
              
//               {/* <!-- Navbar End --> */}
//             </>
//           );
//     }
//     else{
//         setHomeSection(
//             <>
//             {/* <!-- Navbar Start --> */}
//       <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//         <a
//           href="index.html"
//           class="navbar-brand d-flex align-items-center px-4 px-lg-5"
//         >
//           <h2 class="m-0 text-primary">
//             <i class="fa fa-book me-3"></i>eLEARNING
//           </h2>
//         </a>
//         <button
//           type="button"
//           class="navbar-toggler me-4"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//           <div class="navbar-nav ms-auto p-4 p-lg-0">
//             <Link to="/main">
//               <a class="nav-item nav-link active">Home</a>
//             </Link>
//             <Link to="/about">
//               <a class="nav-item nav-link">About</a>
//             </Link>
//             <Link to="/courses">
//               {" "}
//               <a class="nav-item nav-link">Courses</a>
//             </Link>
//             <Link to="/service">
//               {" "}
//               <a class="nav-item nav-link">Service</a>
//             </Link>
//             <Link to="/register">
//               {" "}
//               <a class="nav-item nav-link">Register</a>
//             </Link>
//             <div class="nav-item dropdown">
//               <a
//                 href="#"
//                 class="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 Pages
//               </a>
//               <div class="dropdown-menu fade-down m-0">
//                 <a href="team.html" class="dropdown-item">
//                   Our Team
//                 </a>
//                 <a href="testimonial.html" class="dropdown-item">
//                   Testimonial
//                 </a>
//                 <a href="404.html" class="dropdown-item">
//                   404 Page
//                 </a>
//               </div>
//             </div>
//             <Link to="/login">
//               <a class="nav-item nav-link">Login</a>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* <Banner/> */}
//       {/* <!-- Navbar End --> */}
//             </>
//         )
//     }
//   });
//   return (
//     <>
//     {homeSection}
      
//     </>
//   );
// }

// export default Home;




