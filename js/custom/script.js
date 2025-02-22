$(document).ready(function () {
    const pageEntrance = () => {
        const navbar = $(".navbar");
        const heroContainer = $(".hero-container");
        const heroDescriptionBlock = $(".hero-description-block:not(.is-default)");
        const heroImage = $(".hero-image:not(.is-default)");

        const logoCarouselContainer = $(".logo-carousel-inner");
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

    const heroDefaultAnimation = () => {
        const els = $(".h-anim");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);
            const content = self.find(".h-anim-content");
            const image = self.find(".h-anim-image");

            const tl = gsap.timeline({
                trigger: self,
                start: "top 60%",
                invalidateOnRefresh: true
            })

            if (content) {
                tl.fromTo(content,
                    {
                        autoAlpha: 0,
                        y: 100,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.4,
                        ease: Power2.easeOut
                    }
                )
            }

            if (image) {
                tl.fromTo(image,
                    {
                        autoAlpha: 0,
                        y: 100,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: Power2.easeOut,
                    },
                    (image && content) && "<0.2"
                )
            }
        })
    };

    const slideUpAnimation = () => {
        const els = $(".slide-up");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);

            gsap.fromTo(self,
                {
                    autoAlpha: 0,
                    y: 60,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: self,
                        start: () => "top 60%",
                        // markers: true,
                        refreshPriority: 1,
                        invalidateOnRefresh: true
                    },
                    onComplete: () => {
                        gsap.set(self, {
                            clearProps: "transform"
                        })
                    }
                }
            )
        })
    };

    const createCarousel = (el, params) => {
        const carousel = $(`${el}`);
        if (!carousel.length) return;

        carousel.on('refreshed.owl.carousel', function (e) {
            ScrollTrigger.refresh();
        });

        carousel.owlCarousel({ ...params });
    };

    const initializeCarousels = () => {
        // createCarousel(".lc-owl-carousel", {
        //     margin: 112,
        //     loop: true,
        //     autoWidth: true,
        //     nav: false,
        //     autoplay: true,
        //     items: 8,
        //     autoplayTimeout: 5000,
        //     autoplayHoverPause: false,
        //     slideTransition: 'linear',
        //     autoplaySpeed: 6000,
        //     smartSpeed: 6000,
        //     responsive: {
        //         0: {
        //             margin: 50,
        //         },
        //         768: {
        //             margin: 112,
        //         }
        //     }
        // });

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
            },
            loop: false,
            rewind: true,
        });

        createCarousel(".testimonial-owl-carousel", {
            margin: 48,
            loop: false,
            rewind: true,
            autoWidth: true,
            items: 1,
            autoPlay: false,
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
            const stickyNav = self.find(".sntcc-sticky-nav");
            const buttons = self.find(".sntcc-sticky-nav-item");

            const panels = self.find(".two-column-content-section");
            if (!panels.length) return;

            ScrollTrigger.create({
                trigger: stickyNav,
                start: "top 140px",
                end: "bottom top",
                endTrigger: "body",
                toggleClass: { targets: stickyNav, className: "pinned" },
            });

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

    const handlePrivacyPolicyTOC = () => {
        const els = $(".privacy-policy-container");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);
            const menuItems = self.find(".toc-menu");
            const contentItems = self.find(".pp-content-container");

            contentItems.each(function () {
                const subSelf = $(this);
                const id = subSelf.attr("id");
                const target = self.find(`.toc-menu[href='#${id}']`);

                if (!id || !target.length) return;

                ScrollTrigger.create({
                    trigger: subSelf,
                    start: "top 20%",
                    end: "bottom 20%",
                    // markers: true,
                    onEnter: () => handleMenuState(target, menuItems),
                    onEnterBack: () => handleMenuState(target, menuItems)
                });
            });

            menuItems.first().addClass("active");
        });

        const handleMenuState = (btn, buttons) => {
            buttons.removeClass("active");
            btn.addClass("active");
        }
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
            let target = self.find(".w-dyn-items");
            const filter = self.parents('.all-resources-container').find('.all-resources-filter');

            if (filter.length) {
                target = filter;
            }

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

        const highlightAnchors = (self) => {
            const anchors = self.find(".integ-anchor");
            const groups = self.find(".integ-group");
            const select = self.find(".integ-select select");

            if (!groups.length || !anchors.length) return;

            groups.each(function () {
                const subSelf = $(this);

                const trigger = subSelf.attr("id");
                if (!trigger) return;

                const target = self.find(`.integ-anchor[anchor='${trigger}']`);
                if (!target.length) return;

                ScrollTrigger.create({
                    trigger: subSelf,
                    start: () => "top center",
                    end: () => "bottom center",
                    invalidateOnRefresh: true,
                    onEnter: () => handleAnchorState(target, anchors, trigger, select),
                    onEnterBack: () => handleAnchorState(target, anchors, trigger, select)
                });
            });

            anchors.each(function (index) {
                const subSelf = $(this);

                const trigger = subSelf.attr("anchor");
                if (!trigger) return;

                const target = self.find(`.integ-group#${trigger}`);
                if (!target.length) return;

                subSelf.click(function () {
                    let offset = (window.innerHeight - target.outerHeight()) / 2;
                    select.val(trigger);

                    if (window.matchMedia("(max-width: 991.98px)").matches) {
                        offset = 140;
                    }

                    gsap.to(window, {
                        duration: 0.6,
                        scrollTo: { y: target, offsetY: offset, autoKill: true },
                        ease: "circ.out",
                        overwrite: true,
                    });
                });

                const text = subSelf.text().trim();
                const option = $('<option></option>').attr('value', trigger).text(text);
                select.append(option);
            });

            select.on('change', function () {
                const selectedValue = $(this).val();
                const target = self.find(`.integ-anchor[anchor='${selectedValue}']`);
                if (!target.length) return;
                target.trigger("click");
            });
        };

        const handleAnchorState = (target, anchors, trigger, select) => {
            anchors.removeClass("active");
            target.addClass("active");
            select.val(trigger);
        }

        els.each(function () {
            const self = $(this);
            const searchInput = self.find(".integ-search input");
            const anchors = $(".integ-anchor");
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

                if (window.matchMedia("(max-width: 991.98px)").matches) {
                    gsap.to(window, {
                        duration: 0.6,
                        scrollTo: { y: self.find(".integ-guide-inner"), offsetY: 140, autoKill: true },
                        ease: "circ.out",
                        overwrite: true,
                    });
                } else {
                    anchors.first().trigger("click");
                    anchors.removeClass("active");
                    anchors.first().addClass("active");
                }

                $(this).focus();
            });

            highlightAnchors(self);
        });
    };

    const allResourceSearch = () => {
        const els = $(".all-resources");
        if (!els.length) return;

        let typingTimer;
        const delay = 300;

        const syncSearchFields = (searchField, searchFieldFloating, container, searchCollectionList, emptyText) => {
            searchField.on("keyup", function (e) {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(() => {
                    const value = $(this).val();
                    searchFieldFloating.val(value);
                    handleResults(container, searchCollectionList, emptyText);
                }, delay);
            });

            searchFieldFloating.on("keyup", function (e) {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(() => {
                    const value = $(this).val();
                    searchField.val(value);
                    handleResults(container, searchCollectionList, emptyText);
                }, delay);
            });
        };

        const handleResults = (container, searchCollectionList, emptyText) => {
            if (searchCollectionList.css("display") === "none") {
                emptyText.css("display", "block");
            } else {
                emptyText.css("display", "none");
            }

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: container, offsetY: 140 },
                ease: "circ.out",
                overwrite: true
            });
        }

        els.each(function () {
            const self = $(this);
            const searchField = self.find(".search-field");
            const searchFieldFloating = self.find(".search-field-floating-open");
            const stickySearch = self.find(".search-outer-container");
            const searchCollectionList = self.find(".all-resource-list");
            const emptyText = self.find(".no-result");

            gsap.fromTo(stickySearch,
                {
                    autoAlpha: 0,
                },
                {
                    duration: 0.4,
                    autoAlpha: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: stickySearch,
                        start: "top 140px",
                        endTrigger: self,
                        end: "bottom 60%",
                        pin: true,
                        pinSpacing: false,
                        toggleActions: "play reverse play reverse",
                    }
                }
            );

            let resizeObserver = new ResizeObserver(() => {
                gsap.delayedCall(0.1, () => ScrollTrigger.refresh());
            });

            resizeObserver.observe(self[0]);
            syncSearchFields(searchField, searchFieldFloating, self, searchCollectionList, emptyText);
        });
    };

    const closeBioOnClickOutside = () => {
        const els = $(".bio-container");
        if (!els.length) return;

        $(document).on("click", ".bio-container", function (event) {
            if ($(event.target).closest('.bio-container-inner').length) {
                return;
            }

            $(this).find('.close-bio').trigger('click');
        });
    };

    const handleTableDropdowns = () => {
        const els = $(".dd");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);
            const head = self.find(".dd-head");
            const body = self.find(".dd-body");

            head.click(function() {
                self.toggleClass("active");

                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: self, offsetY: 140, autoKill: true },
                    ease: "circ.out",
                    overwrite: true
                });
                
                ScrollTrigger.refresh();
            })
        });
    };

    const handleHomeAccDropdowns = () => {
        const els = $(".home-acc .home-acc-inner");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);
            const accsContainer = self.find(".home-accs-container");
            const accs = self.find(".home-acc-item");
            if (!accs.length) return;

            let firstLoad = true;

            const images = self.find(".home-acc-image-outer");
            images.first().addClass("active");

            accs.each(function () {
                const subSelf = $(this);
                const head = subSelf.find(".home-acc-item-head");
    
                head.click(function() {
                    if (subSelf.hasClass("active")) {
                        subSelf.removeClass("active");
                    } else {
                        accs.removeClass("active");
                        subSelf.addClass("active");

                        const id = subSelf.attr("acc-id");
                        const target = self.find(`.home-acc-image-outer[acc-id="${id}"]`);

                        if (target.length) {
                            images.removeClass("active");
                            target.addClass("active");
                        }
                    }
                    
                    if (!firstLoad) {
                        const target = window.matchMedia("(max-width: 992px)").matches ? accsContainer : self;

                        gsap.to(window, {
                            duration: 1,
                            scrollTo: { y: target, offsetY: 140, autoKill: true },
                            ease: "circ.out",
                            overwrite: true
                        });
                    }
                        
                    ScrollTrigger.refresh();
                    firstLoad = false;
                })
            });

            accs.first().find(".home-acc-item-head").trigger("click");
        });
    };

    const formResizeRefresh = () => {
        const els = $(".w-form");
        if (!els.length) return;

        els.each(function () {
            const self = $(this);

            let resizeObserver = new ResizeObserver(() => {
                gsap.delayedCall(0.1, () => ScrollTrigger.refresh());
            });

            resizeObserver.observe(self[0]);
        });
    };

    allResourceSearch();
    pageEntrance();
    scrollTextReveal();
    homeButtonsHighlight();
    handlePrivacyPolicyTOC();
    handleTableHover();
    handleIntegrationsSearch();
    heroDefaultAnimation();
    handleTableDropdowns();
    handleHomeAccDropdowns();
    formResizeRefresh();

    if (window.matchMedia("(min-width: 992px)").matches) {
        DTCTTabloopDesktop();
    }

    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
        'cmsload',
        (filterInstances) => {
            initializeCarousels();
            handlePaginationAutoScroll();
            closeBioOnClickOutside();
            slideUpAnimation();
        },
    ]);

    ScrollTrigger.refresh();
});
