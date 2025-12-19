const router = require('express').Router();
const userController = require('../controllers/userController');

// get all users
router.get('/', userController.getAllUsers);
// get user by id
router.get('/:id', userController.getUserById);
// update user
router.put('/:id', userController.updateUser);
// delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;