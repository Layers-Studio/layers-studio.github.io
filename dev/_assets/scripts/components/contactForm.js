/*global define:false */
$.fn.contactForm = function (options) {
      $('.contact--form-button').on('click', function(e){
        e.preventDefault();
        var $overlay = $('<div id="overlay"></div>');
        var $form = $('<form accept-charset="UTF-8" action="https://formkeep.com/f/457ca9ef69ee" method="POST"><input type="hidden" name="utf8" value="✓"><input type="email" name="email" placeholder="Your Email"><button type="submit">Submit</button></form>')
        var $content = $('<div class="overlay-inner column column__center column__12-of-12 column__12-of-12--small column__8-of-12--medium column__6-of-12--large"><div class="overlay-inner__inner"><h1>Contact us</h1><form class="contact--form" accept-charset="UTF-8" action="https://formkeep.com/f/457ca9ef69ee" method="POST"><input class="column column__12-of-12" type="hidden" name="utf8" value="✓"><input class="column column__12-of-12" type="text" name="full_name" placeholder="Your Name" required><textarea name="message" class="column column__12-of-12" cols="50" rows="10" placeholder="message" required></textarea><input class="column column__12-of-12" type="email" name="email" placeholder="Your Email" required><button class="column column__12-of-12 contact--form-button" type="submit">Submit</button></form></div></div>');
        var $close = $('<h2 class="close-lightbox">x</h2>');
        $('body').append($overlay);
        $('body').addClass('noscroll');
        $overlay.append($content);
        $content.append($close);
  			$close.on('click', function(){
  				$overlay.slideUp();
  				$('body').removeClass('noscroll');
  			});
        $overlay.show();
      });


    // function mailchimpSuccess(response){
  	// 		if (response.result === 'success') {
  	// 			var  $overlay = $('<div id="overlay"></div>');
  	// 			var $content = $('<div class="overlay-inner column column__center column__12-of-12 column__12-of-12--small column__8-of-12--medium column__6-of-12--large"><div class="overlay-inner__inner"><h1>thanks.</h1><h2>For signing up, we will email you with more information in due course for now why not follow us on <a href="https://twitter.com/LayersStudio" title="Follow is on twitter" title="Folow us on twitter">Twitter</a>.</h2></div></div>');
  	// 			var $close = $('<h2 class="close-lightbox">x</h2>');
  	// 			$('body').addClass('noscroll');
  	// 			$overlay.append($content);
  	// 			$content.append($close);
  	// 			$('body').append($overlay);
  	// 			$overlay.show();
  	// 			$close.on('click', function(){
  	// 				$overlay.slideUp();
  	// 				$('body').removeClass('noscroll');
  	// 			});
  	// 			$overlay.on('click', function(){
  	// 				$(this).slideUp();
  	// 				$('body').removeClass('noscroll');
  	// 			});
  	// 			var message = ('Thanks, for signing up');
  	// 			$('#mc-embedded-subscribe-form').html(message);
  	// 			$('#mc-embedded-subscribe-form').css({"color": "#454443"});
  	// 			$('#mc-embedded-subscribe-form').css({"max-width": "16em" , "font-size": "30px"});
  	// 		} else {
  	// 			var error = document.createElement('span');
  	// 			error.className = 'error-message';
  	// 			var resError = response.msg.slice(3);
  	// 			error.innerHTML = resError;
  	// 			$('.error-message').remove();
  	// 			$('#mc-embedded-subscribe-form').append(error);
  	// 		}
  	// 	}
    // });
};
