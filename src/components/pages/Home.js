import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users")
      .then((result) => {
        setUser(result.data.reverse());
      })
      .catch((err) => {
        console.log("this is  home page error", err);
      });
    {
      console.log(users);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table className="table border shadow">
          <thead>
            <tr className="table-dark">
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary">View</Link>
                    <Link className="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
