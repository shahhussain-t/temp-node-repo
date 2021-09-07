// os modules 
const OS=require('os');

// info  about current user
const user=OS.userInfo();
console.log(user);

// mehtod return the system uptime in seconds
console.log(`The system uptime is: ${OS.uptime()} seconds`);    

const current={
    
    name:OS.type(),
    realesed:OS.release(),
    totalMemory:OS.totalmem(),
     freeMem:OS.freemem()
    
}

console.log(current);