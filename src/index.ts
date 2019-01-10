import * as acorn from 'acorn'

import { createFile, createFileAST, createFolders, readFile } from './files'
import { getTypeSolidity } from './types'
import { IAST, IBody, IDeclarationsItem, IBodyItem } from './interfaces'

const getContractName = (ast: IAST): string => {
  const name = ast.body[0].declarations[0].id.name
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const getVariables = (ast: IAST) =>
  ast.body[0].declarations[0].init.properties
    .map((p, index) => {
      const key = p.key.name
      const value = p.value.value
      const type = getTypeSolidity(value)

      if (index === 0) {
        return value
          ? `    ${type} ${key} = ${value};\n`
          : `    ${type} ${key};\n`
      }

      return value ? `${type} ${key} = ${value};\n` : `${type} ${key};\n`
    })
    .join('    ')

const filterBodyWithArrowFunctionExpression = (bodyItem: IBodyItem) => {
  const declarations = bodyItem.declarations.filter(
    (d: IDeclarationsItem) => d.init.type === 'ArrowFunctionExpression',
  )

  return declarations.length > 0
}

const convertVariablesToParameters = (variables: string) =>
  variables
    .split('    ')
    .splice(1)
    .map((variable, index) => {
      const splitted = variable
        .replace(';', '')
        .replace('\n', '')
        .split(' ')
      const type = splitted[0]
      const name = splitted[1]
      return index === 0
        ? `\n        ${type} _${name},`
        : `        ${type} _${name},\n`
    })
    .join('\n')

const createSetFunction = (bodyItem: IBodyItem, variables: string) => {
  const name = bodyItem.declarations[0].id.name
  const scope = name.includes('_') ? 'private' : 'public'
  const parameters = convertVariablesToParameters(variables)
  const startFunction = `\n    function ${name}(\n${parameters}    ) ${scope} view {\n`
  const content = ``
  const endFunction = `    }`

  return startFunction + content + endFunction
}

const getFunctions = (ast: IAST, variables: string) =>
  ast.body
    .slice(1)
    .filter((bodyItem: IBodyItem) =>
      filterBodyWithArrowFunctionExpression(bodyItem),
    )
    .map((bodyItem: IBodyItem) => {
      if (
        // bodyItem.declarations[0].id.name === 'set' ||
        bodyItem.declarations[0].id.name === '_set'
      ) {
        return createSetFunction(bodyItem, variables)
      }
    })
    .join('\n')

const createCodeSolidity = (ast: IAST) => {
  const startLine = 'pragma solidity ^0.5.0;\n\n'
  const contractName = `contract ${getContractName(ast)} {\n`
  const variables = getVariables(ast)
  const funcs = getFunctions(ast, variables)
  const endLine = '\n}\n'

  return startLine + contractName + variables + funcs + endLine
}

const transformJSToSoldity = () => {
  const js = readFile(__dirname + '/../examples/js/user.js')
  const ast: any = acorn.parse(js)
  const solidity = createCodeSolidity(ast)

  createFolders()
  createFile(solidity)
  createFileAST(ast)
}

transformJSToSoldity()
