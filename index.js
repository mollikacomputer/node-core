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
    res.end('Hello World');
}

// start the server

app.createServer();