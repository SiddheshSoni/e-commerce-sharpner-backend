
const getAllUsers = (req, res)=>{
    res.send("Fetched all users!")
}
const getUserById = (req, res)=>{
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
};
const addUser = (req, res)=>{
    res.send(`Added a new user!`)
}

module.exports = {
    getAllUsers, 
    addUser,
    getUserById,
}