$(document).ready(function() {
    $('.menu-toggle').click(function(){
         $('.site-nav').toggleClass('site-nav-open', 500);
        $(this).toggleClass('open');
    });

  // Handle click anywhere to close modal
  $(document).bind("mousedown", function(e) {
    //console.log('hello');
    
  });
});
