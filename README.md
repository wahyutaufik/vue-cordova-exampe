# vue-cordova-example
[Vue Cordova Example](https://github.com/wahyutaufik/vue-cordova-example) Build cordova-based applications with vue.

Integrate Cordova into Vue Cli App With Vuetifyjs

![Screenshot](https://github.com/wahyutaufik/vue-cordova-example/blob/master/src/assets/ss.png)

## How To
Clone this project
```sh
$ git clone https://github.com/wahyutaufik/vue-cordova-example.git
$ cd vue-cordova-example
$ npm i
```
## Usage
Prepare
```sh
$ npm run cordova-prepare # prepare for build (you can run this command, when you checkouted your project from GIT, it's like npm install)
```
Android
```sh
$ npm run cordova-serve-android # Development Android
$ npm run cordova-build-android # Build Android
$ npm run cordova-build-only-www-android # Build only files to src-cordova
```
IOS
```sh
$ npm run cordova-serve-ios # Development IOS
$ npm run cordova-build-ios # Build IOS
$ npm run cordova-build-only-www-ios # Build only files to src-cordova
```
OSX
```sh
$ npm run cordova-serve-osx # Development OSX
$ npm run cordova-build-osx # Build OSX
$ npm run cordova-build-only-www-osx # Build only files to src-cordova
```
Browser
```sh
$ npm run cordova-serve-browser # Development Browser
$ npm run cordova-build-browser # Build Browser
$ npm run cordova-build-only-www-browser # Build only files to src-cordova
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Credits
Credits go to
* @m0dch3n https://github.com/m0dch3n/vue-cli-plugin-cordova

Because my approach for this project, was inspired by theirs!