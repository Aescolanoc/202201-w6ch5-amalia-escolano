export async function getAllRobots(Robot) {
    return await Robot.find({});
}

export async function getRobot(id, Robot) {
    return await Robot.findById(id);
}

export async function insertRobot(robot, Robot) {
    const newRobot = new Robot(robot); // para que sea testeable se puede cambiar new Robot por Robot.create
    return await newRobot.save();
}

export async function updateRobot(id, partialRobot, Robot) {
    return await Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}

export async function deleteRobot(id, Robot) {
    return await Robot.findByIdAndDelete(id);
}

// export async function insertUser(user, User) {
//     const newUser = new User(user);
//     return await newUser.save();
// }
