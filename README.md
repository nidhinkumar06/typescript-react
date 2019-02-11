React with Typescript:

### Installation

```sh
create-react-app react-typescript --scripts-version=react-scripts-ts
```

Once the react app is created we can see three new files namely

- tsconfig.json  - Compiler options
- tsconfig.prod.json
- tsconfig.test.json
- tslint.json

### Documentation Link: https://goo.gl/uAm7Y8
### Flow Link: https://goo.gl/Ki4nFD
#### Demo Link: https://friendlychat-eaac3.firebaseapp.com/
#### Blog:  https://www.carlrippon.com/building-react-form-component-typescript-basics/

> Error: TypesScript warning : Use an interface instead of a type literal.  I:


Try to add the rules in tslint.json

```sh
"rules": {
  "object-literal-sort-keys": false,
  "member-ordering": false,
  "jsx-no-lambda": false,
  "no-console": false,
  "ordered-imports": false
}

````  

### Errors:
1. export interface MyClassProps
   Error: TypesScript warning : Use an interface instead of a type literal.  I:

2.Lambdas are forbidden in JSX attributes due to their rendering performance impact

### Solution Link:  https://stackoverflow.com/questions/42973161/typesscript-warning-use-an-interface-instead-of-a-type-literal

2. By adding the "jsx-no-lambda": false  as a rule in tslint.json the error has gone
