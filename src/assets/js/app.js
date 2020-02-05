import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
import './_catalog';

// import './lib/slick.min.js';
import slick from 'slick-carousel';

$(document).foundation();

let sliderNew = $('.ba-slider-new');

sliderNew.slick({
	rows: 2,
	slidesPerRow: 2,
	dots: true,
	responsive: [
		{
		  breakpoint: 1280,
		  settings: {
				rows: 2,
				slidesPerRow: 1		  
			}
		},
		{
		  breakpoint: 640,
		  settings: {
			slidesPerRow: 2
		  }
		}
		
	 ]
})