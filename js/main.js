//----------------------LANDING TOP------------------------//
// logo fades in over image when page first loads
// prompt user to click 1 of 3 colored circles
// on click
	// scroll down to "erlyn design" div with that color filled in bottle

// if narrow screen (mobile)
	// same as above

//----------------------NAVIGATION------------------------//

// active page underlined, others faded
// when hovering over other nav element
	// underline slides up from bottom
	// this element unfades

// clicking on nav element
	// remove underline from all others
	// underline sticks here, becomes active
	// all others nav elements fade
	// slides down homepage to related div

// if narrow screen (mobile)
	// only show logo and hamburger icon
	// on click/tap hamburger
		// transforms to X
		// slide in nav elements from right
		// on click/tap nav element
			// slide down page to appropriate div
		// on click/tap X
			// transform back to hamburger icon
			// slide out nav elements to right

//----------------------THE ERLYN DESIGN DIV------------------------//
// Bottle sticks to middle center of page
	// as user scrolls, fade in one "feature" and leader line at a time
	// scrolling further, fade out first set of features and fade in second set

// if narrow screen (mobile)
	// position bottle graphic center with circle touch points
	// when user taps circle, show text in overlay
	// tap X to close and open others if desired

//----------------------HOW ERLYN WORKS 1 DIV------------------------//
// on scrolling down...
	// Bottle gets smaller, and anchors to center of screen, fixed position
	// background party image fades in
	// music notes fade up and bottle shakes
	// text 1 fades in
	// bottle rises up a bit
	// text 1 fades out, text 2 fades in
	// drinking glass slides in from right, stops under bottle and bottle rotates, liquid drains
	// glass slides out to left
	// ^ repeat glass sliding in and out
	// text 2 fades out, text 3 fades in
	// bottle rotates back upright, now empty

// if narrow screen (mobile)
	// show static image of glasses being filled from the Erlyn bottle

//----------------------HOW ERLYN WORKS 2 DIV------------------------//
// on scroll down further...
	// background image of distillery fades in
	// text 3 out, text 4 in, bottle slides down and left, and whiskey barrel icon fades in above it
	// liquid pours into bottle and fills up
	// google map fades in to the right with location pins, "become a partner" beneath
	// on click partner button
		// info form pops in front of screen asking for contact info
		// if fields not submitted, highlight in red
		// otherwise display success message and dismiss window

// if narrow screen (mobile)
	// show static image of erlyn bottle being filled from a tap at distillery
	// show map with location pins below
	// on tap "partner" button beneath map
		// info form requesting contact info

//----------------------HOW ERLYN WORKS 3 DIV------------------------//
// on scroll down further...
	// background image of shelf fades in
	// bottle slides over to shelf next to 2 other bottles
	// text 5 fades in

// if narrow screen (mobile)
	// show static image of erlyn bottle back on shelf next to others

//----------------------ORDER DIV------------------------//
// three order packages pop in
	// on hover of any, slightly magnifies in front of others, border turns same color as order button
	
	// on click order button
$('.order-button').on('click', function() {
	$('.modal').addClass('show-modal');
});

$('.close-x').on('click', function() {
	$('.modal').removeClass('show-modal');
});
		// info form pops in front of screen asking for contact and billing info
		// if fields not submitted, highlight in red
		// otherwise display success message and dismiss window

// if narrow screen (mobile)
	// three order packages are 100% width, stacked on top of one another
	// on click "order" button in any package
		// info form requesting contact info


//----------------------OTHER------------------------//
// Loading image is the erlyn bottle filling up
// 404 page is the erlyn bottle tipping over and spilling