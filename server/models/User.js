const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: Schema.Types.ObjectId,
      ref: 'About',
    },
    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
      },
    ],
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    contact: {
      type: String,
    },
  },
  // set this to use virtual below
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
