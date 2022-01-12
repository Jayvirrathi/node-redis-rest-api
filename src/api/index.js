const express = require('express');

const songRouter = require('./song-router')
const songsRouter = require('./songs-router')
const indexesRouter = require('./indexes')

const router = express.Router();

router.use('/create', indexesRouter)
router.use('/song', songRouter)
router.use('/songs', songsRouter)

module.exports = router;
