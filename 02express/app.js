const express = require('express')  // toolbox

const app = express(); // open toolbox 

app.set("view engine" , 'ejs') // install ejs seprately like express
                              // we can use it without acquiring like express
                              // we have to create a view folder with .ejs ext html

app.use((req, res, next) =>{ // midleware run on evrey route
    console.log("This is middleware"); // types-> builtin, cusom, thied party

    const a =5;
    const b =6;
    console.log(a+b);
    
    return next()
})
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req,res)=>{
    res.send('This is about page')
})

app.get('/profile', (req, res)=>{
    res.send("this is profile")
})

app.listen(3000)