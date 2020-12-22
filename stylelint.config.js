module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],
  rules: {
    'value-keyword-case': [ 'lower', {
      ignoreFunctions: [ 'index' ],
      ignoreProperties: [ /\$[a-zA-Z-]+/ ]
    } ],
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': null,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'max-nesting-depth': [
      2,
      {
        ignore: [
          'blockless-at-rules',
          'pseudo-classes'
        ]
      }
    ],
    'selector-max-compound-selectors': 3,
    'declaration-no-important': true,
    'selector-max-id': 0,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: [
          'attribute'
        ]
      }
    ],
    'selector-class-pattern': '[a-z]',
    'declaration-block-single-line-max-declarations': 0
  },
  ignoreFiles: [
    '/**/_iconfont.scss',
    '/**/_shame.scss'
  ],
  plugins: [
    'stylelint-scss'
  ]
}
