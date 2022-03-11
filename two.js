const john = 'john'

const peter = 'peter'

const secret = 'Secret Key'

module.exports = {john, peter}

// const os = require('os')
// console.log(os.userInfo());

// // method returns the system uptime in seconds

// console.log(`The system uptime is ${os.uptime()} seconds`);

// const osinfo={
//     name: os.type(),
//     release:os.release(),
//     freemem: os.freemem(),   
// }
// console.log(osinfo);

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/','subfolder','package.json')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','package.json')
// console.log(absolute);


let stocks = {

    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};

 let order = (fruit_name,call_prodauction)=> {

    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
    },2000);
    
    call_prodauction();
 };

 let production = ()=>{
     setTimeout(()=>{
         console.log("production has started");
     },0000)
 };

 order(0,production);