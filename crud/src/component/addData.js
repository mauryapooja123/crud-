import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddData() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  console.log(userData);

  const HandleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3002/student", ...userData)
      .then((response) => {
        console.log(response.data, "hghtyrt");
        //console.log(userData);
        navigate("/");
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <p>id number </p>
      <input
        type="number"
        placeholder="id number"
        name="id"
        onChange={HandleChange}
        value={userData}
      ></input>
      <p> enter name</p>

      <input
        type="text"
        placeholder="enter name"
        name="name"
        onChange={HandleChange}
        value={userData}
      ></input>

      <p>enter email</p>

      <input
        type="email"
        placeholder="enter email"
        name="email"
        onChange={HandleChange}
        value={userData}
      ></input>
      <p> enter password</p>
      <input
        type="password"
        placeholder=" enter password"
        name="password"
        onChange={HandleChange}
        value={userData}
      ></input>
      <br />
      <button type="submit"> submit</button>
    </form>
  );
}
export default AddData;
