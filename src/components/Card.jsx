import React from "react";
import { Link } from "react-router-dom";

export default function Card({ item }) {

  return (
    <div className="card m-3" style={{ width: "19rem", height: "500px" }}>
      <img
        src={item.img}
        className="card-img-top"
        alt="..."
        style={{ height: "200px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}({item.timing})</h5>
        <p className="card-text">{item.description}</p>
        <div className="container w-100">
          <div className="d-inline h-100 fs-7">₹500/-</div>
          <hr />
          {console.log(item._id)}
          <Link
            className="btn btn-success justify-center ms-2"
            to={`/enrole/${item._id}`}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
