var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about',{
  	title: 'About MNM',
  	headerData: {
		"heroImageURL":"/images/aboutus2.jpg",
		"headerTitle":"Welcome to Empire",
		"headerSubtitle":"You deserve the best"
  	} 
  });
});

module.exports = router;