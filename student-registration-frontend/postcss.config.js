module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
