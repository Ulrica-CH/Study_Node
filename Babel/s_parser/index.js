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
traverse(ast, {
  CallExpression(path, state) {
    if (
      types.isMemberExpression(path.node.callee) &&
      path.node.callee.object.name === "console" &&
      ["info", "debug", "error", "log"].includes(path.node.callee.property.name)
    ) {
      const { line, column } = path.node.loc.start;
      path.node.arguments.push(
        types.stringLiteral(`line: ${line}, column: ${column}`)
      );
    }
  },
});
const { code } = generate(ast);
console.log(code);
