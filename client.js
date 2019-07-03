/**
 * Establishes connection with the game server
 */

const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  conn.on('connect', (data) => {
    console.log("Successful conencted to game server");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 600);
    conn.write("Name: TKO");

  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = {connect};