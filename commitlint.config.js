module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refac', 'test', 'ci']],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-case': [2, 'always', ['camel-case', 'kebab-case']],
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-empty': [2, 'never'],
        'subject-min-length': [2, 'always', 3],
        'subject-full-stop': [2, 'never', '.'],
        'scope-empty': [2, 'never'],
        'scope-min-length': [2, 'always', 1],
    }
};