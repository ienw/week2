'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//http request and response to the page
router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', (req, res) => {
  console.log(req.body);  
  res.send('With this endpoint you can add users.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users.');
});

module.exports = router;
