const path = require('path');
const baseUrl = './User/xy';
const fileName = 'aaa.txt';
// User\xy\aaa.txt
const filePath1 = path.join(baseUrl, fileName);

console.log(filePath1);

const baseUrl1 = '../User/xy';
const fileName1 = 'aaa.txt';
// ..\User\xy\aaa.txt
const filePath2 = path.join(baseUrl1, fileName1);
console.log(filePath2);