const express=require('express');
const router =express.Router(); 
const {  getAllTwisters,createTwister,getTwister,updateTwister,deleteTwister}=require('../controllers/twister')
 router.route('/').get(getAllTwisters).post(createTwister);
 router.route('/:id').get(getTwister).patch(updateTwister).delete(deleteTwister)
 module.exports=router 