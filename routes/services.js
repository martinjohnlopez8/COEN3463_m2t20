var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('services',{
  	title: 'Services Offered',
  	headerData: {
		"heroImageURL":"/images/aboutus5.jpg",
		"headerTitle":"Welcome to Empire",
		"headerSubtitle":"You deserve the best"
  	} 
  });
});

module.exports = router;