const { Router } = require('express');
const router = Router();


router.use('/user', require('./user'));
router.use('/loans', require('./loan'));
router.use('/mangas', require('./manga'));

module.exports = router ;