var count = 0;
(function($) {
    var i;
    for (i = 0; i < 6; i++) {
        $(".side_nav").append("<div class='side_nav_option opt" + i + "'></div>");
    }
    $('.opt0').click(function() {
        $.scrollTo({
            top: 0,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt1').click(function() {
        $.scrollTo({
            top: 2710,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt2').click(function() {
        $.scrollTo({
            top: 5910,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt3').click(function() {
        $.scrollTo({
            top: 8910,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt4').click(function() {
        $.scrollTo({
            top: 11500,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt5').click(function() {
        $.scrollTo({
            top: 20066,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt6').click(function() {
        $.scrollTo({
            top: 23000,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt7').click(function() {
        $.scrollTo({
            top: 25200,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.opt8').click(function() {
        $.scrollTo({
            top: 26300,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
    $('.contact_cta').click(function() {
        window.location.href = "/flavours#contact";
    });
    $("#continue_bt").hide()
    var offset;
    $("#continue_bt").hide();
    $(".side_nav").delay(2000).hide().fadeIn("slow", function() {
        checkNav()
    });

    function checkNav() {
        var $window = $(window);
        var scroll_position = $window.scrollTop();
        $('.scroll_position').html('Scroll: ' + scroll_position);
        setNav($('.opt0'), 0);
        setNav($('.opt1'), 2710);
        setNav($('.opt2'), 5910);
        setNav($('.opt3'), 8910);
        setNav($('.opt4'), 11500);
        setNav($('.opt5'), 20066);
        setNav($('.opt6'), 23000);
        setNav($('.opt7'), 25200);
        setNav($('.opt8'), 26100);

        function setNav(targ, val) {
            if (scroll_position >= val) {
                $(targ).addClass("side_nav_selected");
                if (val == 20066) {
                    $("#continue_bt").hide();
                } else {
                    $("#continue_bt").show();
                }
                offset = $(targ).position();
                $("#continue_bt").stop().animate({
                    top: offset.top
                }, 800, function() {
                    $(window).scroll(checkNav);
                });
            } else {
                $(targ).removeClass("side_nav_selected");
            }
        }
    }
    $("#stage-1 .layer-5").click(function() {
        $.scrollTo({
            top: 2710,
            left: 0
        }, 1000, {
            easing: 'easeInOutSine'
        });
    });
})(jQuery);