const http = require('http');
const express = require('express');
const path = require('path');
const _ = require("underscore");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const sass = require('node-sass');
const browserify = require('browserify');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(methodOverride());

const port = process.env.PORT || 4001;
const SAMPLESET = require('./sampleset');

app.get("/",
  function(req, res, next) {
    ejs.renderFile(__dirname+'/sampleset.ejs', { sampleset: SAMPLESET }, function(err, result) {
      if (err) return next(err);
      res.send(result);
    });
  }
);

app.get('/lens.js', function (req, res, next) {
  browserify({ debug: true, cache: false })
    .add(path.join(__dirname, "boot.js"))
    .bundle()
    .on('error', function(err, data){
      console.error(err.message);
      res.send('console.log("'+err.message+'");');
    })
    .pipe(res);
});

const handleError = function(err, res) {
  console.error(err);
  res.status(400).json(err);
};

const renderSass = function(cb) {
  sass.render({
    file: path.join(__dirname, "lens.scss"),
    sourceMap: true,
    outFile: 'lens.css',
  }, cb);
};

app.get('/lens.css', function(req, res) {
  renderSass(function(err, result) {
    if (err) return handleError(err, res);
    res.set('Content-Type', 'text/css');
    res.send(result.css);
  });
});

app.get('/lens.css.map', function(req, res) {
  renderSass(function(err, result) {
    if (err) return handleError(err, res);
    res.set('Content-Type', 'text/css');
    res.send(result.map);
  });
});

// Serve files from root dir
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'assets')));

// Serve Lens in dev mode
// --------
http.createServer(app).listen(port, function() {
  console.log("Lens running on port " + port);
  console.log("http://127.0.0.1:"+port+"/");
});
