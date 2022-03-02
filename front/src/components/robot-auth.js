import { useEffect, useState } from "react";
import { getToken } from "../services/api";

export function RobotAuth() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    passwd: "",
  });
  let user = {};
  let islogged = false;

  function handleChange(ev) {
    user = { ...user, [ev.target.name]: ev.target.value };
  }

  function handleClick(event) {
    event.preventDefault();
    if (event.target.name === "login") {
      getToken(user).then((resp) => {
        setCurrentUser(resp.data);
        localStorage.setItem("token", JSON.stringify(resp.data.token));
        islogged = true;
      });
    } else {
      localStorage.removeItem("token");
      setCurrentUser({});
      islogged = false;
    }
  }

  useEffect(() => {
    console.log("Cargando...");
  }, [currentUser]);

  return (
    <div>
      {islogged === true ? <p>Bienvenido de nuevo {currentUser.userName}</p> : <p>Introduzca sus datos</p>}
      <form>
        <label htmlFor="name">
          Nombre:
          <input type="text" id="name" name="name" value={user.name} onChange={(ev) => handleChange(ev)}></input>
        </label>
        <label htmlFor="passwd">
          Password:
          <input
            type="password"
            id="passwd"
            name="passwd"
            value={user.passwd}
            onChange={(ev) => handleChange(ev)}
          ></input>
        </label>
        {currentUser.token ? (
          <button type="submit" name="logout" onClick={(ev) => handleClick(ev)}>
            Cerrar sesion
          </button>
        ) : (
          <button type="submit" name="login" onClick={(ev) => handleClick(ev)}>
            Iniciar sesion
          </button>
        )}
      </form>
    </div>
  );
}
