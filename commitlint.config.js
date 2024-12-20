module.exports = {
  rules: {
    // Enforce specific types for commits
    'type-enum': [
      2, // Error level (2 = error, 1 = warning, 0 = off)
      'always', // Condition (e.g., 'always', 'never')
      [
        'feat', // Feature
        'fix', // Bug fix
        'chore', // Maintenance
        'docs', // Documentation updates
        'refactor', // Refactoring code
        'wip', // Work in progress
        'hotfix', // Quick production fixes
      ],
    ],

    // Limit the length of the commit header (title)
    'header-max-length': [2, 'always', 72],

    // Enforce scope to be one of specific values or allow custom ones
    'scope-enum': [
      2,
      'always',
      ['ui', 'api', 'auth', 'core'], // Valid scopes
    ],

    // Allow empty scopes (if needed)
    'scope-empty': [1, 'never'],

    // Enforce subject (description) to be written in lowercase
    'subject-case': [2, 'always', ['lower-case']],

    // Enforce a blank line between header and body
    'body-leading-blank': [2, 'always'],

    // Limit the body length per line
    'body-max-line-length': [2, 'always', 100],

    // Limit the footer length per line
    'footer-max-line-length': [2, 'always', 100],
  },
};
