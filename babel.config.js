module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // 👇 Transform class properties (e.g., `x = 5` inside a class)
    // allows modern JS class fields to work in older browsers.
    // adding `loose: true` generates simpler code that may perform better and also reduces console warnings.
    ["@babel/plugin-transform-class-properties", { loose: true }],

    // 👇 Transform private methods (e.g., `#secretMethod()` in a class)
    // ensures private class methods compile correctly across environments.
    // adding `loose: true` generates simpler code that may perform better and also reduces console warnings.
    ["@babel/plugin-transform-private-methods", { loose: true }],

    // 👇 Transform private property checks (e.g., `#field in obj`)
    // ensures checking for private fields works correctly after compilation.
    // adding `loose: true` generates simpler code that may perform better and also reduces console warnings.
    ["@babel/plugin-transform-private-property-in-object", { loose: true }]
  ]
};
