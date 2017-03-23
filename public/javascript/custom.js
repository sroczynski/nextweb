/*
 * ----------------------------------------------------------------------------------------
 Author       : Wordpressboss
 Template Name: Smoth - One Page MultiPurpose Template
 Version      : 1.0
 * ----------------------------------------------------------------------------------------
 */

(function ($) {
  'use strict';
  
  jQuery(document).ready(function () {
    
    /*
     * ----------------------------------------------------------------------------------------
     *  PRELOADER JS
     * ----------------------------------------------------------------------------------------
     */
    $(window).on("load", function () {
      $('.spinner').fadeOut();
      $('.preloader-area').delay(350).fadeOut('slow');
    });
    
    /*
     * ----------------------------------------------------------------------------------------
     *  CHANGE MENU BACKGROUND JS
     * ----------------------------------------------------------------------------------------
     */
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.header-top-area').addClass('menu-bg');
      } else {
        $('.header-top-area').removeClass('menu-bg');
      }
    });
    
    
    
    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */
    
    $('a.smoth-scroll').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1000);
      e.preventDefault();
    });
    
    
    /*
     * ----------------------------------------------------------------------------------------
     *  PARALLAX JS
     * ----------------------------------------------------------------------------------------
     */
    
    // $(window).stellar({
    //   responsive: true,
    //   positionProperty: 'position',
    //   horizontalScrolling: false
    // });
    
    /*
     * ----------------------------------------------------------------------------------------
     *  COUNTER UP JS
     * ----------------------------------------------------------------------------------------
     */
    
    // $('.counter-num').counterUp();
    
    
    
    /*
     * ----------------------------------------------------------------------------------------
     *  SLICK NAV UP JS
     * ----------------------------------------------------------------------------------------
     */
    
    $("ul#navigation").slicknav({
      prependTo: ".responsive-menu-wrap"
    });
    
    
    /*
     * ----------------------------------------------------------------------------------------
     *  EXTRA JS
     * ----------------------------------------------------------------------------------------
     */
    $(document).on('click', '.navbar-collapse.in', function (e) {
      if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
      }
    });
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });
    
    
    
    /*
     * ----------------------------------------------------------------------------------------
     *  SCROOL TO UP JS
     * ----------------------------------------------------------------------------------------
     */
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    $('.scrollup').on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    
    /*
     * ----------------------------------------------------------------------------------------
     *  WOW JS
     * ----------------------------------------------------------------------------------------
     */
    // new WOW().init();
    
  });
  
})(jQuery);