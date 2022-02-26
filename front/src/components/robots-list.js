import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../reducer/robots/action-creator";
import { getAll, getAllRobots } from "../services/api";
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
  }, []);

  useEffect(() => {
    console.log(robotState);
  }, [robotState]);

  return (
    <div>
      {robotState.length ? (
        <>
          <header>
            <h1> ROBOTS LIST </h1>
          </header>
          <div>
            <ul>
              {robotState[0].robots.map((item, index) => (
                <>
                  <figure key={item.id}>
                    <img src={item.image} alt="none" />
                    <figcaption>{item.Name}</figcaption>
                  </figure>

                  <button
                    key={item.name}
                    onClick={() => {
                      dispatch(actions.removeRobot(item.id));
                    }}
                  >
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
