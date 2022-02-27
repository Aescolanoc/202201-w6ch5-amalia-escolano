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
      <p>Aqui se verá el detalle del robot {robotDetails.name}</p>
      <Link to={{ pathname: `/robots/update/${robotDetails._id}` }}>
        <button>Modificar Robot</button>
      </Link>
      <Link to="/robots">
        <button>Volver al listado</button>
      </Link>
    </>
  );
}
