/* src/rules/no-jsx-button.test.ts */
import { TSESLint } from '@typescript-eslint/utils'
import rule from './suggestIsLoadingInsteadFetching'

// Specify parser
const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
})

tester.run('suggestIsLoadingInsteadOfFetching', rule, {
  valid: [
    {
      code: `type Foo = {
        isLoading: boolean
      }`,
    },
  ],
  invalid: [
    {
      code: `type Foo = {
        isFetching: boolean
      }`,
      errors: [{ messageId: 'suggestIsLoadingInsteadOfFetching' }],
    },
  ],
})