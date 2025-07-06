const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: [String],
    required: true
  },
  director: {
    type: String,
    required: true
  },
  cast: {
    type: [String],
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  averageRating: {
    type: Number,
    default: 0
  },
  coverPhoto: {
    type: String,
    required: true
  },
  trivia: {
    type: [String]
  },
  goofs: {
    type: [String]
  },
  soundtrack: {
    type: [String]
  },
  ageRating: {
    type: String,
    required: true
  },
  parentalGuidance: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema);