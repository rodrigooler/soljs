import * as fs from "fs";
import * as acorn from "acorn";

const solidityFolder = __dirname + "/../examples/solidity";
const abstractSyntaxTree = __dirname + "/../examples/ast";

const readFile = (path: string) => fs.readFileSync(path, "utf8");

const createFile = (data: string) =>
  fs.writeFile(__dirname + "/../examples/solidity/user.sol", data, err =>
    console.error(err)
  );

const createFileAST = (ast: any) =>
  fs.writeFile(
    __dirname + "/../examples/ast/user.ast.json",
    JSON.stringify(ast, null, 2),
    err => console.error(err)
  );

const getContractName = (ast: any): string => {
  const name = ast.body[0].declarations[0].id.name;
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getTypeSolidity = value => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "uint";
};

const getVariables = (ast: any) =>
  ast.body[0].declarations[0].init.properties
    .map(p => {
      const key = p.key.name;
      const value = p.value.value;
      const type = getTypeSolidity(value);

      return value ? `${type} ${key} = ${value};\n` : `${type} ${key};\n`;
    })
    .join("    ");

const getFunctions = (ast: any) =>
  ast.body[0].declarations[0].init.properties.map(p => {}).join(" ");

const createCodeSolidity = ast => {
  const startLine = "pragma solidity ^0.5.0;\n";
  const contractName = `contract ${getContractName(ast)} {`;
  const variables = getVariables(ast);
  const funcs = getFunctions(ast);
  const endLine = "}\n";

  return `${startLine}
${contractName}
    ${variables}
  ${funcs}
${endLine}
  `;
};

const transformJSToSoldity = () => {
  const js = readFile(__dirname + "/../examples/js/user.js");
  const ast: any = acorn.parse(js);
  const solidity = createCodeSolidity(ast);

  if (!fs.existsSync(solidityFolder)) {
    fs.mkdirSync(solidityFolder);
    if (!fs.existsSync(abstractSyntaxTree)) {
      fs.mkdirSync(abstractSyntaxTree);
    }
  }

  createFile(solidity);
  createFileAST(ast);
};

transformJSToSoldity();
