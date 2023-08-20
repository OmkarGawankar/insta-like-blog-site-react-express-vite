const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the User schema
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4(),
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

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;