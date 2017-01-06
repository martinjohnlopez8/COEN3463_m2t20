var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	servicesData.find()
		.then(function(servicesData) {
			res.render('index', {
				title: 'Empire Catering',
				headerData:
					{
						"heroImageURL":"/images/aboutus3.jpg",
						"headerTitle":"Welcome to Empire",
						"headerSubtitle":"You deserve the best"
					},
				servicesData: servicesData
			});
		});
});

module.exports = router;