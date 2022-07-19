$(document).ready(function() {
    $('.numbers button').click(onNumberClick);

    function onNumberClick(){
      $('.numbers button').removeClass('number-click')
      $(this).addClass('number-click');
      
      let rating = $(this).text();
      $('.rating span').text(rating);

      $('.submit').click(onSubmitClick);
    }
 
     function onSubmitClick(){
       $('.box-second').addClass('submit-click');
     }
  })