const { transformFileSync } = require('@babel/core');
const insertParametersPlugin = require('./plugin/parameters-insert-plugin.js');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
    plugins: [insertParametersPlugin],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins: ['jsx']       
    }
});

console.log(code);