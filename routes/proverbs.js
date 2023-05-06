const express=require('express');
const router =express.Router(); 
const {getAllProverbs,createProverb,getProverb,updateProverb,deleteProverb}=require('../controllers/proverbs')
 router.route('/').get(getAllProverbs).post(createProverb);
 router.route('/:id').get(getProverb).patch(updateProverb).delete(deleteProverb)
 module.exports=router 