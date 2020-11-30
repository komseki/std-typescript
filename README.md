
### tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

```json
{
"compilerOptions": {
  "module": "system",
  "noImplicitAny": true,
  "removeComments": true,
  "preserveConstEnums": true,
  "outFile": "../../built/local/tsc.js",
  "sourceMap": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "**/*.spec.ts"]
}
```