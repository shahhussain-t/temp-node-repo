// npm -global commmand , comes with node

// npm -version

// local dependency -use it only in this particular project
// npm i <pakagename>

//global dependency - use it in any project
// npm install -g <pakagename>
// sudo install -g <pakagenmae> (mac)


// pakage.json -manifest file(stores important info about project/pakage)
// manual approch (create pakage.jsopn int hte root , create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y(everyting deafualt)

// npx is a package manager tool come with npm 5.2
// 4.17.20
// major chnage second on is backward compatble and third one is a patch fixed bags


const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newItems=_.flattenDeep(items);
console.log(newItems);
console.log("hello world");
console.log("wowwwwww wh ds sdfsat is that")