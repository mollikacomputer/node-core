/***
 * Title: Uptime Monitoring App
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Description: A RESTFUL API to monitor up or down time of user defined links
 * Author: Ranjit Kumar Mandal
 * Date: 27/06/2023
 */
//dependencies

// const http = require('http');

// // app object = module scaffolding
// const app = {};

// // app config
// app.config={
//     port:4000,
// }
// // create server
// app.createServer = () =>{
//     const server = http.createServer(app.handleReqRes)
//   server.listen(app.config.port, ()=>{
//         console.log(`Listening to port ${app.config.port}`);
//     })
// }


// app.handleReqRes=(req, res)=>{
//     res.end("Hello World2")
// }
// app.createServer();

// dependencies
const http = require('http');
// app config
const app = {}

// app config
app.config={
    port:4000,
}
// create a server

// create handleReqRes
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`Listening to port ${app.config.port}`);
    })
}

app.handleReqRes = (req, res) =>{
 res.end('Handle Req and Response action');
}

app.createServer();