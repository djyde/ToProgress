# ToProgress

[![NPM version](https://img.shields.io/npm/v/toprogress.svg?style=flat-square)](https://www.npmjs.com/package/toprogress)
[![npm](https://img.shields.io/npm/dt/toprogress.svg)](https://www.npmjs.com/package/toprogress)
[![npm](https://img.shields.io/npm/l/toprogress.svg)](https://www.npmjs.com/package/toprogress)

A lightweight (2.2 KB), no-dependency top progress bar library.

# Demo

http://djyde.github.io/ToProgress

# Screenshot

####Desktop
![desktop](http://ww4.sinaimg.cn/large/62580dd9gw1et3i1t9amjj218b0q5juw.jpg)

####Mobile
![mobile](http://ww2.sinaimg.cn/large/62580dd9gw1et41eqm2usg20f00qo7if.gif)

# Quick Start
```
var options = {
  color: '#EEE',
  duration: 0.2,
  height: '2px'
}
var topbar = new ToProgress(options);
```

# Support

* IE >= 10
* Chrome
* Firefox
* Safari

# Use cases

If you are using ToProgress.js in production, just tell us.


# API

### new ToProgress(options[,selector])

* options
  * **id** - the id of auto-created progress bar element
  * **color** - progress bar color
  * **height** - progress bar height 
  * **duration** - increase duration (seconds)

* **selector** - valid css selector, if is defined, progress bar will be put on the top of the element. Only find the first element.

### .increase(progress[,callback])
* **progress** - percentage number

### .decrease(progress[,callback])
* **progress** - percentage number

### .setProgress(progress[,callback])
* **progress** - percentage number

### .reset([,callback])

### .finish([,callback])

### .getProgress()
return current progress (percentage number)

### .show()
### .hide()

# License
MIT License
