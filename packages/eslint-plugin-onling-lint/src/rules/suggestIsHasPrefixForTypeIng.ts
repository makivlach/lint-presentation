import type { TSESTree, TSESLint } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

type Options = [];
type MessageIds = 'suggestIsOrHasPrefixForTypeIng';

const createRule = ESLintUtils.RuleCreator(
  name => `${name}`,
);

export default createRule<Options, MessageIds>({
  name: 'suggest-is-has-prefix-for-type-ing',
  meta: {
    docs: {
      description:
        'suggest using "is" or "has" prefix for types that end with "ing"',
      recommended: 'warn',
    },
    messages: {
      suggestIsOrHasPrefixForTypeIng: 'Type name "{{ name }}" should be prefixed with "is" or "has".',
    },
    type: 'suggestion',
    fixable: "code",
    hasSuggestions: true,
    schema: [],
  },
  defaultOptions: [],
  create: function (context) {
    const checkFieldName = (name: string, node: TSESTree.Node): void => {
      if (!name.endsWith('ing') || (name.match(/^(?:am|are|is|was|were|has|have|had|can|should|will|do)\S*$/) && name.endsWith('ing'))) {
        return;

      }

      const suggestedName = name.match(/^(?:am|are|is|was|were|has|have|had|can|should|will|do)\S*$/)
        ? `has${name[0].toUpperCase()}${name.slice(1)}`
        : `is${name[0].toUpperCase()}${name.slice(1)}`;

      if (suggestedName !== name) {
        context.report({
          node,
          messageId: 'suggestIsOrHasPrefixForTypeIng',
          data: {
            name,
          },
          suggest: [
            {
              messageId: 'suggestIsOrHasPrefixForTypeIng',
              fix: (fixer) => fixer.replaceTextRange([node.range[0], node.range[0] + name.length], suggestedName),
            },
          ],
        });
      }
    };

    return {
      Identifier(node) {
        checkFieldName(node.name, node);
      },
    };
  },
});
