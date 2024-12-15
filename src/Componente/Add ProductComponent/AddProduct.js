import { useEffect, useState } from "react";
import "./AddProduct";
import axios from "axios";
import { categoryapiurl, productapiurl, subcategoryapiurl } from "../../userapiurl";

function AddProduct() {

  const [title,setTitle]=useState();
  const [selectCategory,setSelectCategory]=useState();
  const [selectSubCategory,setSelectSubCategory]=useState();
  const [basePrice,setBasePrice]=useState();
  const [description,setDescription]=useState();
  const [file,setFile]=useState();
  const [output,setOutput]=useState();
  const [cList,setCatList]=useState([]);
  const [scList,setSCList]=useState([]);


  useEffect(() => {
    axios
      .get(categoryapiurl + "fetch")
      .then((response) => {
        // console.log(response);
        
        setCatList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectCategory){

      const condition_obj = { catnm : selectCategory}
    axios
      .get(subcategoryapiurl + "fetch", { 
        params: {
          condition_obj: condition_obj
        }
      })
      .then((response) => {
        setSCList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, [selectCategory]);




  const handleChange = (event) => {
    // console.log(event.target.files[0]);
    
    setFile(event.target.files[0]);
    
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("title", title);
    formData.append("subcatnm", selectSubCategory);
    formData.append("catnm", selectCategory);
    formData.append("description",description);
    formData.append("baseprice", basePrice);
    formData.append("picon", file);
    console.log(FormData);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios.post(productapiurl+ "save", formData, config).then((response) => {
        // console.log(response);
        
      // setSelectCategory("");
      // selectSubCategory("");
      setOutput("Product Added Successfully....");
    }).catch((error)=>{
      console.log(error);
    });

  };

  

  


  return (
    <>



      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-12">
            <h1 class="display-5 text-uppercase mb-4">Add<span class="text-primary">Product Here!!</span> </h1>
                <font color="green">{output}</font>
            <div class="row ">
              <div class="col-md-6 mb-4">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="Name">
                    {/* {" "} */}
                    Title
                  </label>
                  <input
                    type="text"
                    id="Name"
                    class="form-control form-control-lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label select-label " >
                    Select Category
                  </label>
                  <div class="input-group">

                  <select
                    class="form-control"
                    value={selectCategory}
                    onChange={(e) => setSelectCategory(e.target.value)}
                  >
                    <option>Select Category</option>
                    {cList.map((row) => (
                      <option>{row.catnm}</option>
                    ))}
                  </select>
                </div>
                </div>
              </div>
              <div class="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label select-label">
                    Select Sub-Category
                  </label>
                  <div class="input-group">

                  <select
                    class="form-control"
                    value={selectSubCategory}
                    onChange={(e) => setSelectSubCategory(e.target.value)}
                  >
                    <option>Select Sub Category</option>
                    {scList.map((row) => (
                      <option>{row.subcatnm}</option>
                    ))}
                  </select>

                  
                </div>
                </div>
              </div>
              <div class="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="emailAddress">
                    Description
                  </label>
                  <input
                    type="text"

                    class="form-control form-control-lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="emailAddress">
                    Base Price
                  </label>
                  <input
                    type="text"

                    class="form-control form-control-lg"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  />
                </div>
              </div>

              
              <div class="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="emailAddress">
                    File
                  </label>
                  <input
                    type="file"

                    class="form-control form-control-lg"
                  
                  onChange={handleChange}
                  />
                </div>
              </div>
              </div>
              <div class="row ">
              <div class="col-md-12 mb-4 pb-2">
                      <button
                        data-mdb-ripple-init
                        class="btn btn-success rounded-3"
                        type="button"
                        onClick={handleAddProduct}
                      >
                        Add-  Category
                      </button>
                    </div>
                   </div>
              
            

          </div>

        </div>
      </div>
      {/* {<!-- About End -->} */}


    </>
  )
}
export default AddProduct;



