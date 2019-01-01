import * as fs from "fs";
import * as acorn from "acorn";

const readFile = (path: string) => fs.readFileSync(path, "utf8");
const createFile = (data: string) =>
  fs.writeFile(__dirname + "/user.sol", data, err => console.error(err));
const getContractName = (ast: any): string => {
  const name = ast.body[0].declarations[0].id.name;
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const createCodeSolidity = (ast) => {
    const pragma = "pragma solidity ^0.5.0;\n";
    const contractName = `contract ${getContractName(ast)} {\n`;
    const endLine = "}\n";

    return pragma + contractName + endLine;
}

const transformJSToSoldity = () => {
  const js = readFile(__dirname + "/example/user.js");
  const ast: any = acorn.parse(js);
  const solidity = createCodeSolidity(ast);

  createFile(solidity);
};

transformJSToSoldity();
