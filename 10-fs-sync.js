// const fs=require('fs');
// fs.readFileSync  this equvalent to below
const {readFileSync,writeFileSync}=require('fs');//this equvalent to above
console.log("start")
// read from file 
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');
// console.log(first,second);


// create new one

writeFileSync(
    `./content/result-sync.txt'`,
    `\nhere is the result: ${first}, ${second}`,
        {flag:'a'}//fo rappend the previous
    )


console.log("done with task");
console.log("starting the next one")