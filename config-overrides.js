const { fixBabelImports, override, addBabelPlugin } = require('customize-cra');

const removeDataTestId = () => {
  return process.env.REACT_APP_ENV === 'production'
    ? addBabelPlugin('babel-plugin-jsx-remove-data-test-id')
    : null;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: '@mui/material',
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  removeDataTestId()
);
