import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    getData();
  }, []);

  const [userName, setUserName] = useState();
  const nevigate = useNavigate();
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/student");
    setUserName(res.data);
  };
  return (
    <div>
      <p> API DATA</p>
      <th>id</th>
      <th> name</th>
      <th> email</th>
      <th>password</th>

      {userName &&
        userName.map((data, i) => (
          <tr key={i}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
          </tr>
        ))}
      <br />
      <button type="button" onClick={() => nevigate("/AddData")}>
        data
      </button>
    </div>
  );
}

export default Home;
