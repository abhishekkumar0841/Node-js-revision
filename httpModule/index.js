const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<h1>Hello server</h1>')
    }else if(req.url === '/about'){
        res.write('<h1>About page server</h1>')
    }
    res.end()
})

server.listen(5000)

console.log('server is up and running on 5000 port');