const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url == "/about"){
        res.end("This is about page")
    }

    if(req.url == "/profile"){
        res.end("This is profile page")
    }
    else{
        res.end("Hello backened")
    }
    
    
})

server.listen(3000)