const express = require('express');
const kelasController = require('../controller/kelas_contoller');

const router = express.Router();

router.post("/create", kelasController.createKelas);
router.get('/', kelasController.getKelas);
router.delete('/delete/:id', kelasController.deleteKelas)
router.get('/show/:id', kelasController.showKelas)
router.put('/update/:id', kelasController.updateKelas)

module.exports = router;
