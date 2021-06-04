const router = require('express').Router();
const {
  createUser,
  getMyUser,
  updateUser,
} = require('../controllers/users');
const { validateUpdateUserInfo } = require('../middlewares/validation');

router.get('/me', getMyUser);
router.patch('/me', validateUpdateUserInfo, updateUser);

module.exports = router;