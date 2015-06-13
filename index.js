var TopProgress = function(opt){
  this.options = {
    color: '#69C',
    height: '12px',
    duration: '1s',
  }

  if(opt && typeof opt === 'object'){
    for(var key in opt){
      this.options[key] = opt[key]
    }
  }
}

TopProgress.prototype.increase = function(width){
  console.log(width);
}

TopProgress.prototype.decrease = function(width){
  console.log(width);
}

;(function(){
  window.onload = function(){
    var progressBar = new TopProgress();
  }
})()