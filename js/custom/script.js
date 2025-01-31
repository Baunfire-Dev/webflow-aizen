$(document).ready(function () {
    const pageEntrance = () => {
        const navbar = $(".navbar");
        const heroContainer = $(".hero-container");
        const heroDescriptionBlock = $(".hero-description-block");
        const heroImage = $(".hero-image");

        const logoCarouselContainer = $(".logo-carousel-container");
        const thinBannerSection = $(".thin-banner-block");

        const entranceTL = gsap.timeline({
            defaults: {
                ease: "power2.out"
            }
        })

        if (navbar.length) {
            entranceTL.fromTo(navbar,
                { y: -100 },
                { duration: 1, y: 0 }
            );
        }

        if (heroContainer.length) {
            entranceTL.fromTo(heroContainer,
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                "<0.2"
            );
        }

        if (heroDescriptionBlock.length) {
            entranceTL.fromTo(heroDescriptionBlock,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "<0.2"
            );
        }

        if (heroImage.length) {
            entranceTL.fromTo(heroImage,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "<0.2"
            );
        }

        if (logoCarouselContainer.length) {
            gsap.fromTo(logoCarouselContainer,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
            );
        }

        if (thinBannerSection.length) {
            gsap.fromTo(thinBannerSection,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
            );
        }

        // Navbar background color change on scroll
        const navbar2 = document.querySelector(".navbar");
        if (navbar2) {
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
    };

    const createCarousel = (el, params) => {
        const carousel = $(`${el}`);
        if (!carousel.length) return;

        carousel.owlCarousel({ ...params });
    };

    const initializeCarousels = () => {
        createCarousel(".lc-owl-carousel", {
            margin: 112,
            loop: true,
            autoWidth: true,
            nav: false,
            autoplay: true,
            items: 8,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
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
        });

        createCarousel(".tcl-owl-carousel", {
            margin: 72,
            loop: true,
            autoWidth: true,
            nav: false,
            autoplay: true,
            items: 8,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            slideTransition: 'linear',
            autoplaySpeed: 6000,
            smartSpeed: 6000,
            responsiveClass: true,
            responsive: {
                0: {
                    margin: 32,
                },
                767: {
                    margin: 72,
                }
            }
        });

        createCarousel(".cci-owl-carousel", {
            margin: 22,
            loop: false,
            autoWidth: true,
            items: 4,
            nav: true,
            navText: [$('.arrow-left'), $('.arrow-right')],
            rewindNav: true,
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
        });

        createCarousel(".testimonial-owl-carousel", {
            margin: 48,
            loop: false,
            autoWidth: true,
            items: 1,
            nav: true,
            navText: [$('.t-arrow-left'), $('.t-arrow-right')],
            rewindNav: true,
            dots: true,
            dotsEach: true,
            responsiveClass: true,
            responsive: {
                0: {
                    autoWidth: false
                },
                991: {
                    autoWidth: true
                }
            }
        });

        createCarousel(".fcs-owl-carousel", {
            loop: true,
            items: 1,
            nav: true,
            navText: [$('.t-arrow-left'), $('.t-arrow-right')],
            rewindNav: true,
            dots: true,
            dotsEach: true,
        });
    }

    const homeButtonsHighlight = () => {
        const els = $(".home-button-highlight-container");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);
            const buttons = self.find(".sntcc-sticky-nav-item");

            const panels = self.find(".two-column-content-section");
            if (!panels.length) return;

            panels.each(function () {
                const subSelf = $(this);
                const trigger = subSelf.attr("trigger");
                if (!trigger) return;

                const target = $(`.sntcc-sticky-nav-item#${trigger.replace('-container', '')}`);
                if (!target.length) return;

                ScrollTrigger.create({
                    trigger: subSelf,
                    start: "top 60%",
                    end: "bottom 60%",
                    onEnter: () => handlePanelState(target, buttons),
                    onEnterBack: () => handlePanelState(target, buttons)
                });
            });
        })

        const handlePanelState = (btn, buttons) => {
            buttons.removeClass("active");
            btn.addClass("active");
        }
    };

    const animatePrivacyPolicyElements = () => {
        const elements = [
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

        elements.forEach(({ selector, trigger }) => {
            const ppelement = document.querySelector(selector);
            const pptriggerElement = document.querySelector(trigger);

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
    };

    const scrollTextReveal = () => {
        const textReveals = $('.reveal-type');
        if (!textReveals.length) return;

        textReveals.each(function () {
            const subSelf = $(this);
            const bg = subSelf.data("bg-color");
            const fg = subSelf.data("fg-color");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: subSelf,
                    start: 'top 90%',
                    end: 'top 30%',
                    scrub: 2,
                }
            })

            const text = new SplitType(subSelf, { types: 'words' });
            if (!text.words.length) return;

            text.words.forEach(word => {
                tl.fromTo(word,
                    {
                        color: bg,
                    },
                    {
                        color: fg,
                        duration: 1,
                        ease: "none",
                    }
                );
            });
        })
    };

    const DTCTTabloopDesktop = () => {
        setTimeout(function () {
            var $current = $('.dtct-tabs-menu').children('.w--current:first');
            var $next = $current.next();
            if ($next.length === 0) {
                $next = $('.dtct-tabs-menu').children().first();
            }
            $next.removeAttr("href").trigger('click');
            DTCTTabloopDesktop();
        }, 10000);
    }

    pageEntrance();
    scrollTextReveal();
    initializeCarousels();
    homeButtonsHighlight();
    animatePrivacyPolicyElements();

    if (window.matchMedia("(min-width: 992px)").matches) {
        DTCTTabloopDesktop();
    }
});
