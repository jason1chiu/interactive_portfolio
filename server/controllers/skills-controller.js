// import skill model
const { Skill } = require('../models');

module.exports = {
  // get all skills
  async getSkills(req, res) {
    const skills = await Skill.find({});
    res.json(skills);
  },
  // get a single skill by id
  async getSingleSkill({ params }, res) {
    const skill = await Skill.findById(params.id);
    if (!skill) {
      return res.status(400).json({ message: 'Cannot find a skill with this id!' });
    }
    res.json(skill);
  },
  // create a new skill
  async addSkill({ body }, res) {
    const skill = await Skill.create(body);
    if (!skill) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    res.json(skill);
  },
  // update a skill
  async updateSkill({ params, body }, res) {
    const skill = await Skill.findByIdAndUpdate(params.id, body, { new: true });
    if (!skill) {
      return res.status(400).json({ message: 'Cannot find a skill with this id!' });
    }
    res.json(skill);
  },
  // delete a skill
  async deleteSkill({ params }, res) {
    const skill = await Skill.findByIdAndDelete(params.id);
    if (!skill) {
      return res.status(400).json({ message: 'Cannot find a skill with this id!' });
    }
    res.json(skill);
  },
};