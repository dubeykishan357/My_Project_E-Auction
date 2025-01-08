import InnerHeader from "../InnerHeaderComponent/InnerHeader";
import "./Service.css";

function Service(){
    return(
        <>
        <div>
            <InnerHeader text="Service Us"/>
        </div>
        
        
    {/* {<!-- Services Start -->} */}
    <div class="container-fluid bg-light py-6 px-5">
        <div class="text-center mx-auto mb-5" style={{"max-width": "600px"}}>
            <h1 class="display-5 text-uppercase mb-4">Our <span class="text-primary">Product</span></h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4 col-md-12">
                <div class="service-item bg-white d-flex flex-column align-items-center text-center">
                    <img class="img-fluid" src="./assets/img/service-1.jpg" alt="Auction service~"/>
                    <div class="service-icon bg-white">
                        <i class="fa fa-3x fa-building text-primary"></i>
                    </div>
                    <div class="px-4 pb-4">
                        <h4 class="text-uppercase mb-3">Auction</h4>
                        <p>Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo</p>
                        <button class="btn text-primary" href="">Read More <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
                        <div class="col-lg-4 col-md-6">
                <div class="service-item bg-white rounded d-flex flex-column align-items-center text-center">
                    <img class="img-fluid" src="./assets/img/service-4.jpg" alt="Interior Design service"/>
                    <div class="service-icon bg-white">
                        <i class="fa fa-3x fa-palette text-primary"></i>
                    </div>
                    <div class="px-4 pb-4">
                        <h4 class="text-uppercase mb-3">Interior Design</h4>
                        <p>Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo</p>
                        <button class="btn text-primary" href="">Read More <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="service-item bg-white rounded d-flex flex-column align-items-center text-center">
                    <img class="img-fluid" src="./assets/img/service-5.jpg" alt="Fixing & Support service"/>
                    <div class="service-icon bg-white">
                        <i class="fa fa-3x fa-tools text-primary"></i>
                    </div>
                    <div class="px-4 pb-4">
                        <h4 class="text-uppercase mb-3">Fixing & Support</h4>
                        <p>Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo</p>
                        <button class="btn text-primary" href="">Read More <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    {/* {<!-- Services End -->} */}
        </>
    )
}
export default Service;