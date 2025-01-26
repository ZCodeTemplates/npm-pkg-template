module.exports = {
  types: [
    { type: 'feature', section: 'Features' },
    { type: 'test', section: 'Tests' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'docs', section: 'Documentation' },
    { type: 'chore', section: 'Chores', hidden: true }
  ],
  writerOpts: {
    transform: (commit) => {
      const typeMap = {
        feature: 'Features',
        fix: 'Bug Fixes',
        docs: 'Documentation'
      };

      // Skip commits without recognized types
      if (!commit.type || !typeMap[commit.type]) {
        return null;
      }

      // Return a new object with the modified type
      return {
        ...commit, // Copy all existing properties
        type: typeMap[commit.type] // Replace the type with the mapped section title
      };
    },
    groupBy: 'type', // Group commits by the `type` field
    commitGroupsSort: 'title', // Sort groups alphabetically
    commitsSort: ['scope', 'subject'] // Sort commits within each group
  }
};
