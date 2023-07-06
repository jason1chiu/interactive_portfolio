// import contact message model
const { ContactMessage } = require('../models');

module.exports = {
  // get all contact messages```javascript
  async getContactMessages(req, res) {
    const contactMessages = await ContactMessage.find({});
    res.json(contactMessages);
  },
  // get a single contact message by id
  async getSingleContactMessage({ params }, res) {
    const contactMessage = await ContactMessage.findById(params.id);
    if (!contactMessage) {
      return res.status(400).json({ message: 'Cannot find a contact message with this id!' });
    }
    res.json(contactMessage);
  },
  // create a new contact message
  async createContactMessage({ body }, res) {
    const contactMessage = await ContactMessage.create(body);
    if (!contactMessage) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    res.json(contactMessage);
  },
  // delete a contact message
  async deleteContactMessage({ params }, res) {
    const contactMessage = await ContactMessage.findByIdAndDelete(params.id);
    if (!contactMessage) {
      return res.status(400).json({ message: 'Cannot find a contact message with this id!' });
    }
    res.json(contactMessage);
  },
};