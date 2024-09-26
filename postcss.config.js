module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 0, // Enables experimental CSS features
        preserve: true, // Prevents removal of custom properties
      }),
      require('cssnano')({
        discardUnused: false, // Prevents discarding custom properties
      }),
    ],
  };
  