const path  =   require('path');

const basename = path.basename('C:\\temp\\myFile.html');
console.log(basename);
const diame = path.dirname('C:\\temp\\myFile.htm');
console.log(diame);
const extension = path.extname(__filename);
console.log(extension);
