const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');


// Define the User schema
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true, // Enables automatic timestamp fields (createdAt and updatedAt)
  strict: false // Allows passing fields not defined in the schema
});

// Compare password to hashed password stored in the database
userSchema.methods.comparePassword = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };