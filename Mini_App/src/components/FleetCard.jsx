import React from 'react'

const Fleetimport React from "react";

const FleetCard = ({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <img src="https://via.placeholder.com/150" alt="vehicle" />

      <p>Reg No: {fleet.regNo}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.available ? "Available" : "Unavailable"}</p>

      <button onClick={() => onUpdateDriver(fleet.id)}>
        Update Driver
      </button>

      <button onClick={() => onToggleAvailability(fleet.id)}>
        Toggle Availability
      </button>

      <button onClick={() => onDelete(fleet.id)}>
        Delete
      </button>
    </div>
  );
};

export default React.memo(FleetCard);
