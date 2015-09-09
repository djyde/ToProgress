/* 
** ToProgress v0.1.1
** http://github.com/djyde/ToProgress
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.ToProgress = factory()
  }
})(this, function() {

  // Animation Detection
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent();

  function ToProgress(opt, selector) {
    // Attributes
    this.progress = 0;
    this.options = {
      id: 'top-progress-bar',
      color: '#F44336',
      height: '2px',
      duration: 0.2
    };
    if (opt && typeof opt === 'object') {
      for (var key in opt) {
        this.options[key] = opt[key];
      }
    }
    this.options.opacityDuration = this.options.duration * 3;
    this.progressBar = document.createElement('div');

    // Initialization
    this.progressBar.id = this.options.id;
    this.progressBar.setCSS = function(style) {
      for(var property in style){
        this.style[property] = style[property];
      }
    }
    this.progressBar.setCSS({
      "position": selector ? "relative" : "fixed",
      "top": "0",
      "left": "0",
      "right": "0",
      "background-color": this.options.color,
      "height": this.options.height,
      "width": "0%",
      "transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
      "-moz-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
      "-webkit-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s"
    });

    // Create the Progress Bar
    if (selector) {
      var el = document.querySelector(selector);
      if (el) {
        if (el.hasChildNodes()) {
          el.insertBefore(this.progressBar, el.firstChild);
        } else {
          el.appendChild(this.progressBar);
        }
      }
    } else {
      document.body.appendChild(this.progressBar);
    }
  }

  ToProgress.prototype.transit = function() {
    this.progressBar.style.width = this.progress + '%';
  }

  ToProgress.prototype.getProgress = function() {
    return this.progress;
  }

  ToProgress.prototype.setProgress = function(progress, callback) {
    this.show();
    if (progress > 100) {
      this.progress = 100;
    } else if (progress < 0) {
      this.progress = 0;
    } else {
      this.progress = progress;
    }
    this.transit();
    callback && callback();
  }

  ToProgress.prototype.increase = function(toBeIncreasedProgress, callback) {
    this.show();
    this.setProgress(this.progress + toBeIncreasedProgress, callback);
  }

  ToProgress.prototype.decrease = function(toBeDecreasedProgress, callback) {
    this.show();
    this.setProgress(this.progress - toBeDecreasedProgress, callback);
  }

  ToProgress.prototype.finish = function(callback) {
    var that = this;
    this.setProgress(100, callback);
    this.hide();

    transitionEvent && this.progressBar.addEventListener(transitionEvent, function(e) {
      that.reset();
      that.progressBar.removeEventListener(e.type, arguments.callee);
    });
  }

  ToProgress.prototype.reset = function(callback) {
    this.progress = 0;
    this.transit();
    callback && callback();
  }

  ToProgress.prototype.hide = function() {
    this.progressBar.style.opacity = '0';
  }

  ToProgress.prototype.show = function() {
    this.progressBar.style.opacity = '1';
  }

  return ToProgress
})