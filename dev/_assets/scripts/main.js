/*global requirejs:false */
'use strict';

requirejs.config({
    baseUrl: '/scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        classie: '../../bower_components/classie/classie'
    }
});

// Show Me The Code
// ----------
require(['jquery'], function($){

    // A test to check jQuery is running
    console.log('jQuery test', $.now());

    // A test to check the modules get loaded correctly
    $('body').logWidth();
});

require(['jquery', 'revealText'], function($){
  console.clear();
    $('.first-link').on('click', function(e){
    e.preventDefault();
    $('.swing-first').toggleClass('flip');
    $('.front-first').toggleClass('clicked');
    $('.swing-first .back').fadeOut(1000);
    });

    $('.second-link').on('click', function(e){
    e.preventDefault();
    $('.swing-second').toggleClass('flip');
    $('.front-second').toggleClass('clicked');
    $('.swing-second .back').fadeOut(1000);
    });

    $('.third-link').on('click', function(e){
    e.preventDefault();
    $('.swing-third').toggleClass('flip');
    $('.front-third').toggleClass('clicked');
    $('.swing-third .back').fadeOut(1000);
    $('.swing-fourth').delay(2000).queue(function(){
          $(this).addClass('flip');
          $('.front-fourth').toggleClass('clicked');
          $('.swing-fourth .back').fadeOut(1000) .clearQueue();
      });
    });

    $('.fourth-link').on('click', function(e){
    e.preventDefault();
    $('.swing-fifth').toggleClass('flip');
    $('.front-second').toggleClass('clicked');
    $('.swing-fifth .back').fadeOut(1000);
    });

    $('.fifth-link').on('click', function(e){
    e.preventDefault();
    $('.swing-sixth').toggleClass('flip');
    $('.front-second').toggleClass('clicked');
    $('.swing-sixth .back').fadeOut(1000);
      $('.swing-seventh').delay(2000).queue(function(){
          $(this).addClass('flip');
          $('.front-seventh').toggleClass('clicked');
          $('.swing-seventh .back').fadeOut(1000) .clearQueue();
      });
        $('.swing-eight').delay(4000).queue(function(){
          $(this).addClass('flip');
          $('.front-eight').toggleClass('clicked');
          $('.swing-eigth .back').fadeOut(1000) .clearQueue();
      });
    });
});
