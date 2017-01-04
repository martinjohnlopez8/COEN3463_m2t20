var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('services',{
  	title: 'Services Offered',
  	headerData: {
		"heroImageURL":"/images/hero-1.jpg",
		"headerTitle":"Welcome to MNM",
		"headerSubtitle":"We Cater You"
  	} 
  });
});

module.exports = router;