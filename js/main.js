$(document).ready(function(){

    $(".left-bar ul .anime a:first-child ").click(function() {
        if ($(".left-bar .anime .a_lect ").is(":hidden")) {
            $(".left-bar .anime").css("height", "100%");
            $(".top_text").css("opacity", ".1");
            $(".left-bar .anime .a_lect ").fadeIn(600);
            $(".left-bar .anime .a_lect ").addClass("fadeInTop animated");
        } else {
            $(".top_text").css("opacity", "1");
            $(".left-bar .anime .a_lect ").fadeOut(600);
            $(".left-bar .anime .a_lect ").removeClass("fadeInTop animated");
            $(".left-bar .anime").css("height", "50px");
        };
    });

    $(".wrap-h h2").animated("fadeInUp", "fadeOutDown");
    $(".about-section .circle-element").animated("fadeIn", "fadeOut");
    $(".about-section .wrap-team-items").animated("fadeIn", "fadeOut");
    $(".wrap-text-block").animated("fadeIn", "fadeOut");
    $(".package-section .wrap-item").animated("fadeIn", "fadeOut");
    $("#left-news").animated("fadeIn", "fadeOut");
    $("#right-news").animated("fadeIn", "fadeOut");
    // Инициализирует карусель
    $(".start-slide").click(function(){
        $("#myCarousel2").carousel('cycle');
    });

    // Осуществляет переход на предыдущий слайд
    $(".prev-slide").click(function(){
        $("#myCarousel2").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide").click(function(){
        $("#myCarousel2").carousel('next');
    });

    $(".start-slide1").click(function(){
        $("#myCarousel1").carousel('cycle');
    });

    // Осуществляет переход на предыдущий слайд
    $(".prev-slide1").click(function(){
        $("#myCarousel1").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide1").click(function(){
        $("#myCarousel1").carousel('next');
    });
    $(".start-slide2").click(function(){
        $("#myCarousel3").carousel('cycle');
    });

    // Осуществляет переход на предыдущий слайд
    $(".prev-slide2").click(function(){
        $("#myCarousel3").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide2").click(function(){
        $("#myCarousel3").carousel('next');
    });
    $('#accordion').on('shown.bs.collapse', function (e) {
        var elem = e.target.previousElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
        elem.className = 'flaticon-arrows';
        var panelHeading = e.target.previousElementSibling;
        panelHeading.classList.add('active');
    });
    $('#accordion').on('hidden.bs.collapse', function (e) {
        var elem = e.target.previousElementSibling.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
        elem.className = 'flaticon-arrows-1';
        var panelHeading = e.target.previousElementSibling;
        panelHeading.classList.remove('active');
    });

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
        $(".links").toggleClass("hidden");
    });
    $(".links a").click(function () {
        $(".sandwich").removeClass("active");
        $(".links").addClass("hidden");
        }
    );
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
    jQuery(document).ready(function () {
        jQuery("#back-top").hide();
        jQuery(function () {
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 300) {
                    jQuery('#back-top').fadeIn()
                } else {
                    jQuery('#back-top').fadeOut()
                }
            });
            jQuery('#back-top a').click(function () {
                jQuery('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false
            })
        })
    });
    /* Tree()
 * ======
 * Converts a nested list into a multilevel
 * tree view menu.
 *
 * @Usage: $('.my-menu').tree(options)
 *         or add [data-widget="tree"] to the ul element
 *         Pass any option as data-option="value"
 */
    +function ($) {
        'use strict'

        var DataKey = 'lte.tree'

        var Default = {
            animationSpeed: 500,
            accordion     : true,
            followLink    : false,
            trigger       : '.treeview a'
        }

        var Selector = {
            tree        : '.tree',
            treeview    : '.treeview',
            treeviewMenu: '.treeview-menu',
            open        : '.menu-open, .active',
            li          : 'li',
            data        : '[data-widget="tree"]',
            active      : '.active'
        }

        var ClassName = {
            open: 'menu-open',
            tree: 'tree'
        }

        var Event = {
            collapsed: 'collapsed.tree',
            expanded : 'expanded.tree'
        }

        // Tree Class Definition
        // =====================
        var Tree = function (element, options) {
            this.element = element
            this.options = options

            $(this.element).addClass(ClassName.tree)

            $(Selector.treeview + Selector.active, this.element).addClass(ClassName.open)

            this._setUpListeners()
        }

        Tree.prototype.toggle = function (link, event) {
            var treeviewMenu = link.next(Selector.treeviewMenu)
            var parentLi     = link.parent()
            var isOpen       = parentLi.hasClass(ClassName.open)

            if (!parentLi.is(Selector.treeview)) {
                return
            }

            if (!this.options.followLink || link.attr('href') === '#') {
                event.preventDefault()
            }

            if (isOpen) {
                this.collapse(treeviewMenu, parentLi)
            } else {
                this.expand(treeviewMenu, parentLi)
            }
        }

        Tree.prototype.expand = function (tree, parent) {
            var expandedEvent = $.Event(Event.expanded)

            if (this.options.accordion) {
                var openMenuLi = parent.siblings(Selector.open)
                var openTree   = openMenuLi.children(Selector.treeviewMenu)
                this.collapse(openTree, openMenuLi)
            }

            parent.addClass(ClassName.open)
            tree.slideDown(this.options.animationSpeed, function () {
                $(this.element).trigger(expandedEvent)
            }.bind(this))
        }

        Tree.prototype.collapse = function (tree, parentLi) {
            var collapsedEvent = $.Event(Event.collapsed)

            tree.find(Selector.open).removeClass(ClassName.open)
            parentLi.removeClass(ClassName.open)
            tree.slideUp(this.options.animationSpeed, function () {
                tree.find(Selector.open + ' > ' + Selector.treeview).slideUp()
                $(this.element).trigger(collapsedEvent)
            }.bind(this))
        }

        // Private

        Tree.prototype._setUpListeners = function () {
            var that = this

            $(this.element).on('click', this.options.trigger, function (event) {
                that.toggle($(this), event)
            })
        }

        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this)
                var data  = $this.data(DataKey)

                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option)
                    $this.data(DataKey, new Tree($this, options))
                }
            })
        }

        var old = $.fn.tree

        $.fn.tree             = Plugin
        $.fn.tree.Constructor = Tree

        // No Conflict Mode
        // ================
        $.fn.tree.noConflict = function () {
            $.fn.tree = old
            return this
        }

        // Tree Data API
        // =============
        $(window).on('load', function () {
            $(Selector.data).each(function () {
                Plugin.call($(this))
            })
        })

    }(jQuery)
});
