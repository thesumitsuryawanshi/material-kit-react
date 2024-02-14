const { override, addWebpackModuleRule } = require("customize-cra");

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
          // Add the plugin name
          svgo: true,
        },
      },
    ],
  })
);
