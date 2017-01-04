var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about',{
  	title: 'About MNM',
  	headerData: {
	"heroImageURL":"/images/hero-image-1.jpg",
	"headerTitle":"Welcome to MNM",
	"headerSubtitle":"We Cater You"
  	} 
  });
});

module.exports = router;