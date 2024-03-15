const expres = require('express');
const router = expres.Router();

const TaskConstroller = require('../controllers/task');

router.use('/', TaskConstroller);

module.exports = router;