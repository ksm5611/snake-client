
const connect = require('./client');

// establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: '135.23.222.131',
//     port: 50542
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//     console.log('connected to server');
//   });

//   conn.on('data', (data) => {
//     console.log('Server says: ', data);
//   });

//   return conn;
// };

console.log("Connecting ...");
connect();

