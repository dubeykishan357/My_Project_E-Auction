import "./Addsubcategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { categoryapiurl, subcategoryapiurl } from "../../userapiurl";

function Addsubcategory() {
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [file, setFile] = useState();
  const [output, setOutput] = useState();
  const [cList, setCatList] = useState([]);

  useEffect(() => {
    axios
      .get(categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("subcaticon", file);
    // console.log(FormData);

    const config = {
      "content-type": "multipart/form-data",
    };
    axios.post(subcategoryapiurl+ "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    }); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handlesubmit(e);
  };
  return (
    <>
      {/* {<!-- About Start -->} */}
      <div class="container-fluid py-6 px-5">
        <div class="row g-5">
          <div class="col-lg-6">
            <h1 class="display-5 text-uppercase mb-4">
              Add Subcategory<span class="text-primary">Here!!!</span>{" "}
            </h1>
            <font style={{ color: "green" }}>{output}</font>
            <form onSubmit={handlesubmit} onKeyDown={handleKeyDown}>
              <div class="w-100">
                <div class="input-group">

                  <select
                    class="form-control"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  >
                    <option>Select Category</option>
                    {cList.map((row) => (
                      <option>{row.catnm}</option>
                    ))}
                  </select>
                </div>
                <br />
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-dark"
                    style={{ padding: "20px 30px" }}
                    placeholder="Enter subcategory name"
                    value={subCatName}
                    onChange={(e) => setSubCatName(e.target.value)}
                  />
                </div>
                <br />
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control border-dark form-control-lg"
                    style={{ padding: "20px 30px" }}
                    id="file"
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <br />
                <button
                  class="btn btn-success  rounded-3"
                  type="button"
                  onClick={handlesubmit}
                >
                  Add Sub Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {<!-- About End -->} */}
    </>
  );
}

export default Addsubcategory;
