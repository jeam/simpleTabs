/* 
 * simpleTabs jQuery Plugin v0.1.1
 * Copyright (c) 2012 Jorge Álvarez
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
  $.fn.simpleTabs = function(options) {
    
    var settings,
    $this = $(this),
    $tabs = $this.children('.tab'),
    $nav = $this.find('.nav');
	
    settings = $.extend( {
      select : 1
    }, options),
    
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