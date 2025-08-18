export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer destructuring if the object is already destructured in the same scope",
    },
    schema: [], // no options
    messages: {
      preferDestructure: "Property '{{prop}}' should be destructured because '{{obj}}' is already destructured.",
    },
  },

  create(context) {
    // Map scope -> Set of object names already destructured
    const scopeDestructuredObjects = new WeakMap();

    function getScopeInfo(scope) {
      if (!scopeDestructuredObjects.has(scope)) {
        scopeDestructuredObjects.set(scope, new Set());
      }
      return scopeDestructuredObjects.get(scope);
    }

    function getScope(node) {
      const sourceCode = context.getSourceCode();
      const scopeManager = sourceCode.scopeManager;
      return scopeManager.acquire(node) || scopeManager.globalScope;
    }

    return {
      VariableDeclarator(node) {
        // Detect `const { foo } = props;`
        if (node.id.type === "ObjectPattern" && node.init?.type === "Identifier") {
          const objName = node.init.name;
          const scope = getScope(node) || context.getScope?.(); // fallback if ESLint < 8
          if (!scope) return;
          const set = getScopeInfo(scope);
          set.add(objName);
        }
      },

      MemberExpression(node) {
        // Only obj.prop, not obj['prop']
        if (node.computed || node.object.type !== "Identifier") return;

        const objName = node.object.name;
        const scope = getScope(node);
        if (!scope) return;

        const set = getScopeInfo(scope);

        // Only warn if this object was already destructured
        if (set.has(objName)) {
          context.report({
            node,
            messageId: "preferDestructure",
            data: {
              obj: objName,
              prop: node.property.name || "property",
            },
          });
        }
      },
    };
  },
};
