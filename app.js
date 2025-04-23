const http=require('http');
const express=require('express')
const path=require('path')
const {Server}=require('socket.io');
const app=express();
const server=http.createServer(app);

const io=new Server(server);
io.on('connection',(socket)=>
    {socket.on('user-message',(message)=>{
        io.emit('message',message)
    })})
    app.use(express.static(path.resolve("./public")))
    app.get('/',(req,res)=>{
        return res.send ("/public/index.html")
    })
    const port=9000;
    server.listen(port,()=>{console.log(`server is listening at http://localhost:${port}`)})