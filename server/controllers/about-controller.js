const { About } = require('../models');

const getAbout = async (req, res) => {
    const about = await About.find();
    res.json(about);
};

const addAbout = async (req, res) => {
    const newAbout = new About(req.body);
    const savedAbout = await newAbout.save();
    res.json(savedAbout);
};

const updateAbout = async (req, res) => {
    const updatedAbout = await About.findByIdAndUpdate(req.body.id, req.body);
    res.json(updatedAbout);
};

const deleteAbout = async (req, res) => {
    const deletedAbout = await About.findByIdAndDelete(req.body.id);
    res.json(deletedAbout);
};

module.exports = { getAbout, addAbout, updateAbout, deleteAbout };
