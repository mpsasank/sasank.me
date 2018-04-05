//import '../css/main.scss';

$(document).ready(function() {
	$('#tagcanvas').attr('width', window.innerWidth-20);
	$('#tagcanvas').attr('height', window.innerHeight-20);
	if( ! $('#tagcanvas').tagcanvas({
		textColour : '#ffffff',
		outlineThickness : 0.5,
		outlineColour : '#fe0853',
		maxSpeed : 0.05,
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
		depth : 0.8
	})) {
		// TagCanvas failed to load
		$('#tagsContainer').hide();
	}	
});

$(window).on('resize', function(){
	$('#tagcanvas').attr('width', window.innerWidth-20);
	$('#tagcanvas').attr('height', window.innerHeight-20);
	$('#tagcanvas').tagcanvas("reload");
});