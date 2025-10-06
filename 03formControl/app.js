const express = require('express')
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'))

// built-in middleware
// use to read data from get method
app.use(express.json())  
app.use(express.urlencoded({extended: true}))

app.set("view engine", 'ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.end('This is about')
})
// app.get('/get-form-data',(req,res)=>{  // 
//     console.log(req.query);
//     res.send('data received')  
// })
// data will be visible on url not safe method

app.post('/get-form-data',(req,res)=>{  
    console.log(req.body);
    res.send('data received')
    
})
app.listen(3000)