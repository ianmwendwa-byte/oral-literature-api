const connectDb=require('./db/connect');
const express =require('express');
const narrative = require('./routes/narrative');
const notFound =require('./middleware/notFound');
const twister =require('./routes/twister')
const riddles =require('./routes/riddles')
const poetry =require('./routes/poetry')
const songs =require('./routes/songs')
const proverbs =require('./routes/proverbs')
const Search =require('./routes/Search')

const app=express();
require('dotenv').config()
// middleware
app.use(express.static('./public'))
app.use(express.json())

// Allow cross-origin requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


// Routes
app.use('/api/v1/narratives', narrative);
app.use('/api/v1/twister', twister);
app.use('/api/v1/riddles', riddles);
app.use('/api/v1/poetry', poetry);
app.use('/api/v1/songs', songs);
app.use('/api/v1/proverbs', proverbs);
app.use('/api/v1/Search', Search);
app.use(notFound)




const PORT =process.env.PORT|| 5000;
const start =async ()=> {  
    try{
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT,(req ,res)=>{
            console.log(`server running on the port: ${PORT}....`);
            console.log('database connected succefully ....');
            })
    }
    catch(error){
    console.log(error)     
    } 
} 
start()