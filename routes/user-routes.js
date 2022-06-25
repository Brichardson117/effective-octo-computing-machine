const router = require('express').Router()
const {
    getAllUsers,
    getUserbyID, 
    createNewUser,
    updateUserById,
    deleteUser
} = require('../controller/user-contoller');


router
.route('/')
.get(getAllUsers)
.post(createNewUser);


router
.route('/:id')
.get(getUserbyID)
.put(updateUserById)
.delete(deleteUser);

module.exports = router;