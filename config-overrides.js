// const {
//   override,
//   useBabelRc,
// } = require('customize-cra');

const { fixBabelImports, override, addBabelPlugin } = require('customize-cra');

// Revisar que esta en development
// Revisar el test id original, que no anda
// seguir agregando data test id en los componentes

// const removeDataTestId = () => {
//   return process.env.REACT_APP_ENV === 'development'
//     ? addBabelPlugin('babel-plugin-jsx-remove-data-test-id')
//     : null;
// };

module.exports = override(
  fixBabelImports('import', {
    libraryName: '@mui/material',
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  // addBabelPlugin('babel-plugin-jsx-remove-data-test-id')
);
