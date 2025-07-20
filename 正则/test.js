let string = 'hello'

// 6hello
console.log(string.replace(/^/,'6'))

// hello2
console.log(string.replace(/$/,'2'))


const str = 'This is somthing'
console.log(str.match(/\b\w{5}\b/))