const connect = require('./client').connect;
// const net = require('net');



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput(key));
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003'){
    process.exit();
  }
};

console.log('Connecting ...');

connect();
setupInput();