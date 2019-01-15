const express=require('express');
const server=express();
const fs=require('fs');
server.listen(3000,function(){
  console.log("服务器创建成功...");
});
server.use(express.static('public'));
server.get('/getImg',(req,res)=>{
  fs.readdir('./public/img',(err,files)=>{
    if(err) throw err;
    res.send(files);
  })
})