// import { useEffect, useState, useSelector, useDispatch } from "react";
// import * as actions from "../reducer/robots/action-creator";

// export default function RobotForm() {
//   const [newRobot, setRobot] = useState({
//     name: "",
//     image: "",
//     speed: "",
//     strength: "",
//     creationdate: "",
//   });

//   const robotState = useSelector((state) => {
//     return state.robots;
//   });
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setRobot().then((resp) => {
//       dispatch(actions.addRobot(newRobot));
//     });
//   }, []);

//   function handleClick() {
//     updateUserState(userDataLocal);
//     updateStepForm(2);
//   }

//   return (
//     <form id="personal-data">
//       <p>Datos de contacto</p>
//       <label htmlFor="name">
//         Nombre:
//         <input type="text" id="name" value={userDataLocal.name} onChange={(e) => setUserData({ ...userDataLocal, name: e.target.value })} name="rname" />
//       </label>
//       <label htmlFor="lastname">
//         Apellido:
//         <input type="text" id="lastname" value={userDataLocal.lastname} onChange={(e) => setUserData({ ...userDataLocal, lastname: e.target.value })} />
//       </label>
//       <label htmlFor="birthdate">
//         Fecha de nacimiento:
//         <input type="date" id="birthdate" value={userDataLocal.birthdate} onChange={(e) => setUserData({ ...userDataLocal, birthdate: e.target.value })} />
//       </label>
//       <label htmlFor="sex">
//         <input type="radio" name="sex" value="male" onChange={(e) => setUserData({ ...userDataLocal, gender: e.target.value })} />
//         Hombre
//       </label>
//       <label htmlFor="sex">
//         <input type="radio" name="sex" value="female" onChange={(e) => setUserData({ ...userDataLocal, gender: e.target.value })} />
//         Mujer
//       </label>
//       <label htmlFor="email">
//         Email:
//         <input type="email" id="email" value={userDataLocal.email} onChange={(e) => setUserData({ ...userDataLocal, email: e.target.value })} />
//       </label>
//       <label htmlFor="info">
//         <input type="checkbox" id="info" value={userDataLocal.info} onChange={(e) => setUserData({ ...userDataLocal, info: e.target.checked })} />
//         Quiero recibir información.
//       </label>
//       <button type="button" onClick={handleClick}>
//         Siguiente
//       </button>
//     </form>
//   );
// }
