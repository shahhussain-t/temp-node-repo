// npm ----> node pakage manger
// owncode ininother pakage
// use some one other code
// share code with other

const http=require('http');

const server=http.createServer((req,res)=>{
        if(req.url==='/'){
            
            res.end("this is our home page");
            
        }
        
        if(req.url==='/about'){
            
            res.end("this is about")
        }
   
   res.end(
       
       `<h1>OPP's</h1>
       <p>we not find the page</P>
       <a href="/" >back to home page</a>
       `          
   ) 
    
})


server.listen(5000)