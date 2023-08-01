const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\.+.+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    information: {
      type: Schema.Types.ObjectId,
      ref: 'Information',
    },
    education: [{
      type: Schema.Types.ObjectId,
      ref: 'Education',
    }],
    interests: {
      type: Schema.Types.ObjectId,
      ref: 'Interests',
    },
    background: [{
      type: Schema.Types.ObjectId,
      ref: 'Background',
    }],
    skills: [{
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    }],
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project',
    }],
    contact: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
