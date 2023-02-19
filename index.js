let fs = require('fs')

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`
let css = `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    }
    
    html,body{
        height: 100%;
    }`
let js = `
const lodash = require('lodash');
let arr = [1, 2, 3,0,null];

const sum = lodash.sum(arr);

console.log(lodash.findIndex(arr,6))
console.log(lodash.remove(arr, (n) => {
    return n % 2 == 0;
  }));
console.log(sum); // outputs 6
`

let htmlFileCreator = () => {
    fs.writeFile("./index.html",`${html}`, (error) => {
        error ? console.log(error) : null
      })
}
let jsFileCreator = () => {
    fs.writeFile("./lodash.js",`${js}`, (error) => {
        error ? console.log(error) : null
      })
}

let cssFileCreator = () => {
    fs.mkdir('./style', () => { 
        fs.writeFile("./style/style.css",`${css}`, (error) => {
            error ? console.log(error) : null
          })
    })
}

let remove = () => {
    if(fs.existsSync('./style/style.css')){
        fs.unlink('./style/style.css', () => {})
        fs.rmdir('./style', (error) => {error ? console.log(error) : null})
    }
    if(fs.existsSync('./index.html')){
       fs.unlink('./index.html', () => {})
    }
    // if(fs.existsSync('./lodash.js')){
    //     fs.unlink('./lodash.js', () => {})
    //  }
    
}
remove();
jsFileCreator();
global.setTimeout(()=>{
    htmlFileCreator()
},1000)


global.setTimeout(()=>{
    cssFileCreator()
},10000)

global.setTimeout(()=>{
    remove()
},15000)

