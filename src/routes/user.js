const { Router } = require('express');
const router = Router();
const userController = require('../controller/userController')

router.post('/register',  userController.createUser )
router.get('/login',  userController.login )
router.get('/users',  userController.getAllUsers )
router.post('/profile',  userController.createProfile )
router.delete('/delete',  userController.deleteUserProfile )
router.put('/update',  userController.putProfile )


module.exports = router ;