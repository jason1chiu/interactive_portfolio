// import project model
const { Project } = require('../models');

module.exports = {
  // get all projects
  async getProjects(req, res) {
    const projects = await Project.find({});
    res.json(projects);
  },
  // get a single project by id
  async getSingleProject({ params }, res) {
    const project = await Project.findById(params.id);
    if (!project) {
      return res.status(400).json({ message: 'Cannot find a project with this id!' });
    }
    res.json(project);
  },
  // create a new project
  async createProject({ body }, res) {
    const project = await Project.create(body);
    if (!project) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    res.json(project);
  },
  // update a project
  async updateProject({ params, body }, res) {
    const project = await Project.findByIdAndUpdate(params.id, body, { new: true });
    if (!project) {
      return res.status(400).json({ message: 'Cannot find a project with this id!' });
    }
    res.json(project);
  },
  // delete a project
  async deleteProject({ params }, res) {
    const project = await Project.findByIdAndDelete(params.id);
    if (!project) {
      return res.status(400).json({ message: 'Cannot find a project with this id!' });
    }
    res.json(project);
  },
};
