const { User } = require("../models");

const UserController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  // get one user by id
  getUserbyID({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "__v",
      })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  // create new user
  createNewUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  //update user by id
  updateUserById({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found by this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = UserController;
