const express=require('express');
 const router =express.Router(); 
const {getAllNarratives, createNarrative, getNarrative,updateNarrative,deleteNarrative}= require('../controllers/narrative')

 router.route('/').get(getAllNarratives).post(createNarrative);
 router.route('/:id').get(getNarrative).patch(updateNarrative).delete(deleteNarrative)
 module.exports=router 