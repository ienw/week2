'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');


const someFunction = (req, res, next) => {
    alert(hello);
    next();
}

//http request and response to the page
router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', (req, res) => {
  res.send('With this endpoint you can add users.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;
