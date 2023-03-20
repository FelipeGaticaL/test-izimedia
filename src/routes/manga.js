const { Router } = require('express');
const router = Router();
const mangaController = require('../controller/mangaController')


router.get('/get-mangas',  mangaController.getAllMangas )


module.exports = router ;