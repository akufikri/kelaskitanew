const express = require('express');
const userController = require('../controller/user_controller');

const router = express.Router();

router.get('/', userController.getUsers)
router.post('/create', userController.createUsers)
router.delete('/delete/:id', userController.deleteUser)
router.get('/show/:id', userController.showUser)
router.put('/update/:id', userController.updateUser)

module.exports = router;