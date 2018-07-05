// ==UserScript==
// @name         Ukrainska pravda | News
// @namespace    https://www.pravda.com.ua/news/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/news/*
// @match        https://www.pravda.com.ua/news/*
// @grant        none
// ==/UserScript==

var UkrainskaPravdaNews = new function(){

  this.layout = function(){
    var layoutCollection = document.getElementsByClassName('layout');
    var layoutZeroEl = layoutCollection[0];
    if(layoutZeroEl != undefined){
      var lytZeroElChildren = layoutZeroEl.children;
      var lytZrElChLen = lytZeroElChildren.length;

      for(var i=0; i<lytZrElChLen; i++){
        var currEl = lytZeroElChildren[i];

        if(currEl.className == 'unit_header-banner'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'unit_top-banner'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'sections'){
          currEl.style.paddingBottom = '50px';
        }
      }
    }
  }

  this.postPostNews = function(){
    var postPostNewsCollection = document.getElementsByClassName('post post_news');
    var postPostNewsZeroEL = postPostNewsCollection[0];

    if(postPostNewsZeroEL != undefined){
      var pstPostNewsZeroELChildren = postPostNewsZeroEL.children;
      var pstPNsZrELChLen = pstPostNewsZeroELChildren.length;

      for(var i=0; i<pstPNsZrELChLen; i++){
        var currEl = pstPostNewsZeroELChildren[i];

        if(currEl.className == 'post__statistic'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'push'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME' && currEl.nextElementSibling.tagName == 'SPAN'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'SPAN' && currEl.previousElementSibling.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'post_news__date' && currEl.nextElementSibling.className == 'post__social_bottom'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'unit_bottom-banner'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'A' && currEl.name == 'comments'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'block_comments'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'block block_news_all'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.unitButtonBanner = function(){
    var unitButtonBannerCollection = document.getElementsByClassName('unit_button-banner');
    var unitBtBannerZeroEL = unitButtonBannerCollection[0];
    if(unitBtBannerZeroEL != undefined){
      unitBtBannerZeroEL.style.display = 'none';
    }
  }

  this.colSidebar = function(){
    var colSidebarCollection = document.getElementsByClassName('col__sidebar');
    var colSidebarZeroEL = colSidebarCollection[0];

    if(colSidebarZeroEL != undefined){
      var colSidebarZeroELChildren = colSidebarZeroEL.children;
      var clSdbarZrELChLen = colSidebarZeroELChildren.length;

      for(var i=0; i < clSdbarZrELChLen; i++){
        var currEl = colSidebarZeroELChildren[i];

        if(currEl.className == 'unit_main-banner_right'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'unit_second-banner_right'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.stickyWrapper = function(){
    var stickyWrapper = document.getElementById('sticky-wrapper');
    if(stickyWrapper != null){
      stickyWrapper.style.display = 'none';
    }
  }

}

UkrainskaPravdaNews.layout();
UkrainskaPravdaNews.postPostNews();
UkrainskaPravdaNews.unitButtonBanner();
UkrainskaPravdaNews.colSidebar();
UkrainskaPravdaNews.stickyWrapper();
