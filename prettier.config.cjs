/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  plugins: [require.resolve("prettier-plugin-tailwindcss")]
}

module.exports = config
