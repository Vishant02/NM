// const token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
// const server = 'http://127.0.0.1';
// const port = 8080;
// const client = new algosdk.Algodv2(token, server, port);

// (async () => {
//   console.log(await client.status().do());
// })().catch((e) => {
//   console.log(e);
// });

const names = require('./two')

console.log(names.john)

console.log(names.peter)
require('./mindgrenade')