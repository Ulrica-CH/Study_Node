// const minimist = require('minimist');
// console.log(process.argv)
// const argv = minimist(process.argv.slice(2));
// console.log(argv);
// for (const key in process.env) {
//     if (key.startsWith('npm_config_')) {
//       console.log(`${key}=${process.env[key]}`);
//     }
//   }
// const buffer = Buffer.from('why')
// console.log(buffer)


// const msg = '你好';

// //默认utf8编码，一中文字符=3字节存储
// const buffer1 = Buffer.from(msg);
// console.log(buffer1);

// const buffer2 = Buffer.from(msg, 'utf16le');
// console.log(buffer2);
const view = new Int8Array(new Uint8Array(6));
view[0] = 10;
view[3] = 6;
// Int8Array(6) [ 10, 0, 0, 6, 0, 0 ]
console.log(view);
const view2 = new Int8Array([1, 2, 3, 4, 5]);
view[0] = 10;
view[3] = 6;
// Int8Array(5) [ 1, 2, 3, 4, 5 ]
console.log(view2);

const buffer = new ArrayBuffer(8);
const view3 = new Int32Array(buffer); 
const view4 = new Int32Array(buffer, 4); 
// Int32Array(2) [ 0, 0 ] Int32Array(1) [ 0 ]
console.log(view3, view4);


const view5 = new Float32Array(32);
view5[0] = 3.15;
view5[3] = 6;

console.log(view5);