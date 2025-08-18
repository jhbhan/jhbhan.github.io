import { RuleTester } from "eslint";
import customEslint from "./custom-eslint.js";

const ruleTester = new RuleTester();

ruleTester.run(
  "custom-es-lint",
  customEslint,
    {
        valid: [
        // No destructuring yet → allowed
        "function Test(props) { console.log(props.foo); }",

        // Destructuring and only using destructured variables → allowed
        "function Test(props) { const { foo } = props; console.log(foo); }",

        // Different object unrelated → allowed
        "function Test(props) { const { foo } = props; const obj = { bar: 1 }; console.log(obj.bar); }",
    ],
    invalid: [
        {
        // Destructured once, but still using dot notation → invalid
        code: `
            function Test(props) {
            const { foo } = props;
            console.log(props.bar);
            }
        `,
        errors: [{ messageId: "preferDestructure", data: { obj: "props", prop: "bar" } }],
        },
        {
        // Multiple violations
        code: `
            function Test(props) {
            const { foo } = props;
            console.log(props.bar);
            console.log(props.baz);
            }
        `,
        errors: [
            { messageId: "preferDestructure", data: { obj: "props", prop: "bar" } },
            { messageId: "preferDestructure", data: { obj: "props", prop: "baz" } },
        ],
        },
    ],
  }
);

console.log("All tests passed!");
