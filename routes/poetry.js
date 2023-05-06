const express=require('express');
const router =express.Router(); 
const {getAllPoetry,createPoetry,getPoetry,updatePoetry,deletePoetry}=require('../controllers/poetry')
 router.route('/').get(getAllPoetry).post(createPoetry);
 router.route('/:id').get(getPoetry).patch(updatePoetry).delete(deletePoetry)
 module.exports=router 