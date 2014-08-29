# Marionette App Boiler

>I love using Marionette to develop Apps.
I think Gulp is genious.
I have been amazed by Node.js & the tools built upon it, nee ExpressJS.
I reckon Backbone.Radio is a great step forward.
I highly recommend using TDD. It saves you time. Truly.

>I hate wasting time trying to piece together a coherent boiler plate from which I can start new projects.
 
>So I put together Marionette App Boiler to help me save time moving forward. If you want to use it, help yourself ;)

## Requirements
### NodeJS
Download and install [Node](http://node.org) to make use of the Node Package Manager

### BowerJS
`npm install -g bower`

## Setup
1. Download the repository and extract into your ~/Sites/ folder
2. On cmd line: `npm`
3. On cmd line: `bower`

## Start
1. On cmd line: `gulp`
2. In a browser: `localhost:8001`

## How it's laid out?
**src/index.html**
the parent HTML file

**src/require_main.js**
the requirejs.config and app bootstrap done here
    
**config/load.js**
called by *require_main.js* and enables JS libs to be specialized as reqd


**src/app.js**
the application file setup and configuration which then routes to sub-apps/modules

**apps/load.js**
 called by *src/apps.js* and loads all sub-apps/modules
 
**msgbus.js**
utilizes Backbone.Radio to provide global messaging (event driven) across all sub-apps. acts as a mediator.
    
**common/**
a place to define abstract classes that are used within the apps e.g. APPController, etc

## Further Reading
If you aren't familiar then check out these resources:

- [BackboneJS](http://backbonejs.org)
- [MarionetteJS](http://marionettejs.com)
- [GulpJS](http://gulpjs.com)
- [Mocha](http://visionmedia.github.io/mocha/)
- [Bower](http://bower.io/)
- [ExpressJS](http://expressjs.com/)

    
 
