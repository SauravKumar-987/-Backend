const express = require('express')  // toolbox

const morgan = require('morgan')

const app = express(); // open toolbox 

app.use(morgan('dev')) // tells when req occur and how much time taken to response
//^this is third party middleware

app.set("view engine" , 'ejs') // install ejs seprately like express
                              // we can use it without acquiring like express
                              // we have to create a view folder with .ejs ext html

app.use((req, res, next) =>{ // midleware run on evrey route
    console.log("This is middleware"); // types-> builtin, cusom, third party

    const a =5;                       // this is a custom middleware 
    const b =6;
    console.log(a+b);
    
    return next()
})
app.get('/', (req, res, next) =>{
    const a =10;                       // this is a custom middleware 
    const b =7;
    console.log(a+b);
next()
}, (req, res) => {
    res.render('index')
})

app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/profile', (req, res)=>{
    res.send("this is profile")
})

app.listen(3000)