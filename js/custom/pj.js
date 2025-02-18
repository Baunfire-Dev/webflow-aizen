$(document).ready(function () {
    function animateElementWithScrollTrigger(element, section, delay) {
        const elementdata = document.querySelector(element);
        if (elementdata) {
            gsap.fromTo(element,
                { y: 60, opacity: 0 },
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
                    }
                }
            );
        }
    }

    $('.save-pdf-button').on('click', function () {
        window.print();
    });


    function copyCurrentLink(buttonClass) {
        $(buttonClass).on('click', function () {
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
    $('.type-select-field').on('change', function () {
        updateSelectOpacity('.type-select-field');
    });
    $('.product-select-field').on('change', function () {
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
            setTimeout(function () {
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

    $('.header-nav-dropdown').on('click', function () {
        //$('.w-nav-overlay').css('top', '0px');
    });

    $('.nav-back').on('click', function () {
        setTimeout(function () {
            $('.w-nav-overlay').css('top', '104.375px');
        }, 50);
        console.log("back");
    });

    
    handleFormSubmission();
    copyCurrentLink('.copy-link-button');
    animateElementWithScrollTrigger("._3-col-grid", "._3-col-grid", .3);
    animateElementWithScrollTrigger("._3-col-container", "._3-col-container", .3);
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
    animateElementWithScrollTrigger(".feature-content-container", ".feature-content-container", .3);
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
    // animateElementWithScrollTrigger("#featured-1", "#featured-1", .3);
    // animateElementWithScrollTrigger("#featured-2", "#featured-2", .3);
    // animateElementWithScrollTrigger("#featured-3", "#featured-3", .3);
    // animateElementWithScrollTrigger("#featured-4", "#featured-4", .3);
    // animateElementWithScrollTrigger("#featured-5", "#featured-5", .3);
    animateElementWithScrollTrigger(".instruction-container", ".instruction-container", .3);
    animateElementWithScrollTrigger(".modular-tbl .container", ".modular-tbl .container", .3);
    animateElementWithScrollTrigger(".integ-inner", ".integ-inner", .3);


    $(".ac-dropdown").click(function (e) {
        const imageSrc = $(this).find(".accordion-image-data").attr("src");
        const imageSrcset = $(this).find(".accordion-image-data").attr("srcset");
    
        const $image = $(".ac-image");
    
        // Set opacity to 0 to start the transition
        $image.css("opacity", "0");
    
        // Change the image src and srcset
        $image.attr("src", imageSrc);
        $image.attr("srcset", imageSrcset);
    
        // Wait for the new image to load, then fade it in with a 300ms delay
        //$image.on("load", function () {
            //setTimeout(function () {
                $image.css("opacity", "1");
            //}, 300); // Delay for 300ms
        //});
    });

    $('.social-link-wrapper').each(function() {
        var href = $(this).attr('href');
        if (href && href !== '#') {
            $(this).attr('style', 'visibility: visible;');
        } else {
            $(this).attr('style', 'visibility: hidden;');
        }
    });     
});
