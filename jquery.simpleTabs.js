/* 
 * simpleTabs jQuery Plugin v0.1.0
 * Copyright (c) 2012 Jorge Álvarez
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
  $.fn.simpleTabs = function(options) {
    
    var settings = $.extend( {
      select: 1
    }, options);
    
    var $this = $(this),
        $tabs = $this.children('div.tab'),
        $nav = $this.find('ul.nav');
    
    $nav.find('a').click(function(e){
      var href = $(this).attr('href');
      $tabs.hide();
      $(href, $this).show();
      $nav.find('a').removeClass('current');
      $(this).addClass('current');
      e.preventDefault();
    });
    
    $tabs.hide();
    $tabs.eq(settings.select - 1).show();
    
    $nav.children('li').eq(settings.select - 1).find('a').click();
    
  };
})(jQuery);