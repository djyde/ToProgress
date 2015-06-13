;(function(){
  window.onload = function(){
    var progressBar = new TopProgress('body');

    var $id = function(id){
      return document.getElementById(id)
    }

    $id('increase').addEventListener('click',function(){
      progressBar.increase(5);
    })

    $id('decrease').addEventListener('click',function(){
      progressBar.decrease(5);
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
      progressBar.setProgress(0);
    })

  }

})()