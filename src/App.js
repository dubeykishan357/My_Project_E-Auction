 import './App.css';
import Header from './Componente/Header_componet/Header';
import Nav from './Componente/Navbar_componet/Nav';
import About from './Componente/AboutComponent/About';
import Banner from './Componente/Banner_component/Banner';
import Main from './Componente/MainComponent/Main';
import AdminHome   from './Componente/Adminhome_Component/AdminHome';
import Manageusers from './Componente/Manageusers_Component/Manageusers';
import ChangePassword from './Componente/ChangePassword_Component/ChangePassword';
import EditProfile from './Componente/EditProfile_Component/EditProfile';
import UserHome from './Componente/Userhome_component/UserHome';
import Contect from './Componente/Contect_component/Contect';
import Service from './Componente/Service_compnent/Service';
import Register from './Componente/RegisterComponent/Register';
import Login from './Componente/LoginComponent/Login';
import Logout from './Componente/LogoutComponent/Logout';
import Footer from './Componente/FooterComponent/footer';
import{Route,Routes} from 'react-router-dom';
import Addcategory from './Componente/AddCategory_Component/Addcategory';
import Addsubcategory from './Componente/AddSubCategory_Component/Addsubcategory';
import Categories from './Componente/CategoriesComponent/Categories';
import SubCategories from './Componente/SubCategoriesComponent/SubCategories';
import Verifiied from './Componente/verifiedcomponent/verified';
import AddProduct from './Componente/Add ProductComponent/AddProduct';
import Product from './Componente/ProductComponent/Product';
import ProductList from './Componente/ProductListComponent/ProductList';
import ViewBidProduct from './Componente/ViewBidProduct_Component/ViewBidProduct';
import ViewBiddingDetails from './Componente/ViewBiddingDetailsComponent/ViewBiddinfDetails';



function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <Banner/>

    <Routes>
      <Route path= "/" element={<Main/>}></Route>
      <Route path= "/about" element={ <About/>}></Route>
      <Route path= "/content" element={<Contect/>}></Route>
      <Route path= "/service" element={ <Service/>}></Route>
      <Route path= "/register" element={ <Register/>}></Route>
      <Route path= "/login" element={ <Login/>}></Route>
      <Route path= "/logout" element={ <Logout/>}></Route>
      <Route path= "/admin" element={ <AdminHome/>}></Route>
      <Route path= "/manageusers" element={ <Manageusers/>}></Route>
      <Route path= "/changepassword" element={ <ChangePassword/>}></Route>
      <Route path= "/editprofile" element={ <EditProfile/>}></Route>
      <Route path= "/addcategory" element={ <Addcategory/>}></Route>
      <Route path= "/addsubcategory" element={ <Addsubcategory/>}></Route>
      <Route path= "/user" element={ <UserHome/>}></Route>
      <Route path= "/categories" element={ <Categories/>}></Route>
      <Route path= "/subcategories/:catnm" element={ <SubCategories/>}></Route>
      <Route path= "/verify/:email" element={ <Verifiied/>}></Route>
      <Route path= "/addproduct" element={ <AddProduct/>}></Route>
      <Route path= "/product/:_id" element={ <Product/>}></Route>
      <Route path= "/productlist/:subcatnm" element={ <ProductList/>}></Route>
      <Route path= "/viewbidproduct" element={ <ViewBidProduct/>}></Route>
      <Route path= "/viewbiddingdetails/:p_id" element={ <ViewBiddingDetails/>}></Route>
    
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;