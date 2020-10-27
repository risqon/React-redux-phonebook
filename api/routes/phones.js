const e = require('express');
var express = require('express');
const { connection } = require('mongoose');
// const { default: phones } = require('../../coba-redux/src/reducers/phones');
var router = express.Router();
const Phone = require('../models/Phone')

/* GET users listing. */

router.get('/', function (req, res, next) {

  let url = req.url == '/' ? '/?page=1' : req.url;
  let page = req.query.page || 1
  let limit = 3
  let offset = (page - 1) * limit

  Phone.countDocuments({}, (err, pages) => {
    pages = Math.ceil(pages / limit)

    Phone.find({}).sort({ 'id': -1 }).limit(limit).skip(offset).then(data => {
      console.log('api', data)
      data.push({ pages, page })
      res.json(data)
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
})


// router.get('/', function (req, res, next) {
//   let page = req.query.page || 1
//   let limit = 3
//   let offset = (page - 1) * limit

//   Phone.countDocuments({}).then(total => {
//     let pages = Math.ceil(total / limit)

//     Phone.find({}).sort({ 'id': -1 }).limit(limit).skip(offset).then(result => {
//       res.status(200).render( {
//         result,
//         page,
//         pages
//       }).catch(err =>{
//         res.status(500).json({
//           error: true,
//           message: err
//         })
//       })
//     })
//   })

// })






router.get('/:name/:phone', function (req, res, next) {
  // Chat.find({}).sort({ 'id': -1 }).then((data) => {    // sort yg terbaru diatas
  let url = req.url == '/' ? '/?page=1' : req.url;
  let page = req.query.page || 1
  let limit = 3
  let offset = (page - 1) * limit

  Phone.countDocuments({ $or: [{ name: req.params.name }, { phone: req.params.phone }] }, (err, pages) => {
    pages = Math.ceil(pages / limit)

    Phone.find({ $or: [{ name: req.params.name }, { phone: req.params.phone }] }).then((data) => {
      console.log(data)
      data.push({ pages, page })
      res.status(200).json(data)
    }).catch((err) => {
      res.status(500).json(err)
    })
  })
});



router.post('/', function (req, res, next) {
  const { id, name, phone } = req.body
  Phone.create({ id, name, phone }).then((data) => {
    console.log(data)
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
