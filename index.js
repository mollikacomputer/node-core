/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author: Ranjit Kumar Mandal
 * Date: 06/27/2020
 * 
 */

// dependencies

const http = require('http');
// app object = module scaffolding
// url
const url = require('url');
const { StringDecoder } = require('node:string_decoder'); 
const app = {};

// configuration
app.config={
    port: 3000,
};

// create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Listening to port ${app.config.port}`);
    });
}
// handle Request Response
app.handleReqRes = (req, res) =>{
    // request handle
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, ' ')
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject =req.headers;
    
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer)=>{
        realData += decoder.write(buffer); 
    })

    req.on('end', ()=>{
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello World');
    })

}

// start the server

app.createServer();