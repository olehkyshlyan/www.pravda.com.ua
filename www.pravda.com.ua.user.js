// ==UserScript==
// @name         Ukrainska pravda | Main page
// @namespace    https://www.pravda.com.ua/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Main page
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/
// @match        https://www.pravda.com.ua/
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var UkrainskaPravda = new function(){

  this.unitHeaderBanner = function(){
    var unitHeaderBannerInclosure = function(){
      jQuery(function(){
        var unitHeaderBanner = jQuery("BODY > DIV.layout > DIV.unit_header-banner");
        if(unitHeaderBanner.length == 1){
          unitHeaderBanner.hide();
        }
      });
    }
    setTimeout(unitHeaderBannerInclosure,3000);
  }

}

UkrainskaPravda.unitHeaderBanner();
