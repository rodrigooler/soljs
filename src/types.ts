export const getTypeSolidity = value => {
  if (value instanceof Array) {
    switch (typeof value) {
      case 'string':
        return 'string[]'
      case 'number':
        return 'uint[]'
      case 'boolean':
        return 'bool[]'
    }
  }

  switch (typeof value) {
    case 'string':
      return 'string'
    case 'number':
      return 'uint'
    case 'boolean':
      return 'bool'
  }
}
