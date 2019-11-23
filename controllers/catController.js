'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;


const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) => {
    const id = req.params.id
    const match = cats.find(cat => cat.id === id)
    if (match) {
        res.json(match)
    }
    res.json({ error: "not found" })
}


module.exports = {
  cat_list_get,
  cat_get
};