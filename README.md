Lens for eLife
========

This is where the eLife version of Lens is configured.

## Deps

You need version '10.x' of Node.js, I use [NVM](https://github.com/nvm-sh/nvm) to manage my Node.js and NPM versions on a per-project basis.


You need version '2.x' of Python, I used [PyEnv](https://github.com/pyenv/pyenv) to manage Python versions on a per-project basis.

## Install

```
git clone https://github.com/elifesciences/lens-elife.git
cd lens-elife
nvm install 
nvm use
pyenv install
pvenv local
npm install
npm start
```

## Bundling

```
npm install
npm run bundle
```

You will find the bundled version in a folder called `dist`.