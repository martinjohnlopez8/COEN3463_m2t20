var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	servicesData.find()
		.then(function(servicesData) {
			res.render('services', {
				title: 'Services Offered',
				headerData:
					{
						"heroImageURL":"/images/aboutus1.jpg",
						"headerTitle":"Culinary Specialties",
						"headerSubtitle":"“There is no sincerer love than the love of food.”"
					},
				servicesData: servicesData
			});
		});
});

router.get('/:serviceID', function(req, res){
    var serviceID = req.params.serviceID;

    if (serviceID >= 1 && serviceID <= 6) {
        servicesData.find()
            .then(function(servicesData) {
                var serviceData = servicesData[serviceID - 1];
                var name =  serviceData.name;
                var image = serviceData.image;
                var quote = serviceData.quote;
                var description = serviceData.description;
                var priceRange = serviceData.priceRange;

                res.render('services-complete', {
                    title: name,
                    name: name,
                    image: image,
                    quote: quote,
                    description: description,
                    priceRange: priceRange
                });
            });
    }
    else {
        res.render('page-error',{
            title: '404 | Page not found'
        });
    }
});

module.exports = router;