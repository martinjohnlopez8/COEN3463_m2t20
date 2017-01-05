var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact',{
  	title: 'Contact Us',
  	headerData: {
		"heroImageURL":"/images/aboutus4.jpg",
		"headerTitle":"Welcome to Empire",
		"headerSubtitle":"You deserve the best"
  	} 
  });
});

router.post('/', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth : {
			user : 'mnmtestmail@gmail.com',
			pass : 'mnmtestmail123'
		}
	});

	var mailOptions = {
		from : req.body.name +' <'+req.body.email+'>',
		to : 'mnmtestmail@gmail.com',
		subject : 'Inquiry',
		text : 'Received new enquiry with the following details. Name: ' +req.body.name+ ' Email: ' +req.body.email+ ' Message: ' +req.body.message,
		html : '<p>Received new enquiry with the following details. </p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if(error){
			console.log(error);
			res.redirect('/contact');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/contact');
		}
	});
});

module.exports = router;