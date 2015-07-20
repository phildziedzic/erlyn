//----------------------LANDING TOP------------------------//
// logo fades in over image when page first loads
// prompt user to click 1 of 3 colored circles
// on click
	// scroll down to "erlyn design" div with that color filled in bottle

// if narrow screen (mobile)
	// same as above

//----------------------NAVIGATION------------------------//
// $("#nav-home").on("click", function(e) {
// 	e.preventDefault();
// 	$('html, body').animate({
// 	    scrollTop: $("nav").offset().top
// 	}, 500);
// });

$(".hamburger").on("click", function(e) {
    e.preventDefault();
    $('#menu').toggleClass('mobile-slide');
    $('#menu').toggleClass('hidden');
});

$("#nav-design").on("click", function(e) {
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $(".erlyn-design").offset().top
	}, 500);
});

$("#nav-how").on("click", function(e) {
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $(".how-it-works").offset().top
	}, 500);
});

$("#nav-order").on("click", function(e) {
	e.preventDefault();
	$('html, body').animate({
	    scrollTop: $(".order").offset().top
	}, 500);
});

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



// ANIMATE ONE BY ONE, CAN'T GET WORKING

// var distance0 = $('.erlyn-design').offset().top;
// $(window).on ('scroll', function() {
//     if ($(this).scrollTop() > distance0) {
//         $('.position1').fadeIn("slow");
//         $('.position2').fadeIn("slow");
//         $('.position3').fadeIn("slow");
//         $('.position4').fadeIn("slow");
//     } else {
//         $('.feature-circle').fadeOut("slow");
//     }
// });



$('.position1').hover( function () {
	$('#durable').toggleClass('faded');
});

$('.position2').hover( function () {
	$('#recycled').toggleClass('faded');
});

$('.position3').hover( function () {
	$('#insulation').toggleClass('faded');
});

$('.position4').hover( function () {
	$('#nonslip').toggleClass('faded');
});

// if narrow screen (mobile)
	// position bottle graphic center with circle touch points
	// when user taps circle, show text in overlay
	// tap X to close and open others if desired

//----------------------HOW ERLYN WORKS 1 DIV------------------------//
// if narrow screen (mobile)
	// show static image of glasses being filled from the Erlyn bottle

var distance1 = $('#party').offset().top;

$(window).on ('scroll', function() {
    if ($(this).scrollTop() > distance1) {
        $('.stream1').slideDown('slow');
        $('.party-glass').fadeIn('slow');
    } else {
        $('.stream1').slideUp('slow');
        $('.party-glass').fadeOut('slow');
    }
});


//----------------------HOW ERLYN WORKS 2 DIV------------------------//

var distance2 = $('#refill').offset().top;

$(window).on ('scroll', function() {
    if ($(this).scrollTop() > distance2) {
        $('.stream2').slideDown('slow');
        $('.refill-filled').fadeIn('slow');
    } else {
        $('.stream2').slideUp('slow');
        $('.refill-filled').fadeOut('slow');
    }
});

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

var distance3 = $('#home').offset().top;

$(window).on ('scroll', function() {
    if ($(this).scrollTop() > distance3) {
        $('.home-bottle').fadeIn('slow');
    } else {
        $('.home-bottle').fadeOut('slow');
    }
});

//----------------------ORDER DIV------------------------//
// three order packages pop in
	// on hover of any, slightly magnifies in front of others, border turns same color as order button
	
	// on click order button
$('.order-button').on('click', function(e) {
	$('.modal').addClass('show-modal');
	e.preventDefault();
});

$('.close-x').on('click', function(e) {
	$('.modal').removeClass('show-modal');
	e.preventDefault();
});

$(function(){

    //set global variables and cache DOM elements for reuse later
    var form = $('#contact-form'),
        formElements = form.find('input[type!="submit"],textarea'),
        formSubmitButton = form.find('input[type="submit"]'),
        errorNotice = $('#errors'),
        successNotice = $('#success'),
        loading = $('#loading'),
        errorMessages = {
            required: ' is a required field',
            email: 'You have not entered a valid email address for the field: '
        }
    
    //to ensure compatibility with HTML5 forms, we have to validate the form on submit button click event rather than form submit event. 
    //An invalid html5 form element will not trigger a form submit.
    formSubmitButton.on('click', function(){
        var formok = true,
            errors = [];
            
        formElements.each(function(){
            var name = this.name,
                nameUC = name.ucfirst(),
                value = this.value,
                placeholderText = this.getAttribute('placeholder'),
                type = this.getAttribute('type'), //get type old school way
                isRequired = this.getAttribute('required');
                
            //if HTML5 formfields are supported            
            if( (this.validity) && !this.validity.valid ){
                formok = false;
                
                //if there is a value missing
                if(this.validity.valueMissing){
                    errors.push(nameUC + errorMessages.required);    
                }
                //if this is an email input and it is not valid
                else if(this.validity.typeMismatch && type == 'email'){
                    errors.push(errorMessages.email + nameUC);
                }
                
                this.focus(); //safari does not focus element an invalid element
                return false;
            }
            
            //if this is a required element
            if(isRequired){    
                //if HTML5 input required attribute is not supported
                if(!Modernizr.input.required){
                    if(value == placeholderText){
                        this.focus();
                        formok = false;
                        errors.push(nameUC + errorMessages.required);
                        return false;
                    }
                }
            }

            //if HTML5 input email input is not supported
            if(type == 'email'){     
                if(!Modernizr.inputtypes.email){ 
                    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                     if( !emailRegEx.test(value) ){    
                        this.focus();
                        formok = false;
                        errors.push(errorMessages.email + nameUC);
                        return false;
                    }
                }
            }
           
        });
        
        //if form is not valid
        if(!formok){
            
            //show error message 
            showNotice('error',errors);
            
        }
        //if form is valid
        else {
        	loading.show();
            $.ajax({
                url: form.attr('action'),
                type: form.attr('method'),
                data: form.serialize(),
                success: function(){
                    showNotice('success');
                    form.get(0).reset();
                    loading.hide();
                }
            });
        }
        
        return false; //this stops submission off the form and also stops browsers showing default error messages
        
    });

    //other misc functions
    function showNotice(type,data)
    {
        if(type == 'error'){
            successNotice.hide();
            errorNotice.find("li[id!='info']").remove();
            for(x in data){
                errorNotice.append('<li>'+data[x]+'</li>');    
            }
            errorNotice.show();
        }
        else {
            errorNotice.hide();
            successNotice.show();    
        }
    }
    
    String.prototype.ucfirst = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
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