var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'MNM Caterers',
  	slidersInfo: [
	  		{
			"backgroundImage":"",
			"header":"Lorem Ipsum et Dolor",
			"link":"",
			"linkMessage":""
	  		},
	  		{
			"backgroundImage":"",
			"header":"Lorem Ipsum et Dolor",
			"link":"",
			"linkMessage":""
	  		},
	  		{
			"backgroundImage":"",
			"header":"Lorem Ipsum et Dolor",
			"link":"",
			"linkMessage":""
	  		}
		],
  	 });
});

module.exports = router;