/* src/rules/no-jsx-button.test.ts */
import { TSESLint } from "@typescript-eslint/utils";
import rule from "./suggestIsHasPrefixForTypeIng";

// Specify parser
const tester = new TSESLint.RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

tester.run("suggestIsOrHasPrefixForTypeIng", rule, {
  valid: [
    {
      code: `type Foo = {
        isFetching: boolean
      }`
    },
  ],
  invalid: [
    {
      code: `type Foo = {
        fetching: boolean
      }`,
      errors: [{ messageId: 'suggestIsOrHasPrefixForTypeIng' }],
    },
  ],
});