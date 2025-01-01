import dotenv from 'dotenv' ;
dotenv.config() ;

import express from 'express' ;
const app = express() ;

const port = process.env.PORT || 8000 ;

app.get('/' , (req , res) => {
    res.send("<h1>MERN Chat App</h1>")
})

app.get('/hemlo' , (req , res) => {
    res.send("<h1>Testing The Express Knowledge</h1>")
})

app.listen(port , () => {
    console.log(`Server is listening on the Port : ${port}`) ;
}) ;
