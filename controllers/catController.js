'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;
const getCats = catModel.getAllCats;
const getCat = catModel.getCat

const cat_list_get = async (req, res) => {
    const cats = await getCats();
    res.json(cats);
};

const cat_get = async (req, res) => {
    const cat = await getCat(req.params.id)
    return res.json(cat)

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
