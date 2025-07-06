const express = require('express');
const router = express.Router();
const { addMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Movie = require('../models/Movie');

// @route   POST api/movies
// @desc    Add a new movie
// @access  Private/Admin
router.post('/', auth, admin, addMovie);

// @route   PUT api/movies/:id
// @desc    Update a movie
// @access  Private/Admin
router.put('/:id', auth, admin, updateMovie);

// @route   DELETE api/movies/:id
// @desc    Delete a movie
// @access  Private/Admin
router.delete('/:id', auth, admin, deleteMovie);

// GET /api/movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;