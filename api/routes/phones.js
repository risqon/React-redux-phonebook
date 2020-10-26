var express = require('express');
var router = express.Router();
const Phone = require('../models/Phone')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Phone.find().then((data) => {
    res.json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.get('/:name/:phone', function (req, res, next) {
  // Chat.find({}).sort({ 'id': -1 }).then((data) => {    // sort yg terbaru diatas
  Phone.find({ $or: [{ name: req.params.name }, { phone: req.params.phone }] }).then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.post('/', function (req, res, next) {
  const { id, name, phone } = req.body
  Phone.create({ id, name, phone }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  Phone.findOneAndRemove({ id }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.put('/:id', function (req, res, next) {
  const { name, phone } = req.body
  const { id } = req.params
  Phone.findOneAndUpdate({ id }, { name, phone }, { new: true }).then((data) => {
    res.status(201).json(data)
  }).catch(() => {
    res.status(500).json(err)
  })
});


router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  Phone.findOneAndRemove({ id }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});


module.exports = router;
