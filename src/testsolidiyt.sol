{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "state"
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 39,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 24,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 20,
                  "name": "name"
                },
                "value": {
                  "type": "Literal",
                  "start": 22,
                  "end": 24,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init"
              },
              {
                "type": "Property",
                "start": 28,
                "end": 37,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 33,
                  "name": "email"
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init"
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "name": "set"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 54,
            "end": 78,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 59,
                "name": "state"
              }
            ],
            "body": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 77,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "name": "state"
              },
              "right": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "name": "state"
              }
            }
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "name": "get"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 92,
            "end": 103,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "name": "state"
            }
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "script"
}