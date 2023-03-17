const express = require('express');
const { controllerUserLogin } = require('../controllers/index');
const { displayNameValidator,
  passwordValidator,
  emailValidator,
} = require('../middlewares/newUserValidation');

const router = express.Router();

router.post('/',
displayNameValidator,
passwordValidator,
emailValidator,
controllerUserLogin.controllerAddUser);

module.exports = router;