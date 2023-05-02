console.log('NodeMon is installed'); // nodemon auto refreshes any script for developer dependencies
//npm rum "script_name" if script name is "start" than a shortcut npm start works
//why do we use node??
//Ans=Backend can be of any language irrespective of front end language code. Node is event driven and non blocking IO.
//data intensive(where we send a lot of data example: twitter, facebook) and 
//computational intensive(Chat GPT returns and answer AI generated)
//node uses a similar event loop archictecture that can handle moreadn more data with mircotask queue
//non blocking IO-- async operations using queue.The thread is not blocked




////Os module
//platform finds which platform
// const os= require('os');
// if(os.platform==='win32'){
//     console.log('windows');

// }
// //cpu core information
// os.cpus().forEach((cpu, index)=>{
// console.log(`$cpu ${index} : ${cpu.model}`);
// })

// // tells free memory available
// console.log(os.freemem());
// // network
// console.log(os.networkInterfaces());




// ///FS
// const fs= require('fs');
// fs.mkdir();

import  http from 'http';
 const server= http.createServer((req, res)=>{
//    res.end('hello World'); 
if(req.method()==='GET'){
    res.write('hi I am still there \n');
    res.end('hello World');
//     res.writeHead(200, {
//     'Content-Type' : 'text/plain'
//     })
//     res.write("Hi this is my world");
    // res.end();
}
// else if(req.method()==='POST'){
//     let body= '';
//     req.on('data', (chunk)=>{
//         body+=chunk;

//     })
//     console.log(body);
//     req.on('end', ()=>{
//     console.log(body);
//     res.writeHead(200, {
//         'Content-Type':'text/plain'
//      })  
//      res.end('data recieved')  
//     })
// }

// res.write('hi I am still there \n');

// res.end();

})
  
  server.listen(4505, ()=>{
    console.log(' listening to port number 4505');
  })
