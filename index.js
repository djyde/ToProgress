var TopProgress = function(opt){
  this.options = {
    el: 'top-progress-bar',
    color: '#69C',
    height: '6px',
    duration: '.4s'
  }

  if(opt && typeof opt === 'object'){
    for(var key in opt){
      this.options[key] = opt[key]
    }
  }

  this.progressBar = document.createElement('div');
  this.progressBar.id = this.options.el;

  document.getElementsByTagName('body')[0].appendChild(this.progressBar);

  // init progress bar style
  this.progressBar.setCSS = function(style){
    for(var property in style){
      this.style[property] = style[property];
    }
  }
  this.progressBar.setCSS({
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "background-color": this.options.color,
    "height": this.options.height,
    "width": "0%",
    "-webkit-transition": "width " + this.options.duration
  })

}

TopProgress.prototype.get = function(){
  return parseInt(this.progressBar.style.width);
}

TopProgress.prototype.set = function(width){
  if (width > 100) {
    this.progressBar.style.width = '100%';
  } else {
    this.progressBar.style.width = width + '%';
  }
}

TopProgress.prototype.increase = function(width){
  var currentWidth = this.get();
  if (currentWidth + width > 100) {
    this.progressBar.style.width = '100%';
  } else {
    this.progressBar.style.width = currentWidth + width + '%';
  }
}

TopProgress.prototype.decrease = function(width){
  console.log(width);
}

TopProgress.prototype.hide = function(){
  this.progressBar.style.display = 'none';
}

TopProgress.prototype.show = function(){
  this.progressBar.style.display = 'inline';
}

;(function(){
  window.onload = function(){
    var progressBar = new TopProgress();

    var $id = function(id){
      return document.getElementById(id)
    }

    $id('increase').addEventListener('click',function(){
      progressBar.increase(5);
    })

    $id('hide').addEventListener('click',function(){
      progressBar.hide();
    })

    $id('show').addEventListener('click',function(){
      progressBar.show();
    })

    $id('auto').addEventListener('click',function(){
      progressBar.increase(20);
      var interval = setInterval(function(){
        progressBar.increase(20);
        if(parseInt(progressBar.get()) >= 100 ){
          clearInterval(interval);
        }
      },1000)
    })

    $id('reset').addEventListener('click',function(){
      progressBar.set(0);
    })

  }

})()