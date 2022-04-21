var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index );
router.get('/overview',index.overview);
router.get('/campus',index.campus);
router.get('/dome',index.dome);
router.get('/grotto',index.grotto);
router.get('/stadium',index.stadium);
router.get('/hesburgh',index.hesburgh);
router.get('/quiz',index.quiz);

module.exports = router;
