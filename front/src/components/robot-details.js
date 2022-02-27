import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDetails } from "../services/api";

export function RobotDetails(robot) {
  const pathname = window.location.pathname;
  const detailsURL = `http://localhost:8000${pathname}`;

  const [robotDetails, setRobotDetails] = useState({});

  useEffect(() => {
    getDetails(detailsURL).then((resp) => {
      setRobotDetails(resp.data);
    });
  }, []);

  return (
    <>
      <h3>Detalles de {robotDetails.name}</h3>
      <div>
        <figure key={robotDetails.id}>
          <img src={robotDetails.image} alt="none" />
          <figcaption>{robotDetails.Name}</figcaption>
        </figure>
      </div>
      <div>Velocidad: {robotDetails.speed}</div>
      <div>Resistencia: {robotDetails.strength}</div>
      <div>Fecha de creación: {robotDetails.creationdate}</div>
      <div>
        <Link to={{ pathname: `/robots/update/${robotDetails._id}` }}>
          <button>Modificar Robot</button>
        </Link>
        <Link to="/robots">
          <button>Volver al listado</button>
        </Link>
      </div>
    </>
  );
}
