var metalsmith = require('metalsmith'),
  branch = require('metalsmith-branch'),
  collections = require('metalsmith-collections'),
  excerpts = require('metalsmith-excerpts'),
  markdown = require('metalsmith-markdown'),
  permalinks = require('metalsmith-permalinks'),
  serve = require('metalsmith-serve'),
  layouts = require('metalsmith-layouts'),
  watch = require('metalsmith-watch'),
  moment = require('moment'),
  Handlebars = require('handlebars')
  fs = require('fs')
  extname = require('path').extname
  cssnext = require('cssnext')
  browserSync = require('metalsmith-browser-sync');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Handlebars.registerHelper('formatDate', function (date) {
  return moment(Date.parse(date)).format('DD MMM YYYY');
});

var styles = function (config) {
  return function (files, metalsmith, done) {
    var css = '';

    for (var file in files) {
      if ('.css' !== extname(file)) continue;
      css += files[file].contents.toString();
      delete files[file];
    }

    var result = cssnext(css);

    css = result;

    files['assets/style.css'] = {
      contents: new Buffer(css)
    };

    done();
  }
}

var buildSite = metalsmith(__dirname)
  .metadata({
    site: {
      title: 'The Other Side of Empathy',
      url: process.env.NODE_ENV === 'production' ? 'http://the-other-side-of-empathy.com' : 'http://localhost:3000'
    }
  })
  .source(process.env.SRC || './src')
  .destination(process.env.BUILD || './build')
  .use(styles())
  .use(markdown())
  .use(excerpts())
  .use(collections({
    posts: {
      pattern: 'posts/**.html',
      sortBy: 'publishDate',
      reverse: true
    }
  }))
  .use(branch('posts/**.html')
       .use(permalinks({
         pattern: 'posts/:title',
         relative: false
       }))
  )
  .use(branch('!posts/**.html')
       .use(branch('!index.md').use(permalinks({
         relative: false
       })))
  )
  .use(layouts({
    engine: 'handlebars',
    moment: moment,
    directory: './templates'
  }));

if (process.env.NODE_ENV !== 'production') {
  buildSite.use(browserSync({
    files: ['src/**/*', 'templates/**/*']
  }))
}

buildSite.build(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Site build complete');
  }
});
