import * as fs from "fs";

const solidityFolder = __dirname + "/../examples/solidity";
const abstractSyntaxTree = __dirname + "/../examples/ast";

export const readFile = (path: string) => fs.readFileSync(path, "utf8");

export const createFile = (data: string) =>
  fs.writeFile(__dirname + "/../examples/solidity/user.sol", data, err =>
    console.error(err)
  );

export const createFileAST = (ast: any) =>
  fs.writeFile(
    __dirname + "/../examples/ast/user.ast.json",
    JSON.stringify(ast, null, 2),
    err => console.error(err)
  );

export const createFolders = () => {
  if (!fs.existsSync(solidityFolder)) {
    fs.mkdirSync(solidityFolder);
    if (!fs.existsSync(abstractSyntaxTree)) {
      fs.mkdirSync(abstractSyntaxTree);
    }
  }
};
