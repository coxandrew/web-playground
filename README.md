# Web Playground

This is my testing playground for learning and practicing JavaScript and CSS fundamentals and new concepts. I find it indispensable to have a local coding environment that allows me to try examples quickly with tight feedback loops.

This playground currently supports:

* LiveReload
* ES2015 support through Babel (including [modules](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/))

It comes pre-loaded with some common libraries:

* Bootstrap
* jQuery

## Getting Started

Install the required dependencies:

```
$ npm install
```

Run the server:

```
$ npm run start
```

Fire up your browser at:
http://localhost:8080/

... and it will live reload whenever you make save a change to any of the files in the `src` directory.

## Adding files

If you want to hack on something quickly, just edit `src/app.js` directly. If you want to add new files to explore a specific concept or feature, just add it to the appropriate directory `src/js` or `src/css` and import it in `src/app.js`.

The main entry point is an HTML file that is generated from the `src/index.ejs` template.

To create additional HTML files, you'll need to edit `webpack.config.js` with mutliple `HtmlWebpackPlugin()` calls:

```js
{
  // ...
  plugins: [
    new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'test.html',
      template: 'src/assets/test.html'
    })
  ]
}
```

## Troubleshooting

Running `npm run start` uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve the files virtually. The resulting css and js files do not actually get written to disk. If you want to see what the files look like, you can run this in a separate terminal:

```
$ webpack --watch
```
