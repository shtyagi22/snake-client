
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    //conn.write("Hello from client!");
    console.log("Successfully connected to game server");
    conn.write("Name: SHT");
    conn.write("Move: up");
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};
module.exports = connect;
