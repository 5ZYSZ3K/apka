module.exports = {
  '**/*.ts(?)': [
    () => 'yarn typecheck',
    'yarn test --findRelatedTests',
    'prettier --write',
    'eslint --fix',
  ],
};
