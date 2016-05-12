/*global define:false */
$.fn.revealText = function (options) {
    $('.first-link').on('click', function(e){
      e.preventDefault();
      $('.swing-first').addClass('flip');
      $('.swing-first .back').fadeOut(1000);
    });

    $('.second-link').on('click', function(e){
      e.preventDefault();
      $('.swing-second').addClass('flip');
      $('.swing-second .back').fadeOut(1000);
    });

    $('.third-link').on('click', function(e){
      e.preventDefault();
      $('.swing-third').addClass('flip');
      $('.swing-third .back').fadeOut(1000);
    });

    $('.fourth-link').on('click', function(e){
      e.preventDefault();
      $('.swing-fourth').toggleClass('flip');
      $('.swing-fourth .back').fadeOut(1000);
    });

    $('.fifth-link').on('click', function(e){
      e.preventDefault();
      $('.swing-fifth').toggleClass('flip');
      $('.swing-fifth .back').fadeOut(1000);
    });

    $('.sixth-link').on('click', function(e){
      e.preventDefault();
      $('.swing-sixth').toggleClass('flip');
      $('.swing-sixth .back').fadeOut(1000);
    });

    $('.seventh-link').on('click', function(e){
      e.preventDefault();
      $('.swing-seventh').toggleClass('flip');
      $('.swing-seventh .back').fadeOut(1000);
      $('.swing-eight').delay(2000).queue(function(){
          $(this).addClass('flip');
          $('.swing-eight .back').fadeOut(1000) .clearQueue();
      });
      $('.swing-nine').delay(4000).queue(function(){
          $(this).addClass('flip');
          $('.swing-nine .back').fadeOut(1000) .clearQueue();
      });
    });
    //       $('.swing-seventh').delay(4000).queue(function(){
    //         $(this).addClass('flip');
    //         $('.swing-seventh .back').fadeOut(1000) .clearQueue();


    // $('.fifth-link').on('click', function(e){
    //   e.preventDefault();
    //   $('.swing-sixth').addClass('flip');
    //   $('.swing-sixth .back').fadeOut(1000);
    //     $('.swing-sixth-odd').delay(2000).queue(function(){
    //         $(this).addClass('flip');
    //         $('.front-sixth-odd').addClass('clicked');
    //         $('.swing-sixth-odd .back').fadeOut(1000) .clearQueue();
    //     });
    //       $('.swing-seventh').delay(4000).queue(function(){
    //         $(this).addClass('flip');
    //         $('.swing-seventh .back').fadeOut(1000) .clearQueue();
    //     });
    //     $('.swing-eight').delay(6000).queue(function(){
    //       $(this).addClass('flip');
    //       $('.swing-eigth .back').fadeOut(1000) .clearQueue();
    //   });
    // });
};
