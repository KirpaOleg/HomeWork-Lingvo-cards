const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { createUser } = require('../model/users');
const authController = require('../controller/auth');


router.get('/', async (req, res) => {
  const user = await createUser();
  res.send('user is ok');
});

router.get('/login', authController.getloginPage);

router.post('/login', upload.none(), authController.login);

module.exports = router;
