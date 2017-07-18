// RequestController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Request = require('./Request');

// CREATES A NEW USER
router.post('/', function (req, res) {
    Request.create({
            userID: req.body.userID,
            requestTitle: req.body.requestTitle,
            requestPrice: req.body.requestPrice,
            requestID: req.body.requestID,
            fulfilled: req.body.fulfilled,
            fulfillerID: req.body.fulfillerID,
            requestTags: req.body.reqestTags,
            pickUp: req.body.pickUp,
            distance: req.body.distance,
            xCoordinate: req.body.xCoordinate,
            yCoordinate: req.body.yCoordinate
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
module.exports = router;
