$(document).ready(function() {
	$('#tagcanvas').attr('width', window.innerWidth-20);
	$('#tagcanvas').attr('height', window.innerHeight-20);
	if( ! $('#tagcanvas').tagcanvas({
		textColour : '#ffffff',
		maxSpeed : 0.05,
		maxBrightness : 0.6,
		freezeActive:true,
		shuffleTags:true,
		shape:'sphere',
		zoom:1.6,
		noSelect:true,
		textFont:null,
		pinchZoom:true,
		freezeDecel:true,
		fadeIn:3000,
		initial: [0.3,-0.1],
		depth : 0.8,
		wheelZoom: false
	})) {
		// TagCanvas failed to load
		$('#tagsContainer').hide();
	}	

	//Smooth scroll
  $('a[data-scroll]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).on('resize', function(){
	$('#tagcanvas').attr('width', window.innerWidth-20);
	$('#tagcanvas').attr('height', window.innerHeight-20);
	$('#tagcanvas').tagcanvas("reload");
});
