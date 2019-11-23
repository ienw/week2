'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const removePassword = user => {
    // Copy object and delete password
    const userCopy = { ...user }
    delete userCopy.password
    return userCopy
}

const user_list_get = (req, res) => {
    const usersWihtoutPassword = users.map(removePassword)
    res.json(usersWihtoutPassword);
};

const user_get = (req, res) => {
    const id = req.params.id
    const match = users.find(user => user.id === id)
    if (match) { 
        const userWihtoutPassword = removePassword(match)
        res.json(userWihtoutPassword)
    }
    res.json({ error: "not found" })
}



module.exports = {
  user_list_get,
  user_get
};