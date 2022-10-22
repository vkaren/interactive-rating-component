$(document).ready(function() {
    $('.numbers button').click(onNumberClick);

    function onNumberClick(event){
      $('.numbers button').removeClass('number-click')
      event.target.addClass('number-click');
      
      $('.rating span').text(event.target.text());

      $('.submit').click(onSubmitClick);
    }
 
     function onSubmitClick(){
       $('.box-second').addClass('submit-click');
     }
  })
