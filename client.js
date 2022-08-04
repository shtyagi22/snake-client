const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    //conn.write("Hello from client!");
    console.log("Successfully connected to game server");
    conn.write("Name: SHT");
    conn.write("Say: shshshhhhh")
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};
module.exports = connect;
