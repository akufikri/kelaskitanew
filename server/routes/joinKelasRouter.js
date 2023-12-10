const express = require('express');
const joinKelasController = require('../controller/join_kelas_controller');

const router = express.Router();

router.get('/', joinKelasController.getJoinKelas);
router.post('/join', joinKelasController.joinKelas);
module.exports = router