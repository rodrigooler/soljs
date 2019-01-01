import * as fs from "fs";
import * as acorn from "acorn";

let js = null;

const transformJSToSoldity = () => {
  const js = fs.readFileSync(__dirname + "/example/index.js", "utf8")
  const ast = acorn.parse(js);

  fs.writeFile(__dirname + "/testsolidiyt.sol", JSON.stringify(ast, null, 2), err => console.error(err));
};

transformJSToSoldity();
