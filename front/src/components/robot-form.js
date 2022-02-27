import { getRobot, setRobot, updateRobot } from "../services/api";
import * as actions from "../reducer/robots/action-creator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function RobotForm(robot) {
  const [currentRobot, setCurrentRobot] = useState({});
  const robotState = useSelector((state) => {
    return state.robots;
  });
  const dispatch = useDispatch();

  let pathname = window.location.pathname;
  pathname = pathname.split("/");

  useEffect(() => {
    if (pathname[2] === "update") {
      getRobot(pathname[3]).then((resp) => {
        setCurrentRobot(resp.data);
      });
    }
  }, []);

  // useEffect(() => {
  //   console.log(currentRobot);
  // }, [currentRobot]);

  let newRobot = {};

  function handleChange(ev) {
    newRobot = { ...newRobot, [ev.target.name]: ev.target.value };
  }

  function handleClick(event) {
    event.preventDefault();
    if (pathname[2] === "update") {
      newRobot = { ...newRobot, _id: pathname[3] };
      updateRobot(newRobot).then((resp) => {
        dispatch(actions.updateRobot(resp.data));
      });
    } else {
      setRobot(newRobot).then((resp) => {
        dispatch(actions.addRobot(resp.data));
      });
    }
  }

  return (
    <>
      <p>Introduce aqui los datos:</p>
      <form type="submit">
        <div>
          <label htmlFor="name">
            Nombre:
            <input type="text" id="name" name="name" placeholder={currentRobot.name ? currentRobot.name : ""} maxLength="10" onChange={(ev) => handleChange(ev)} required></input>
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Foto:
            <input type="text" id="image" name="image" placeholder={currentRobot.image ? currentRobot.image : ""} onChange={(ev) => handleChange(ev)} required></input>
          </label>
        </div>
        <div>
          {" "}
          <label htmlFor="strength">
            Resistencia (0-10):
            <input type="number" id="strength" name="strength" placeholder={currentRobot.strength ? currentRobot.strength : ""} min="0" max="10" maxLength="2" onChange={(ev) => handleChange(ev)} required></input>
          </label>
        </div>
        <div>
          <label htmlFor="speed">
            Velocidad (0-5):
            <input type="number" id="speed" name="speed" placeholder={currentRobot.speed ? currentRobot.speed : ""} min="0" max="5" maxLength="1" onChange={(ev) => handleChange(ev)} required></input>
          </label>
        </div>
        <div>
          {" "}
          <label htmlFor="creationdate">
            Fecha de creación:
            <input type="number" id="creationdate" name="creationdate" placeholder={currentRobot.creationdate ? currentRobot.creationdate : ""} min="1939" max="2022" maxLength="4" onChange={(ev) => handleChange(ev)} required></input>
          </label>
        </div>
        <div>
          <button type="submit" onClick={(ev) => handleClick(ev)}>
            Confirmar datos
          </button>
        </div>
      </form>
      <Link to="/robots">
        <button>Volver al listado</button>
      </Link>
    </>
  );
}
