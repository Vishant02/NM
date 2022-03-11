const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Welcome to the 1st page')
    res.end()
})


server.listen(5000)