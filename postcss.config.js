/**
 * PostCSS Config outside CRA
 */
module.exports = (ctx) => {
  return {
    map: ctx.options.map,
    plugins: {
      'postcss-preset-env': {
        stage: 3,
        features: {
          'nesting-rules': true,
        },
        autoprefixer: {
          cascade: false,
          grid: 'autoplace'
        },
      },
      'postcss-import': {},
      'postcss-flexbugs-fixes': {}
    },
  }
}