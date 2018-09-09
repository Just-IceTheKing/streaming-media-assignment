const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response, indexNum) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  switch (indexNum) {
    case 1:
      response.write(index);
      break;
    case 2:
      response.write(index2);
      break;
    case 3:
      response.write(index3);
      break;
    default:
      response.write(index);
      break;
  }

  response.end();
};


module.exports.getIndex = getIndex;
