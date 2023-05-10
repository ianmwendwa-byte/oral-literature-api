const express=require('express');
const router =express.Router(); 
const Search =require('../controllers/Search')
 router.route('/:key').get(Search)
 module.exports=router 