import { useEffect, useState } from "react";
import { getToken } from "../services/api";

export function RobotAuth() {
  const [currentUser, setCurrentUser] = useState({});
  let user = {};

  function handleChange(ev) {
    user = { ...user, [ev.target.name]: ev.target.value };
  }
  function handleClick(event) {
    event.preventDefault();
    getToken(user).then((resp) => {
      setCurrentUser({ ...user, token: resp.data, islogged: true });
    });
  }

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    console.log("refrescando...");
  }, []);

  return (
    <form>
      <label htmlFor="name">
        Nombre:
        <input type="text" id="name" name="name" onChange={(ev) => handleChange(ev)}></input>
      </label>
      <label htmlFor="passwd">
        Password:
        <input type="password" id="passwd" name="passwd" onChange={(ev) => handleChange(ev)}></input>
      </label>
      <button type="submit" onClick={(ev) => handleClick(ev)}>
        Iniciar sesion
      </button>
    </form>
  );
}
