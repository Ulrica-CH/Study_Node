module.exports = function (ast, code, module) {
  ast.body.forEach((statement) => {
    Object.defineProperties(statement, {
      _included: { value: false, writable: true },
      _module: { value: module },
      _source: { value: code.snip(statement.start, statement.end) },
    });
    // 收集imports
    if (statement.type === "ImportDeclaration") {
      const source = statement.source.value;
      statement.specifiers.forEach((specifier) => {
        let importName = specifier.imported.name; //导入的变量名
        let localName = specifier.local.name; //本地的变量名
        module.imports[localName] = { source, importName };
      });
      // 收集exports
    } else if (statement.type === "ExportNamedDeclaration") {
      const declaration = statement.declaration;
      if (declaration && declaration.type === "VariableDeclaration") {
        const declarations = declaration.declarations;
        declarations.forEach((variableDeclarator) => {
          const localName = variableDeclarator.id.name; //name
          const exportName = localName;
          module.exports[exportName] = { localName };
        });
      }
    }
    console.log(module.imports,module.exports);
  });
  // console.log(ast.body);
};
