import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'

export default {
  plugins: [
    postcssNested(),
    postcssPresetEnv({
      features: {
        'focus-visible-pseudo-class': false,
      },
    }),
    postcssImport(),
    cssnano({
      preset: 'default',
    }),
  ],
}
