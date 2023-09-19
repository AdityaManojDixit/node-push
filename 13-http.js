const http = require('http')

//Creating a server
// 1. (req,res)=>{} is a callback function
// 2. req and res are objects
// 3. req:(requests): Info regarding method
// 4. res:(response): What we are sending back 

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you're looking for</p>
    <a href="/"> Back to Home Page </a>
    `)
})

//Setting up listening port for server
server.listen(5000)

//Package, Dependencies & Module are same
