const connect = require('./client').connect;
// const net = require('net');



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {
    stdin.on('data', key => {
      console.log(key);
      if (key === '\u0003'){
        process.exit();
      }
    })
  }();
  return stdin;
}


console.log('Connecting ...');

connect();
setupInput();