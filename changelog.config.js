module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      const typeMap = {
        feat: "Features",
        fix: "Bug Fixes",
        test: "Tests",
        docs: "Documentation",
        style: "Code Style",
        refactor: "Code Refactoring",
        perf: "Performance Improvements",
        chore: "Chores",
      };

      if (!typeMap[commit.type]) {
        return null; // Skip commits with unrecognized types
      }

      commit.type = typeMap[commit.type];
      return commit;
    },
    groupBy: "type",
    commitGroupsSort: "title",
    commitsSort: ["scope", "subject"],
    noteGroupsSort: "title",
    mainTemplate: `
      # Changelog
      {{#each commitGroups}}
        ## {{title}}
        {{#each commits}}
          - {{this.subject}} ({{this.hash}})
        {{/each}}
      {{/each}}
    `,
    headerPartial: `# {{version}} ({{date}})\n\n`,
  },
};
