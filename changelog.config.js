const types = [
  { type: 'feature', section: 'Features' },
  { type: 'fix', section: 'Bug Fixes' },
  { type: 'docs', section: 'Documentation' },
  { type: 'chore', section: 'Chores', hidden: true }
];

// Automatically generate typeMap from types
const typeMap = types.reduce((map, type) => {
  if (!type.hidden) {
    map[type.type] = type.section;
  }
  return map;
}, {});

module.exports = {
  types,
  writerOpts: {
    transform: (commit) => {
      // Skip unrecognized commit types
      if (!commit.type || !typeMap[commit.type]) {
        return null;
      }

      // Map the commit type to the corresponding section title
      return {
        ...commit,
        type: typeMap[commit.type]
      };
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    mainTemplate: `
# {{version}} ({{date}})

{{#each commitGroups}}
## {{title}}

{{#each commits}}
- {{this.subject}} ([{{this.hash}}](https://github.com/<owner>/<repo>/commit/{{this.hash}}))
{{/each}}

{{/each}}
    `,
    headerPartial: `
{{#if title}}
## {{title}}
{{/if}}
    `
  }
};
