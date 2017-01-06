var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'MNM',
  	headerData: {
  		"heroImageURL":"/images/aboutus3.jpg",
  		"headerTitle":"Welcome to Empire",
  		"headerSubtitle":"You deserve the best"
  	} 
  });
});

module.exports = router;