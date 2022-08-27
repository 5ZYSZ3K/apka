module.exports = {
  '**/*.(ts|tsx)': [
    () => 'yarn typecheck',
    'yarn test --findRelatedTests --passWithNoTests',
    'prettier --write',
    'eslint --fix',
  ],
};
