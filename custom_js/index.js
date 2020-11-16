$(document).ready(function(){
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
    if(scroll>50){
      $("#nav").css("background", "#696969");
    }
    else {
      $("#nav").css("background", "transparent");
    }
  })
})

$(document).ready(function(){
  $('.header').height($(window).height());
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})



