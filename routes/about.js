var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('about',{
  	title: 'About MNM',
  	headerData: {
		"heroImageURL":"/images/aboutus2.jpg",
		"headerTitle":"History of Empire",
		"headerSubtitle":"“The secret of success in life is to eat what you like and let the food fight it out inside.”"
  	} 
  });
});

module.exports = router;
