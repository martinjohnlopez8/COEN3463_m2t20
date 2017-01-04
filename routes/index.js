var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'MNM',
  	headerData: {
  		"heroImageURL":"/images/index/hero-image-1.jpg",
  		"headerTitle":"Welcome to MNM",
  		"headerSubtitle":"We Cater You"
  	} 
  });
});

module.exports = router;