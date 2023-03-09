import React, { useState, useEffect } from "react";
import UserCard from "./userCard"
const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [hoveredUser, setHoveredUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        const sortedUsers = data.results.sort((a, b) => {
          const aMonth = new Date(a.dob.date).getMonth();
          const bMonth = new Date(b.dob.date).getMonth();
          return aMonth - bMonth;
        });
        setUsers(sortedUsers);
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <article className="person">
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
            <div
              className="user"
              key={user.login.uuid}
              onMouseEnter={() => setHoveredUser(user)}
              onMouseLeave={() => setHoveredUser(null)}
            >
              <img src={user.picture.large} alt={user.name.first} />
              {hoveredUser === user && <UserCard user={user} />}
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p className="birthday">Birthday: {formatDate(user.dob.date)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

export default RandomUser;
