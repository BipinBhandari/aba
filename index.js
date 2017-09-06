// import program from './program'
// program.start();


import * as babylon from "babylon";
import generate from "babel-generator";
import traverse from "babel-traverse";

const code = `
`;

const program = babylon.parse(code, {
	plugins: ["jsx"],
    sourceType: "module",
});

// program.body.unshiftContainer('body', t.stringLiteral('before'));
// program.body.pushContainer('body', t.stringLiteral('after'));
//
// console.log(JSON.stringify(program.program));


traverse(program, {
  enter(path) {

      path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));
      // console.log("from path")

    // path.unshiftContainer('body', t.stringLiteral('before'));

    // if (
    //   path.node.type === "JSXIdentifier" &&
    //   path.node.name === "h1"
    // ) {
    //   path.node.name = "h2";
    // }
  }
});
//
console.log(generate(program).code);