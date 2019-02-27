module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    plugins: ["standard", "react"],
    rules: {
      "strict": 0,
      "no-var": "error", // optional, recommended when using es6+
      "no-unused-vars": 1, // recommended
      "arrow-spacing": ["error", { before: true, after: true }], // recommended
      indent: ["error", 2],
      "comma-dangle": [
        "error",
        {
          objects: "only-multiline",
          arrays: "only-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],
  
      // options to emulate prettier setup
      semi: ["error", "never"],
      "max-len": ["error", { code: 80 }],
      "template-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "as-needed"],
  
      // standard.js
      "space-before-function-paren": [
        "error",
        {
          named: "always",
          anonymous: "always",
          asyncArrow: "always",
        },
      ],
  
      // standard plugin - options
      "standard/object-curly-even-spacing": ["error", "either"],
      "standard/array-bracket-even-spacing": ["error", "either"],
      "standard/computed-property-even-spacing": ["error", "even"],
      "standard/no-callback-literal": ["error", ["cb", "callback"]],
  
      // react plugin - options
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      //custom
      "no-undef": 0,
      "max-len": 0,
      "react/prop-types": 0,
      "react/no-unescaped-entities": 0,
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 8, // optional, recommended 6+
    },
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                           // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "detect", // React version. "detect" automatically picks the version you have installed.
                             // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          "forbidExtraProps",
          {"property": "freeze", "object": "Object"},
          {"property": "myFavoriteWrapper"}
      ],
      "linkComponents": [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        "Hyperlink",
        {"name": "Link", "linkAttribute": "to"}
      ]
    }
  }