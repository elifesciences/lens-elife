AMS Lens
========

## Prerequisites

You need to have Node.js >=0.10.x installed.

### Substance Screwdriver

We use a custom Python tool to manage Git repositories.
We didn't opt for using Git sub-modules as it doesn't make it easier but rather even more complicated.

To install Substance ScrewDriver do

```
$ git clone https://github.com/substance/screwdriver.git
```

and install it globally

```
$ cd screwdriver
$ sudo python setup.py install
```

You need to repeat that install step whenever you updated the screwdriver repo.

## Setup

1. Clone the repository

  ```
  $ git clone https://github.com/pkra/lens-ams.git
  ```

2. Fetch dependencies

  ```
  $ cd lens-ams
  $ substance --update
  ```

3. Run the server

  ```
  ~/projects/lens-ams $ node server
  Lens running on port 4001
  http://127.0.0.1:4001/
  ```

4. Open in browser

This will show you a simple index page with links to sample files.


5. Updates

To receive all new changes update the main repo and then use the screwdriver again

```
$ git pull
$ substance --update
```

## Bundling

You need to have `browserify` and `uglify-js` installed:

```
$ sudo npm install -g browserify uglify-js
```

A bundle is created via

```
$ substance --bundle
```

There are two options available (not-minified JS bundle, bundle with souremap):

```
$ substance --bundle nominify,sourcemap
```

To control which assets are bundled adjust the `assets` block in `.screwdriver/project.json`.

After bundling you can serve the bundle e.g. using

```
$ cd dist
$ pyhton -m SimpleHTTPServer
```

To open one of the bundled samples you need open the following URL in your browser

```
http://127.0.0.1:8000/doc.html?url=data/samples/preprocessed/bproc1.xml
```

> Adjust the 'url' parameter to open a different document.
