/*jshint unused:false*/
var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery.min');
    encode = require('../../../bower_components/js-md5/js/md5');

require('../../../bower_components/ajaxchimp/jquery.ajaxchimp.min')
require('./components/mailchimp');
$('body').mailchimp();

require('./components/revealText');
$('.panel--wrapper').revealText();

require('./components/contactForm');
$('.contact--form').contactForm();
