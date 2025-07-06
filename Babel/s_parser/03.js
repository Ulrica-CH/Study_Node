const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types");
const template = require("@babel/template").default;

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
  plugins: ["jsx"],
});
const targetCalleeName = ["log", "info", "error", "debug"].map(
  (item) => `console.${item}`
);
// console前加一行打印行号
traverse(ast, {
  CallExpression(path, state) {
    // traverse会对新的节点也进行遍历处理
    if (path.node.isNew) {
      return;
    }
    const calleeName = generate(path.node.callee).code;
    if (targetCalleeName.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      const newNode = template.expression(
        `console.log("filename: (${line}, ${column})")`
      )();
      newNode.isNew = true;
      // 处理jsx 因为jsx支持表达式，不能单独插入一个节点，需要用数组来包裹
      if (path.findParent((path) => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]));
        // 跳过子节点
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  },
});
