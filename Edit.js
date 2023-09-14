import React, { useEffect, useState } from 'react';
import "./Edit.css";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const {id} = useParams()
  const [car, setCar] = useState({});
  const navigate = useNavigate();
  

  const getRecord = () => {
    fetch(`http://localhost:7000/cars/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCar(data);
      })
      .catch((error) => {
        console.error('Something went wrong', error);
      });
  };

  const editRecord = (e) => {
    e.preventDefault();

    fetch("http://localhost:7000/cars/" +id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Record Updated");
          navigate("/list");
        } else {
          console.error("Record not added. Server response not ok.");
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  useEffect(() => {
    getRecord();
  }, []);

  return (
    <div className="container mobile-page">
        <h2>Edit Car Record</h2>
        <form
          action=""
          className="mobile-form"
          onSubmit={(event) => {
            editRecord(event);
          }}
        >
          <div className="form-group">
            <label htmlFor="car_id">Id</label>
            <input
              type="number"
              className="form-control"
              name="id" 
              value={car.id || ""}
              placeholder="Enter Id"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="car_image">Image</label>
            <input
              type="text"
              className="form-control"
              name="image" 
              value={car.image || ""}
              placeholder="Enter Image URL"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name" 
              value={car.name || ""}
              placeholder="Enter Name"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_color">Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              value={car.color || ""}
              placeholder="Enter Color"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_price">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={car.price || ""}
              placeholder="Enter Price"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="car_brand">Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand" 
              value={car.brand || ""}
              placeholder="Enter Brand"
              onChange={(event) => {
                handleInputChange(event);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}

export default Edit;
