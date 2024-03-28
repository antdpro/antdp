module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'eslint:recommended'],
  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
    ANTD_IS_STORAGE: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
  },
};
