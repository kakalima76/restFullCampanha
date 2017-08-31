var express = require('express');
var router = express.Router();
var controller = require('../controllers/locais');



/* GET home page. */

router.get('/locais', controller.listar);
router.post('/locais/buscar', controller.buscar);


module.exports = router;
