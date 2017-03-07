<script type="text/javascript" src="/js/main.js"></script> 
<script src="/js/classie.js"></script>
<script src="/js/menu.js"></script>

<script>
if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
	$('body').on("mousewheel", function () {
		// remove default behavior
		event.preventDefault(); 

		//scroll without smoothing
		var wheelDelta = event.wheelDelta;
		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta);
	});
}
var $hamburger = $(".hamburger");

$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	console.log($hamburger.hasClass("is-active"));
	
	$( ".menu" ).fadeToggle( 1200, "linear" );
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74048933-2', 'auto');
ga('send', 'pageview');
</script>