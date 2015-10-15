# Gulp - Minifying CSS

## Dependencies
A `package.json` file is a list of all the `npm` modules you'll be using.
For convenience, you can run `npm install` in the same directory as your
`package.json` file to install all necessary packages.

Since we are going to using `gulp` in the command line, we'll need
to install it globally also: `sudo npm install gulp`

I included a `.gitgnore` file, this is a list of files I want git
to ignore when coding. It is conventional to ignore your external libraries,
such as the ones created in `node_modules/`

## Using `gulp`
I created a `gulpfile.js` for you. In it you'll see that I used a few plugins:
[gulp-uglifycss](https://www.npmjs.com/package/gulp-uglifycss) and
[gulp-rename](https://www.npmjs.com/package/gulp-rename)

Then in my `css` task, I define my "source", "uglify" it, "rename" it, then put it
in my current directory. To run this from the command line, you just run `gulp css`.
