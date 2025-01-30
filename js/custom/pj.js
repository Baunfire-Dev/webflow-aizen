/** $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.navbar').removeClass('nav-top').addClass('nav-scroll');
    } else {
      $('.navbar').removeClass('nav-scroll').addClass('nav-top');
    }
  });
*/
$(document).ready(function() {
    
    $('.lc-owl-carousel').owlCarousel({
        margin:112,
        loop:true,
        autoWidth:true,
        nav: false,
        autoplay:true,
        items:8,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000,
        responsive: {
            0: {
                margin: 50, 
            },
            768: {
                margin: 112,
            }
        }
    })

    $('.tcl-owl-carousel').owlCarousel({
        margin:72,
        loop:true,
        autoWidth:true,
        nav: false,
        autoplay:true,
        items:8,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        slideTransition: 'linear',
        autoplaySpeed: 6000,
        smartSpeed: 6000,
        responsiveClass:true,
        responsive:{
            0:{
                margin:32,
            },
            767:{
                margin:72,
            }
        }
    })

    $('.cci-owl-carousel').owlCarousel({
        margin:22,
        loop:false,
        autoWidth:true,
        items:4,
        nav:true,
        navText: [$('.arrow-left'),$('.arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
        responsive: {
            0: {    
                items: 2,
                autoWidth: true, 
                margin: 16,    
            },
            410: {      
                items: 2,
                autoWidth: true,
                margin: 22,
            }
        }
    })

    $('.testimonial-owl-carousel').owlCarousel({
        margin:48,
        loop:false,
        autoWidth:true,
        items:1,
        nav:true,
        navText: [$('.t-arrow-left'),$('.t-arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:false
            },
            991:{
                autoWidth:true
            }
        }
    })

    $('.fcs-owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        navText: [$('.t-arrow-left'),$('.t-arrow-right')],
        rewindNav : true,
        dots: true, 
        dotsEach: true, 
    })

    function DTCTTabloopDesktop() {
        setTimeout(function() {
            var $current = $('.dtct-tabs-menu').children('.w--current:first');
            var $next = $current.next();
            if ($next.length === 0) {
                $next = $('.dtct-tabs-menu').children().first();
            }
            $next.removeAttr("href").trigger('click');
            DTCTTabloopDesktop();
        }, 10000);
    }
    

    gsap.registerPlugin(ScrollTrigger);

function animateElementsWithScroll(elements) {
    elements.forEach(({ selector, trigger }) => {
        const element = document.querySelector(selector);
        const triggerElement = document.querySelector(trigger);

        if (element && triggerElement) {
            const overlineElement = element.querySelector(".overline");
            gsap.set(element, { opacity: 0.5 });

            // Animate the main element
            if (element) {
                gsap.fromTo(
                    element,
                    { opacity: 0.5 },
                    {
                        opacity: 1,
                        padding: "8px 16px 8px 8px",
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "top 65%",
                            end: "bottom 65%",
                            toggleActions: "play reset play reset",
                            immediateRender: false, // Prevent auto-scroll
                            once: true, // Trigger only once
                            onLeave: () => gsap.set(element, { opacity: 0.5 }),
                            onLeaveBack: () => gsap.set(element, { opacity: 0.5 }),
                        },
                    }
                );
            }

            // Animate the overline element if it exists
            if (overlineElement) {
                gsap.to(overlineElement, {
                    display: "block",
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top 65%",
                        end: "bottom 65%",
                        toggleActions: "play reset play reset",
                        immediateRender: false, // Prevent auto-scroll
                        once: true, // Trigger only once
                        markers: false, // Enable debugging if needed
                        onLeave: () => gsap.set(element, { opacity: 0.5 }),
                        onLeaveBack: () => gsap.set(element, { opacity: 0.5 }),
                    },
                });
            }
        }
    });
}

    
    // Example usage
    const elements = [
        { selector: "#data", trigger: "[trigger='data-container']" },
        { selector: "#machine-learning", trigger: "[trigger='machine-learning-container']" },
        { selector: "#infrastructure", trigger: "[trigger='infrastructure-container']" } 
    ];
    

// PRIVACY POLICY
// Set initial opacity for elements

function animatePrivacyPolicyElements(elements) {
    elements.forEach(({ selector, trigger }) => {
        const ppelement = document.querySelector(selector);
        const pptriggerElement = document.querySelector(trigger);

        // Check if both the element and its trigger exist
        if (ppelement && pptriggerElement) {
            gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" });

            gsap.fromTo(ppelement, 
                { 
                    color: "rgba(21, 21, 21)",
                    opacity: 0.35
                }, 
                { 
                    color: "var(--navy)", 
                    opacity: 1,
                    duration: 0.1, 
                    scrollTrigger: {
                        trigger: pptriggerElement, 
                        start: "top 10%",
                        end: "bottom 10%", 
                        toggleActions: "play reset play reset", 
						markers: false, // Enable debugging
                        onLeave: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" }), 
                        onLeaveBack: () => gsap.set(ppelement, { opacity: 0.35, color: "rgba(21, 21, 21)" })
                    }
                }
            );
        } else {
            //console.warn(`Privacy Policy Element or trigger not found: ${selector} / ${trigger}`);
        }
    });
}


const privacyPolicyElements = [
    { selector: "#TOC-M1", trigger: "#title1" },
    { selector: "#TOC-M2", trigger: "#title2" },
    { selector: "#TOC-M3", trigger: "#title3" },
    { selector: "#TOC-M4", trigger: "#title4" },
    { selector: "#TOC-M5", trigger: "#title5" },
    { selector: "#TOC-M6", trigger: "#title6" },
	{ selector: "#TOC-M7", trigger: "#title7" },
	{ selector: "#TOC-M8", trigger: "#title8" },
	{ selector: "#TOC-M9", trigger: "#title9" },
	{ selector: "#TOC-M10", trigger: "#title10" },
	{ selector: "#TOC-M11", trigger: "#title11" },
	{ selector: "#TOC-M12", trigger: "#title12" },
	{ selector: "#TOC-M13", trigger: "#title13" },
	{ selector: "#TOC-M14", trigger: "#title14" },
	{ selector: "#TOC-M15", trigger: "#title15" },
	{ selector: "#TOC-M16", trigger: "#title16" },
	{ selector: "#TOC-M17", trigger: "#title17" }
];

// ANIMATION
function initAnimations() {
    // Navbar animation
    const navbar = document.querySelector(".navbar");
    if(navbar){
    gsap.fromTo(navbar, 
        { y: -100 }, 
        { duration: 1, y: 0, ease: "power2.out" }
    );
    }

    // Hero container animation
    const hero_container = document.querySelector(".hero-container");
    if(hero_container){
    gsap.fromTo(hero_container, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: "power2.out" }
    );
}

    // Slide up the hero description block
    const hero_description_block = document.querySelector(".hero-description-block");
    if(hero_description_block){
    gsap.fromTo(hero_description_block, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );
}

    // Slide up the hero image
    const hero_image = document.querySelector(".hero-image");
    if(hero_image){
    gsap.fromTo(hero_image, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
}

    // Logo carousel container animation
    const logo_carousel_container = document.querySelector(".logo-carousel-container");
    if(logo_carousel_container){
    gsap.fromTo(logo_carousel_container, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
    );
}

 // thin-banner-section animation
 const thin_banner_section = document.querySelector(".thin-banner-block");
 if(thin_banner_section){
 gsap.fromTo(thin_banner_section, 
     { opacity: 0 }, 
     { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
 );
}

    // Navbar background color change on scroll
    const navbar2 = document.querySelector(".navbar");
    if (navbar2){
    gsap.to(navbar2, {
        backgroundColor: "rgba(255, 253, 248, 0.80)",
        backdropFilter: "blur(5.9px)",               
        ease: "power2.out",                           
        scrollTrigger: {
            trigger: "body",        
            start: "top -50px",   
            toggleActions: "play none none reverse", 
            scrub: true            
        }
    });
}


}


if (window.matchMedia("(min-width: 992px)").matches) {
    DTCTTabloopDesktop();
}

//   Reveal on scroll animation
function initRevealOnScroll() {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        const text = new SplitType(char, { types: 'chars' });
        if (text){
        gsap.fromTo(text.chars, 
            {
                color: bg,
            },
            {
                color: fg,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                    toggleActions: 'play play reverse reverse'
                }
            }
        );
    }

    });

 
}



function animateElementWithScrollTrigger(element, section, delay) {
    const elementdata = document.querySelector(element);
if(elementdata){
    gsap.fromTo(element, 
        { y: 100, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 1, 
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,   
                // markers:true,
                start: "top bottom", 
                end: "bottom top",
                toggleActions: "play none none reverse"       
            }
        }
    );
}
}

$('.save-pdf-button').on('click', function() {
    window.print();
});



// function ACDropdownLoops() {
//     setTimeout(function() {
//         var $current = $('.accordion-dropdown-block').children('.ac-dropdown:first');
//         var $next = $current.next();
//         if ($next.length === 0) {
//             $next = $('.accordion-dropdown-block').children().first();
//         }
//         $next.trigger('click');
//         ACDropdownLoops();
//     }, 5000);
// }

// ACDropdownLoops();

function copyCurrentLink(buttonClass) {
    $(buttonClass).on('click', function() {
      const currentLink = window.location.href; // Get the current page URL

      navigator.clipboard.writeText(currentLink).then(() => {
        alert('Page link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy link:', err);
      });
    });
  }


  

  // Function to update opacity based on select value
  function updateSelectOpacity(className) {
      if ($(className).val() === "") {
          $(className).css('opacity', '0.5');
      } else {
          $(className).css('opacity', '1');
      }
  }

  updateSelectOpacity('.type-select-field');
  updateSelectOpacity('.product-select-field');
  $('.type-select-field').on('change', function() {
      updateSelectOpacity('.type-select-field');
  });
  $('.product-select-field').on('change', function() {
    updateSelectOpacity('.product-select-field');
});


function handleFormSubmission() {
    if (localStorage.getItem('formSubmitted') === 'true') {
        $('.gated-form, .gated-form-bg').hide(); 
    }
    $(".gated-form-data").submit(function (e) { 
        e.preventDefault(); 
        $('.gated-form, .gated-form-bg').fadeOut("slow");
        // Calendly.initPopupWidget({
        //     url: 'https://calendly.com/arnavr-aizencorp/intro?hide_gdpr_banner=1&text_color=242424&primary_color=d5efff'
        // });
        localStorage.setItem('formSubmitted', 'true');
        setTimeout(function() {
            localStorage.removeItem('formSubmitted');
        }, 86400000); // 86400000 ms = 1 day
    });
    
    $(".book-a-demo-form").submit(function (e) { 
        e.preventDefault(); 
        Calendly.initPopupWidget({
                url: 'https://calendly.com/arnavr-aizencorp/intro?hide_gdpr_banner=1&text_color=242424&primary_color=d5efff'
            });
    });

    /* $(".contact-us-form").submit(function (e) { 
        e.preventDefault(); 
        Calendly.initPopupWidget({
                url: 'https://calendly.com/arnavr-aizencorp/intro?hide_gdpr_banner=1&text_color=242424&primary_color=d5efff'
            });
    }); */
    
    
}

let typingTimer;
const delay = 300;
let scrollTriggerInitialized = false; // Track if ScrollTrigger is already set


function toggleFloatingBlock(sectionClass, floatingClass, delay) {
  if (floatingClass && !scrollTriggerInitialized) {
    gsap.fromTo(
      floatingClass,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0,
        delay: delay,
        ease: "power2.out",
        immediateRender: false, // Prevents auto-scrolling when initialized
        scrollTrigger: {
          trigger: sectionClass,
          start: "top 200px",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          preventOverlaps: true, // Prevent overlapping animations
          once: true, // Ensure this only happens once
        },
      }
    );
    scrollTriggerInitialized = true; // Mark as initialized
  }
}

toggleFloatingBlock(".collection-list-3", ".search-block-floating", 0);

function syncSearchFields(class1, class2) {
  $(document).ready(function () {
    // Synchronize fields and debounce logic
    $(class1).on("input", function () {
      clearTimeout(typingTimer); // Clear previous debounce timer
      typingTimer = setTimeout(() => {
        const value = $(this).val();
        $(class2).val(value);

        // Check if no results and toggle the "no-result" block
        if ($(".collection-list-3").css("display") === "none") {
          console.log("no result");
          $(".no-result").css("display", "block");
        } else {
          $(".no-result").css("display", "none");
        }
      }, delay);
    });

    $(class2).on("input", function () {
      clearTimeout(typingTimer); // Clear previous debounce timer
      typingTimer = setTimeout(() => {
        const value = $(this).val();
        $(class1).val(value);

        // Check if no results and toggle the "no-result" block
        if ($(".collection-list-3").css("display") === "none") {
          console.log("no result");
          $(".no-result").css("display", "block");
        } else {
          $(".no-result").css("display", "none");
        }
      }, delay);
    });
  });
}

$('.search-field').on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    if ($('.collection-list-3').css('display') === 'none') {
      console.log('no result');
      $(".no-result").css('display', 'block');
    } else {
      $(".no-result").css('display', 'none');
    }
  }, delay);
});
  

$('.header-nav-dropdown').on('click', function () {
    $('.w-nav-overlay').css('top', '0px');
  });
  
  $('.nav-back').on('click', function () {
    setTimeout(function () {
      $('.w-nav-overlay').css('top', '104.375px');
    }, 50);
    console.log("back");
  });
  
  
  // Add the "w--open" class to elements with specific data attributes
//   $('[dropdown-toggle="default"]').addClass('w--open');
//   $('[dropdown-list="default"]').addClass('w--open');
//   $('[dropdown="default]').addClass('w--open');

  $('[dropdown-toggle="default').trigger('click');
  $('[dropdown="default').trigger('click');
   
  // Handle click event on elements with class `dropdown-wrap`
//   $('.accordion-dropdown-block-items').on('click', function () {
//     $('[dropdown-toggle="default"]').removeClass('w--open');
//     $('[dropdown-list="default"]').removeClass('w--open');
//   });



syncSearchFields('.search-field', '.search-field-floating-open');
handleFormSubmission();
copyCurrentLink('.copy-link-button');
animateElementWithScrollTrigger("._3-col-grid", "._3-col-grid", .3);
animateElementWithScrollTrigger(".sntcc-block", ".sntcc-block", .3);
animateElementWithScrollTrigger(".sntcc-sticky-nav", ".sntcc-sticky-nav", .3);
animateElementWithScrollTrigger("#data-container", "#data-container", .3);
animateElementWithScrollTrigger("#machine-learning-container", "#machine-learning-container", .3);
animateElementWithScrollTrigger("#infrastructure-container", "#infrastructure-container", .3);
animateElementWithScrollTrigger(".cta-banner-block", ".cta-banner-block", .3);
animateElementWithScrollTrigger(".five-cards-block", ".five-cards-block", .3);
animateElementWithScrollTrigger(".five-cards-grid-1", ".five-cards-grid-1", .3);
animateElementWithScrollTrigger(".five-cards-grid-2", ".five-cards-grid-2", .3);
animateElementWithScrollTrigger(".text-image-block", ".text-image-block", .3);
animateElementWithScrollTrigger(".cci-block", ".cci-block", .3);
animateElementWithScrollTrigger(".cci-cards", ".cci-cards", .3);
animateElementWithScrollTrigger(".testimonials-block", ".testimonials-block", .3);
animateElementWithScrollTrigger(".testimonials-cards-block", ".testimonials-cards-block", .3);
animateElementWithScrollTrigger(".resources-content", ".resources-content", .3);
animateElementWithScrollTrigger(".resources-grid", ".resources-grid", .3);
animateElementWithScrollTrigger(".global-cta-block", ".global-cta-block", .3);
animateElementWithScrollTrigger(".diagram-with-tabs-content-block", ".diagram-with-tabs-content-block", .3);
animateElementWithScrollTrigger(".diagram-with-tabs-content-tabs", ".diagram-with-tabs-content-tabs", .3);
animateElementWithScrollTrigger(".accordion-content", ".accordion-content", .3);
// animateElementWithScrollTrigger(".accordion-stack", ".accordion-stack", .3);
// animateElementWithScrollTrigger(".accordion-block", ".accordion-block", .3);
// animateElementWithScrollTrigger(".feature-content-container", ".feature-content-container", .3);
animateElementWithScrollTrigger(".text-with-logo-carousel-contentent", ".text-with-logo-carousel-contentent", .3);
animateElementWithScrollTrigger(".testimonial-cards-block", ".testimonial-cards-block", .3);
animateElementWithScrollTrigger(".feature-section-content-block", ".feature-section-content-block", .3);
animateElementWithScrollTrigger(".feature-section-grid", ".feature-section-grid", .3);
animateElementWithScrollTrigger(".solutions-content-block", ".solutions-content-block", .3);
animateElementWithScrollTrigger(".solutions-accordion", ".solutions-accordion", .3);
animateElementWithScrollTrigger(".logo-cards-data", ".logo-cards-data", .3);
animateElementWithScrollTrigger(".logo-cards-grid", ".logo-cards-grid", .3);
animateElementWithScrollTrigger("._3-up-card-grid-section-content", "._3-up-card-grid-section-content", .3);
animateElementWithScrollTrigger("._3-up-card-grid-section-grid", "._3-up-card-grid-section-grid", .3);
animateElementWithScrollTrigger(".featured-resource-title-block", ".featured-resource-title-block", .3);
animateElementWithScrollTrigger(".featured-resource-body", ".featured-resource-body", .3);

//animateElementWithScrollTrigger(".w-dyn-list", ".w-dyn-list", .3);
animateElementWithScrollTrigger(".about-us-hero-container", ".about-us-hero-container", .3);
animateElementWithScrollTrigger(".investor-logos-container", ".investor-logos-container", .3);
animateElementWithScrollTrigger("._3-up-card-grid-section-content", "._3-up-card-grid-section-content", .3);
animateElementWithScrollTrigger(".kpi-container", ".kpi-container", .3);
animateElementWithScrollTrigger(".team-heading-content", ".team-heading-content", .3);
animateElementWithScrollTrigger(".fitc-block", ".fitc-block", .3);
animateElementWithScrollTrigger("#featured-1", "#featured-1", .3);
animateElementWithScrollTrigger("#featured-2", "#featured-2", .3);
animateElementWithScrollTrigger("#featured-3", "#featured-3", .3);
animateElementWithScrollTrigger("#featured-4", "#featured-4", .3);
animateElementWithScrollTrigger("#featured-5", "#featured-5", .3);
animateElementWithScrollTrigger(".instruction-container", ".instruction-container", .3);

animateElementsWithScroll(elements);
animatePrivacyPolicyElements(privacyPolicyElements);
initAnimations();
initRevealOnScroll();


$(".ac-dropdown").click(function (e) {
    const imageSrc = $(this).find(".accordion-image-data").attr("src");
    const imageSrcset = $(this).find(".accordion-image-data").attr("srcset");

    const $image = $(".ac-image");
    // Set opacity to 0 to start the transition
    $image.css("opacity", "0");
    // Change the image src and srcset
    $image.attr("src", imageSrc);
    $image.attr("srcset", imageSrcset);
    // Wait for the new image to load, then fade it in
    $image.on("load", function() {
        $image.css("opacity", "1");
    });
});



});
