# ToProgress

A lightweight (2.2 KB), no-dependency top progress bar library.

# Demo

http://djyde.github.io/ToProgress

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