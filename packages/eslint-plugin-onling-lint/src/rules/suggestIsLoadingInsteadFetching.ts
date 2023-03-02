import type { TSESTree } from '@typescript-eslint/utils'
import { ESLintUtils } from '@typescript-eslint/utils'

type Options = [];
type MessageIds = 'suggestIsLoadingInsteadOfFetching';

const createRule = ESLintUtils.RuleCreator(
  name => `${name}`,
)

export default createRule<Options, MessageIds>({
  name: 'suggest-is-loading-instead-is-fetching',
  meta: {
    docs: {
      description:
        'suggests using "isLoading" instead of isFetching or fetching',
      recommended: 'warn',
    },
    messages: {
      suggestIsLoadingInsteadOfFetching: '"fetching" or "isFetching" should be named "isLoading".',
    },
    type: 'suggestion',
    fixable: 'code',
    hasSuggestions: true,
    schema: [],
  },
  defaultOptions: [],
  create: function(context) {
    const checkFieldName = (name: string, node: TSESTree.Node): void => {
      if (name !== 'fetching' && name !== 'isFetching') {
        return
      }

      const suggestedName = 'isLoading'

      context.report({
        node,
        messageId: 'suggestIsLoadingInsteadOfFetching',
        data: {
          name,
        },
        suggest: [
          {
            messageId: 'suggestIsLoadingInsteadOfFetching',
            fix: (fixer) => fixer.replaceTextRange([node.range[0], node.range[0] + name.length], suggestedName),
          },
        ],
      })
    }

    return {
      Identifier(node) {
        checkFieldName(node.name, node)
      },
    }
  },
})
