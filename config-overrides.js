const { override, addWebpackModuleRule, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }],
          },
          svgo: true,
        },
      },
    ],
  }),
  addBabelPlugin(["@svgr/babel-plugin-react-svg"])
);
