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
        <>
          <header>
            <h1> ROBOTS LIST </h1>
          </header>
          <div>
            <ul>
              {robotState.map((item, index) => (
                <>
                  <Link to={{ pathname: `/robots/${item._id}` }}>
                    <>
                      <figure key={item.id}>
                        <img src={item.image} alt="none" />
                        <figcaption>{item.Name}</figcaption>
                      </figure>
                    </>
                  </Link>
                  <button key={item.name} value={item._id} onClick={(ev) => handleDelete(ev.target.value)}>
                    delete
                  </button>
                </>
              ))}
            </ul>
            <Link to="/robotform">
              <button>Añadir</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
