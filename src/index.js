;(function(){
  window.onload = function(){


    var options = {
      id: 'top-progress-bar',
      color: '#F44336',
      height: '2px',
      duration: 0.2
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