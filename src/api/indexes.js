const express = require('express');
const router = express.Router();
const repository = require('./song-repository')

router.post('/song', async (req, res) => {  
    try {
      await repository.dropIndex()
      await repository.createIndex()
     res.json({success: 'OK'})

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})

module.exports = router;
