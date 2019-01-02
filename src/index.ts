import * as acorn from "acorn";

import { createFile, createFileAST, createFolders, readFile } from "./files";
import { getTypeSolidity } from "./types";

const getContractName = (ast: any): string => {
  const name = ast.body[0].declarations[0].id.name;
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getVariables = (ast: any) =>
  ast.body[0].declarations[0].init.properties
    .map((p, index) => {
      const key = p.key.name;
      const value = p.value.value;
      const type = getTypeSolidity(value);

      if (index === 0) {
        return value
          ? `    ${type} ${key} = ${value};\n`
          : `    ${type} ${key};\n`;
      }

      return value ? `${type} ${key} = ${value};\n` : `${type} ${key};\n`;
    })
    .join("    ");

const getFunctions = (ast: any) =>
  ast.body[0].declarations[0].init.properties.map(p => {}).join(" ");

const createCodeSolidity = ast => {
  const startLine = "pragma solidity ^0.5.0;\n\n";
  const contractName = `contract ${getContractName(ast)} {\n`;
  const variables = getVariables(ast);
  const funcs = getFunctions(ast);
  const endLine = "}\n";

  // @TODO: FIX THIS
  return startLine + contractName + variables + funcs + endLine;
};

const transformJSToSoldity = () => {
  const js = readFile(__dirname + "/../examples/js/user.js");
  const ast: any = acorn.parse(js);
  const solidity = createCodeSolidity(ast);

  createFolders();
  createFile(solidity);
  createFileAST(ast);
};

transformJSToSoldity();
