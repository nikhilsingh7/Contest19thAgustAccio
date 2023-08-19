import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      fetch(`https://dummyjson.com/users/${storedUser.id}`)
        .then((res) => res.json())
        .then((userData) => {
          // Update user data with additional details
          setUser({ ...storedUser, ...userData });
          // Store updated user data
          localStorage.setItem('user', JSON.stringify({ ...storedUser, ...userData }));
        });
    }
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
