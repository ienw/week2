'use strict';
// catRoute
const multer = require('multer');
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

const upload = multer({ dest: 'uploads/' });

//http request and response to the page
router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), (req, res) => {
  console.log(req.file)
  res.send('With this endpoint you can add users.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;
