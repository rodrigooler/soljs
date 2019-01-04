const pathFile = __dirname + '/../examples/solidity/user.sol'

const lines = require('fs')
  .readFileSync(pathFile, 'utf-8')
  .split('\n')

describe('Test solidity file', () => {
  test('should check that you have the pragma', () => {
    expect(lines[0]).toBe('pragma solidity ^0.5.0;')
  })
  test('should verify that you have a contract name', () => {
    expect(lines[2]).toBe('contract User {')
  })
  test('should check whether the variables with types', () => {
    expect(lines[3]).toBe('    string name;')
    expect(lines[4]).toBe('    string email;')
  })
})
