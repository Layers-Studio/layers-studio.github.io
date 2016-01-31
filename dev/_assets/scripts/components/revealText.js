/*global define:false */
$.fn.revealText = function (options) {
    $('.first-link').on('click', function(e){
      e.preventDefault();
      $('.swing-first').addClass('flip');
      $('.front-first').addClass('clicked');
      $('.swing-first .back').fadeOut(1000);
    });

    $('.second-link').on('click', function(e){
      e.preventDefault();
      $('.swing-second').addClass('flip');
      $('.front-second').addClass('clicked');
      $('.swing-second .back').fadeOut(1000);
    });

    $('.third-link').on('click', function(e){
      e.preventDefault();
      $('.swing-third').addClass('flip');
      $('.front-third').addClass('clicked');
      $('.swing-third .back').fadeOut(1000);
      $('.swing-fourth').delay(2000).queue(function(){
            $(this).addClass('flip');
            $('.front-fourth').addClass('clicked');
            $('.swing-fourth .back').fadeOut(1000) .clearQueue();
        });
    });

    $('.fourth-link').on('click', function(e){
      e.preventDefault();
      $('.swing-fourth-odd').toggleClass('flip');
      // $('.front-fourth-odd').toggleClass('clicked');
      $('.swing-fourth-odd .back').fadeOut(1000);
      $('.swing-fifth').delay(2000).queue(function(){
            $(this).addClass('flip');
            $('.front-fifth').addClass('clicked');
            $('.swing-fifth .back').fadeOut(1000) .clearQueue();
        });
    });

    $('.fifth-link').on('click', function(e){
      e.preventDefault();
      $('.swing-sixth').addClass('flip');
      $('.front-sixth').addClass('clicked');
      $('.swing-sixth .back').fadeOut(1000);
        $('.swing-sixth-odd').delay(2000).queue(function(){
            $(this).addClass('flip');
            $('.front-sixth-odd').addClass('clicked');
            $('.swing-sixth-odd .back').fadeOut(1000) .clearQueue();
        });
          $('.swing-seventh').delay(4000).queue(function(){
            $(this).addClass('flip');
            $('.front-seventh').addClass('clicked');
            $('.swing-seventh .back').fadeOut(1000) .clearQueue();
        });
        $('.swing-eight').delay(6000).queue(function(){
          $(this).addClass('flip');
          $('.front-eight').addClass('clicked');
          $('.swing-eigth .back').fadeOut(1000) .clearQueue();
      });
    });
};


// $('.swing-sixth').addClass('flip');
// $('.front-fifth').addClass('clicked');
// $('.swing-sixth .back').fadeOut(1000);
//   $('.swing-seventh').delay(2000).queue(function(){
//       $(this).addClass('flip');
//       $('.front-seventh').addClass('clicked');
//       $('.swing-seventh .back').fadeOut(1000) .clearQueue();
//   });
//     $('.swing-eight').delay(4000).queue(function(){
//       $(this).addClass('flip');
//       $('.front-eight').addClass('clicked');
//       $('.swing-eigth .back').fadeOut(1000) .clearQueue();
//   });
