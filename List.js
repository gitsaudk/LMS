import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./List.css";

const List = () => {
  const [cars, setCars] = useState([]);
  
  const getList = () => {
    fetch("http://localhost:7000/cars")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setCars(data);
        console.log(data);
      })
      .catch((error) => {
        alert("Error fetching data: " + error.message);
      });
  };

  const deleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete the record")) {
      fetch("http://localhost:7000/cars/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          console.log("Record deleted");
          getList();
        })
        .catch((error) => {
          console.log("Error deleting record: " + error.message);
        });
    }
  };


  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div className="text-right add-button">
        <Link to={"/add"}>
          <button className="btn btn-primary m-2 pt-2">Add</button>
        </Link>
      </div>

      <table id="car-list-table" className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Car Image</th>
            <th>Car Name</th>
            <th>Car Color</th>
            <th>Car Price</th>
            <th>Car Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((record, key) => {
            return (
              <tr key={key+1}>
                <td>{record.id}</td>
                <td>
                  <img src={record.image} alt="" width="70px" />
                </td>
                <td>{record.name}</td>
                <td>{record.color}</td>
                <td>{record.price}</td>
                <td>{record.brand}</td>
                <td>
                  
                <Link to={`/edit/${record.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                  &nbsp;
                  <button
                    onClick={() => {
                      deleteRecord(record.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
