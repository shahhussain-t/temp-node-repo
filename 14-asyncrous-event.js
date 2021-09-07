const {readFile}=require('fs');

console.log("start");
readFile('./content/first.txt','utf-8',(err,result)=>{
    
    if(err){
        
        console.log(err)
        return
    }else{
        
        console.log(result)
        console.log('completed first task')
    }

})


console.log("start next task")