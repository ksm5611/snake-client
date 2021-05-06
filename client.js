const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('connected to server');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
  });

  //Name command and send it to server
  conn.on("connect", () => {
    conn.write('Name: POP');
    conn.write('Say: my brain');
  });

  let arr = ["Move: up", "Move: left", "Move: left", "Move: down"];

  let startTime = 50;

  conn.on("connect", () => {

    for (const move of arr) {
      setTimeout(() => {
        conn.write(move);
      }, startTime);
      startTime += 100;
    }

    // // ---- the snack will move until it died.
    // setInterval(() => {
    //   conn.write("Move: down");
    // }, startTime);
  });


  return conn;
};

module.exports = { connect };