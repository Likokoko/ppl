import React, { useState, useEffect } from "react";

const UserCard = (props) => {
  const { user } = props;
  const { dob } = user;

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <div className="user-card">
      <div className="hover-info">
        <i>Cell: {user.cell}</i>
        <br />
        <i>
          Location: {user.location.city}, {user.location.state}
        </i>
        <br />
        <i>Phone: {user.phone}</i>
      </div>
    </div>
  );
};

export default UserCard;
