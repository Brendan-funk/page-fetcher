const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
request(args[0], (error, response, body) => {
  console.log('error:',error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(args[1], body , err => {
    if (err) {
      console.log(err);
    }
    
    return success(args[1])
  })
});

const success = function(file) {
  const stats = fs.statSync(file);
  const size = stats.size;
  console.log('Sucessfully downloaded ' + size + ' bytes of data to ' + file);
}