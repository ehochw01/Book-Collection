const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { Middleware } = require('../../utils/routesAuth');

// put Middleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(Middleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(Middleware, getSingleUser);

router.route('/books/:bookId').delete(Middleware, deleteBook);

module.exports = router;
