module.exports = {
  writerOpts: {
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
    // Mapping commit types to titles
    transform: (commit, context) => {
      const typeMap = {
        feature: "Features",
        fix: "Bug Fixes",
        test: "Tests",
        docs: "Documentation",
        style: "Code Style",
        refactor: "Code Refactoring",
        perf: "Performance Improvements",
        chore: "Chores"
      };

      // Map the commit type to a section title
      commit.type = typeMap[commit.type] || commit.type;

      // Return commits with type mapped, so they are grouped correctly
      return commit;
    }
  }
};
