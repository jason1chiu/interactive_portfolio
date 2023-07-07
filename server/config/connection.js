const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/your-database-name',
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.set('debug', true);

module.exports = mongoose.connection;