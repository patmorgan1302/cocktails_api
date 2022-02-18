var express = require('express');
var router = express.Router();
const Cocktail = require('../models/cocktails.js');


router.get('/:id', function(req, res, next) {
    Cocktail.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})});

router.get('/', function(req, res, next) {
    Cocktail.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})});

router.post('/', function (req, res, next) {
    Cocktail.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data);
})});

router.put('/:id', (req, res, next) => {
    // console.log("req.body", req.body);
    console.log("req.param.id", req.params.id);
    Cocktail.updateOne({_id: req.params.id}, { $set: req.body }, function(err, data){
        if (err){
            console.log("err", err)
            return res.json({err:424, message: 'Error'})
        }
        // console.log("data", data)
    res.json(data)
})});

router.delete('/:id', (req, res, next) => 
    Cocktail.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return res.json({err:414, message: 'Error'})
        }
    res.json(data)
}));


module.exports = router;