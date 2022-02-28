import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../reducer/robots/action-creator";
import { getAllRobots, removeRobot } from "../services/api";
import { Link } from "react-router-dom";

export function RobotsList() {
  const robotState = useSelector((state) => {
    return state.robots;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getAllRobots().then((resp) => {
      dispatch(actions.loadRobot(resp.data));
    });
  }, [dispatch]);

  function handleDelete(id) {
    removeRobot(id).then((resp) => {
      dispatch(actions.removeRobot(resp.data));
    });
  }

  return (
    <div>
      {robotState.length ? (
        <div>
          <header>
            <h1> ROBOTS LIST </h1>
          </header>
          <Link to="/robotform">
            <button>Añadir nuevo robot</button>
          </Link>
          {robotState.map((item, index) => (
            <div key={item._id}>
              <Link to={{ pathname: `/robots/${item._id}` }}>
                <>
                  <figure>
                    <img src={item.image} alt={item.name} />
                    <figcaption>{item.name}</figcaption>
                  </figure>
                </>
              </Link>
              <button value={item._id} onClick={(ev) => handleDelete(ev.target.value)}>
                delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
