$(document).ready(function () {
    $('.save-pdf-button').on('click', function () {
        window.print();
    });

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
