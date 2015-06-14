/* 
** ToProgress v0.1.0 
** http://github.com/djyde/ToProgress
*/

!(function(w){
  w.ToProgress = function(opt,selector){
    this.options = {
      id: 'top-progress-bar',
      color: '#F44336',
      height: '2px',
      duration: '.2'
    }

    if(opt && typeof opt === 'object'){
      for(var key in opt){
        this.options[key] = opt[key]
      }
    }

    this.progressBar = document.createElement('div');
    this.progressBar.id = this.options.id;

    if (selector) {
      var els = document.querySelectorAll(selector);
      for (var i = 0; i < els.length; i++) {
        els[i].insertBefore(this.progressBar,els[i].firstChild);
      };
    } else {
      document.querySelector('body').appendChild(this.progressBar);
    }

    // init progress bar style
    this.progressBar.setCSS = function(style){
      for(var property in style){
        this.style[property] = style[property];
      }
    }
    this.progressBar.setCSS({
      "position": selector ? "relatvie" : "fixed",
      "top": "0",
      "left": "0",
      "right": "0",
      "background-color": this.options.color,
      "height": this.options.height,
      "width": "0%",
      "-webkit-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.duration * 3 + "s"
    })

  }

  ToProgress.prototype.getProgress = function(){
    return parseInt(this.progressBar.style.width);
  }

  ToProgress.prototype.setProgress = function(progress){
    this.show();
    if (progress > 100) {
      this.progressBar.style.width = '100%';
    } else {
      this.progressBar.style.width = progress + '%';
    }
  }

  ToProgress.prototype.increase = function(progress){
    this.show();
    var currentProgress = this.getProgress();
    if (currentProgress === 100) {

    };
    if (currentProgress + progress > 100) {
      this.progressBar.style.width = '100%';
    } else {
      this.progressBar.style.width = currentProgress + progress + '%';
    }
  }

  ToProgress.prototype.decrease = function(progress){
    this.show()
    var currentProgress= this.getProgress();
    if (currentProgress - progress < 0) {
      this.progressBar.style.width = '0%';
    } else {
      this.progressBar.style.width = currentProgress - progress + '%';
    }
  }

  ToProgress.prototype.finish = function(){
    this.progressBar.style.width = '100%';
    this.hide();
    $this = this;
    var interval = setInterval(function(){
      $this.progressBar.style.width = '0';
      clearInterval(interval);
    },$this.options.duration * 3 * 1000)
  }

  ToProgress.prototype.hide = function(){
    this.progressBar.style.opacity = '0';
  }

  ToProgress.prototype.show = function(){
    this.progressBar.style.opacity = '1';
  }
})(window)
