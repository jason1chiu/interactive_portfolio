const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary').v2;
const { Project } = require("../models");

const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

const getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.json(project);
};

const addProject = async (req, res) => {
  const newProject = new Project(req.body);
  const savedProject = await newProject.save();
  res.json(savedProject);
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updatedProject);
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const deletedProject = await Project.findByIdAndDelete(id);
  res.json(deletedProject);
};

module.exports = { getProjects, getProject, addProject, updateProject, deleteProject };