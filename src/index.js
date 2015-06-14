;(function(){
  window.onload = function(){


    var options = {
      // the values below are default value
      id: 'top-progress-bar', // the id of auto-created top bar element 
      color: '#F44336', // top bar color
      height: '2px', // top bar height
      duration: '.2' // increase duration
    }

    var progressBar = new ToProgress(options);

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

    $id('reset').addEventListener('click',function(){
      progressBar.setProgress(0);
    })

    $id('finish').addEventListener('click',function(){
      progressBar.finish();
    })

    $id('set').addEventListener('click',function(){
      progressBar.setProgress(35);
    })

  }

})()