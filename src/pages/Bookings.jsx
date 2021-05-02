import React from "react";
import BookingsGrid from "../components/BookingsGrid/BookingsGrid";

import "./Bookings.css";

const data = [
  {
    id: "1",
    client: "client 1",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
  {
    id: "2",
    client: "client 2",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
  {
    id: "3",
    client: "client 3",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
  {
    id: "4",
    client: "client 4",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
  {
    id: "5",
    client: "client 5",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
  {
    id: "6",
    client: "client 6",
    date: "tsri",
    address: "address 1",
    price: "price 1",
  },
];

const Bookings = () => {
  return (
    <div className="bookings">
      <header className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <button className="bookings-button">logout</button>
      </header>
      <div className="bookings-filters">Filters</div>
      <div className="bookings-grid-wrapper">
        <BookingsGrid rows={data} />
      </div>
    </div>
  );
};

export default Bookings;
