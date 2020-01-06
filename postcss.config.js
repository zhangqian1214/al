module.exports = {
  plugins: {
    autoprefixer: {},
    // postcss-pxtorem 把px转rem的东西
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
