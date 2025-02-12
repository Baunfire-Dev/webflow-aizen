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
                ease: "power2.out",
                duration: 0.8
            }
        })

        if (navbar.length) {
            entranceTL.fromTo(navbar,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.4 }
            );
        }

        if (heroContainer.length) {
            entranceTL.fromTo(heroContainer,
                { opacity: 0 },
                { opacity: 1 },
                "<0.2"
            );
        }

        if (heroDescriptionBlock.length) {
            entranceTL.fromTo(heroDescriptionBlock,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                "<0.2"
            );
        }

        if (heroImage.length) {
            entranceTL.fromTo(heroImage,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                "<0.2"
            );
        }

        if (logoCarouselContainer.length) {
            entranceTL.fromTo(logoCarouselContainer,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                "<0.4"
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
    };

    const handlePaginationAutoScroll = () => {
        const collections = $(".w-dyn-list");
        if (!collections.length) return;

        collections.each(function () {
            const self = $(this);
            const target = self.find(".w-dyn-items");

            const paginationItems = self.find(".w-pagination-wrapper").children();
            if (!paginationItems.length) return;

            paginationItems.click(function () {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 140 },
                    ease: "circ.out",
                    overwrite: true
                });
            })
        });
    };

    const handleTableHover = () => {
        var $grid = $('.grid-tbl');
        if (!$grid.length) return;

        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        if (isMobile) return;

        var gridTemplateColumns = $grid.css('grid-template-columns');
        var columns = gridTemplateColumns.trim().split(/\s+/).length;

        var gridMap = [];
        function ensureRow(rowIndex) {
            while (gridMap.length < rowIndex) {
                var newRow = [];
                for (var i = 0; i < columns; i++) {
                    newRow.push(false);
                }
                gridMap.push(newRow);
            }
        }

        $('.grid-tbl-cell').each(function () {
            var colSpan = parseInt($(this).attr('col-span'), 10) || 1;
            var rowSpan = parseInt($(this).attr('row-span'), 10) || 1;
            var placed = false;
            var startCol = 0;
            for (var r = 0; !placed; r++) {
                ensureRow(r + 1);
                for (var c = 0; c < columns; c++) {
                    if (c + colSpan > columns) break;
                    var blockFree = true;
                    for (var rr = r; rr < r + rowSpan; rr++) {
                        ensureRow(rr + 1);
                        for (var cc = c; cc < c + colSpan; cc++) {
                            if (gridMap[rr][cc]) {
                                blockFree = false;
                                break;
                            }
                        }
                        if (!blockFree) break;
                    }
                    if (blockFree) {
                        startCol = c + 1;
                        for (var rr = r; rr < r + rowSpan; rr++) {
                            for (var cc = c; cc < c + colSpan; cc++) {
                                gridMap[rr][cc] = true;
                            }
                        }
                        placed = true;
                        break;
                    }
                }
            }
            $(this).attr('data-column', startCol);
        });

        $('.grid-tbl-cell').hover(
            function () {
                if (window.matchMedia("(max-width: 767px)").matches) return;
                var col = $(this).attr('data-column');
                $('.grid-tbl-cell[data-column="' + col + '"]').not('[bg="pink"]').not('[data-column="1"]').addClass('highlight');
            },
            function () {
                if (window.matchMedia("(max-width: 767px)").matches) return;
                var col = $(this).attr('data-column');
                $('.grid-tbl-cell[data-column="' + col + '"]').not('[bg="pink"]').not('[data-column="1"]').removeClass('highlight');
            }
        );
    };

    const handleIntegrationsSearch = () => {
        const els = $(".integ.section");
        if (!els.length) return;

        const pinGuide = (self) => {
            const contentArea = self.find(".integ-list");
            const pinEL = self.find(".integ-guide-inner");

            if (!contentArea.length || !pinEL.length) return;

            const mm = gsap.matchMedia();
            let pinST = null;

            mm.add({
                isDesktop: `(min-width: 992px)`,
                isMobile: `(max-width: 991.98px)`,
            }, (context) => {
                let { isDesktop, isMobile } = context.conditions;

                if (isDesktop) {
                    if (!pinST) {
                        pinST = ScrollTrigger.create({
                            trigger: pinEL,
                            pin: pinEL,
                            pinSpacing: false,
                            start: "top 100px",
                            endTrigger: contentArea,
                            end: () => `+=${contentArea.outerHeight() - pinEL.outerHeight()}px`,
                            refreshPriority: 1,
                            invalidateOnRefresh: true
                        })
                    }
                }

                if (isMobile) {
                    if (pinST) {
                        pinST.kill(true);
                        pinST = null;
                    }
                }

                return () => {
                    if (pinST) {
                        pinST.kill(true);
                        pinST = null;
                    }
                }
            });
        };

        const highlightAnchors = (self) => {
            const anchors = $(".integ-anchor");
            const groups = self.find(".integ-group");
            
            if (!groups.length || !anchors.length) return;

            groups.each(function () {
                const subSelf = $(this);
                
                const trigger = subSelf.attr("id");
                if (!trigger) return;

                const target = self.find(`.integ-anchor[anchor='${trigger}']`);
                if (!target.length) return;

                ScrollTrigger.create({
                    trigger: subSelf,
                    start: "top 60%",
                    end: "bottom 60%",
                    markers: true,
                    onEnter: () => handleAnchorState(target, anchors),
                    onEnterBack: () => handleAnchorState(target, anchors)
                });
            });

            anchors.each(function() {
                const subSelf = $(this);

                const trigger = subSelf.attr("anchor");
                if (!trigger) return;

                const target = self.find(`.integ-group#${trigger}`);
                if (!target.length) return;

                subSelf.click(function() {
                    gsap.to(window, {
                        duration: 0.6,
                        scrollTo: { y: target, offsetY: 140, autoKill: true },
                        ease: "circ.out",
                        overwrite: true,
                    });
                })
            });

            const handleAnchorState = (target, anchors) => {
                anchors.removeClass("active");
                target.addClass("active");
            }
        };

        els.each(function () {
            const self = $(this);
            const searchInput = self.find(".integ-search input");
            const contentArea = self.find(".integ-list");
            const items = self.find(".integ-icon");

            searchInput.on("keyup", function (e) {
                e.preventDefault();
                let searchInput = $(this).val().toLowerCase();

                if (searchInput) {
                    self.addClass("is-searching");
                    items.removeClass("active");
                    items.each(function () {
                        const subSelf = $(this);
                        const company = subSelf.attr("company").toLowerCase();

                        if (company.includes(searchInput)) {
                            subSelf.addClass("active");
                        }
                    });
                } else {
                    self.removeClass("is-searching");
                    items.addClass("active");
                }

                ScrollTrigger.refresh();

                gsap.to(window, {
                    duration: 0.6,
                    scrollTo: { y: contentArea, offsetY: 140, autoKill: true },
                    ease: "circ.out",
                    overwrite: true,
                });

                $(this).focus();
            });

            pinGuide(self);
            highlightAnchors(self);
        });
    };

    handleIntegrationsSearch();


    pageEntrance();
    scrollTextReveal();
    initializeCarousels();
    homeButtonsHighlight();
    animatePrivacyPolicyElements();
    handleTableHover();

    if (window.matchMedia("(min-width: 992px)").matches) {
        DTCTTabloopDesktop();
    }

    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
        'cmsload',
        (filterInstances) => {
            handlePaginationAutoScroll();
        },
    ]);

    ScrollTrigger.refresh();
});
