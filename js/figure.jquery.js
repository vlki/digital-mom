/*global $:false, console:false, window:false, document:false*/

$(function ($) {
    'use strict';
    
    $(document).on('click', '.list-drops .item', function () {
        var parent = $(this).parent();
        if (parent.hasClass('expanded')) {
            parent.parent().find('.expanded').removeClass('expanded');
        } else {
            parent.parent().find('.expanded').removeClass('expanded');
            parent.addClass('expanded');
        }
    });
    
    $(document).on('click', '.navbar .nav-item', function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $(document).on('click', '.list .list-group-item', function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $(document).on('click', '.collapsible .collapser', function () {
        var parent = $(this).parent();
        if (parent.hasClass('collapsed')) {
            parent.find('.collapsee').css('max-height', parent.find('.collapsee>*').outerHeight());
        } else {
            parent.find('.collapsee').css('max-height', '0');
        }
        parent.toggleClass('collapsed');
    });

});
