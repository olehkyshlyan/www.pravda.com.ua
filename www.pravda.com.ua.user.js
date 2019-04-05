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
    setTimeout(unitHeaderBannerInclosure,2000);
  }

  this.unitTopBannerMain = function(){
    var unitTopBannerMainInclosure = function(){
      jQuery(function(){
        var unitTopBannerMain = jQuery("BODY > DIV.layout > DIV.main-content > DIV.unit_top-banner_main");
        if(unitTopBannerMain.length == 1){
          unitTopBannerMain.hide();
        }
      });
    }
    setTimeout(unitTopBannerMainInclosure,2000);
  }

  this.topUnitMainBannerRight = function(){
    var topUnitMainBannerRightInclosure = function(){
      jQuery(function(){
        var unitSideBanner = jQuery("BODY > DIV.layout > DIV.main-content > DIV.layout-main > DIV[class*='clearfix'] > DIV[class*='col__sidebar'] > DIV.unit_main-banner_right1 > DIV.unit_side-banner");
        unitSideBanner.children().each(function(index,element){
          if(element.className == 'advtext'){
            element.style.cssText += '; display: none !important;';
          }

          if(element.id.indexOf('adriver') != -1){
            element.style.cssText += '; display: none !important;';
          }
        });
      });
    }
    setTimeout(topUnitMainBannerRightInclosure,3000);
  }

}

UkrainskaPravda.unitHeaderBanner();
UkrainskaPravda.unitTopBannerMain();
UkrainskaPravda.topUnitMainBannerRight();
