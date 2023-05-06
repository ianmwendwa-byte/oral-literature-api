const express=require('express');
const router =express.Router(); 
const {getAllSongs,getSong,createSong,updateSong,deleteSong}=require('../controllers/songs')
 router.route('/').get(getAllSongs).post(createSong);
 router.route('/:id').get(getSong).patch(updateSong).delete(deleteSong)
 module.exports=router 