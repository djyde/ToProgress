# ToProgress

A lightweight (1.6 KB), no-dependcy top progress bar library.

# Demo

http://djyde.github.io/ToProgress

# Quick Start
```
var options = {
  color: '#EEE',
  duration: '.2',
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

* **selector** - valid css selector, if is defined, progress bar will be put on the top of the element.

### .increase(progress)
* **progress** - percentage number

### .decrease(progress)
* **progress** - percentage number

### .setProgress(progress)
* **progress** - percentage number

### .getProgress()
return current progress (percentage number)

### .finish()
### .show()
### .hide()

# License
MIT License