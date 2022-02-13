const Role = require('../model/schemas/role');
const User = require('../model/schemas/user')

const authController = {

  login: async (req, res) => {
    console.log(req.body);
    res.send('HELLOOOOOOO>>>');
  },
  getLoginPage: async (req, res) => {
    res.render('login');
  },
};

module.exports = authController;