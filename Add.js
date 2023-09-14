import React, { useState } from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const addRecord = (event) => {
    event.preventDefault();
    fetch("http://localhost:7000/cars/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Record Adde9d");
          navigate("/list");
        } else {
          console.error("Record not added. Server response not ok.");
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  };

  return (
    <>
      <div className="container mobile-page p-4 m-6">
        <h2 className="text-center">Create Car Record</h2>
        <form
          action=""
          className="mobile-form"
          onSubmit={(event) => {
            addRecord(event);
          }}
        >
          <div className="form-group justify-content-center">
            <label htmlFor="car_id">Id</label>
            <input
              type="number"
              className="form-control"
              name="id" 
              value={car.id || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="car_image">Image</label>
            <input
              type="text"
              className="form-control"
              name="image" 
              value={car.image || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Image URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name" 
              value={car.name || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_color">Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              value={car.color || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Color"
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_price">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={car.price || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_brand">Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand" 
              value={car.brand || ""}
              onChange={(event) => {
                handleInputChange(event);
              }}
              placeholder="Enter Brand"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
