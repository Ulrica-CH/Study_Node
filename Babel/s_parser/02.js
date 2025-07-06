const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types");
const sourceCode = `
console.log(1);
function func() {console.info(2);}
export default class Clazz {
    say() {
        console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }`;
const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
  plugins: ["jsx"],
});
const targetCalleeName = ["log", "info", "error", "debug"].map(
  (item) => `console.${item}`
);
traverse(ast, {
  CallExpression(path, state) {
    // console.log
    // generate(path.node.callee) 会把 callee 这个 AST 节点转成代码字符串
    // 返回的通常是一个对象，里面有 code 属性，表示生成的代码字符串
    // const calleeName = generate(path.node.callee).code;
    const calleeName = path.get('callee').toString()
    if (targetCalleeName.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      path.node.arguments.push(
        types.stringLiteral(`line: ${line}, column: ${column}`)
      );
    }
  },
});
const { code } = generate(ast);
console.log(code);
