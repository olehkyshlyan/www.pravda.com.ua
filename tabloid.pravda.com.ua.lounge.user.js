// ==UserScript==
// @name         TabloID | Lounge
// @namespace    http://tabloid.pravda.com.ua/lounge/
// @noframes
// @version      0.1
// @description  TabloID | www.pravda.com.ua | Lounge
// @author       oleh.kyshlyan
// @match        http://tabloid.pravda.com.ua/lounge/*
// @match        https://tabloid.pravda.com.ua/lounge/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var TabloIDLounge = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        body.style.backgroundColor = 'rgb(204,208,211)';
        body.style.backgroundImage = 'none';
        body.style.backgroundRepeat = 'repeat';
        body.style.backgroundAttachment = 'scroll';
        body.style.backgroundPosition = '0% 0%';

        var bodyChildren = body.children;
        var bdChLen = bodyChildren.length;

        for(var i=0; i<bdChLen; i++){
          var currEl = bodyChildren[i];

          if(currEl.tagName == 'IFRAME'){
            currEl.style.display = 'none';
          }

          if(currEl.tagName == 'IMG'){
            currEl.style.display = 'none';
          }

          if(currEl.className == 'article_wide_banner_mobile'){
            currEl.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,2000);
  }

  this.topPostComments = function(){
    var topPostCommentsInclosure = function(){
      jQuery(function(){
        var topPostComments = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > ASIDE[class*='post__service'] > DIV[class*='post__statistic'] > DIV[class*='post__comments']");
        if(topPostComments.length == 1){
          topPostComments.hide();
        }
      });
    }
    setTimeout(topPostCommentsInclosure,2000);
  }

  this.blockPost = function(){
    var blockPostInclosure = function(){
      jQuery(function(){
        var blockPost = jQuery("BODY > MAIN.wrap ARTICLE[class*='post'] DIV[class*='block_post']");
        blockPost.children().each(function(index,element){
          if(element.id.indexOf('go2net') != -1){
            element.style.display = 'none';
          }

          if(element.tagName == 'A' && element.name == 'comments'){
            element.style.display = 'none';
          }

          if(element.className == 'post__comments'){
            element.style.display = 'none';
          }
        });
      });
    }
    setTimeout(blockPostInclosure,2000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      var postText = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post'] > DIV[class*='post__text']");
      if(postText.length == 1){
        postText.children().each(function(index,element){
          if(element.tagName == 'DIV'){
            var adsByGoogle = jQuery(element).children("INS[class*='adsbygoogle']");
            if(adsByGoogle.length == 1){
              element.style.display = 'none';
            }
          }
        });
      }
    }
    setTimeout(postTextInclosure,2000);
  }

  this.layoutArticleSidebar = function(){
    var layoutArticleSidebarInclosure = function(){
      jQuery(function(){
        var layoutArticleSidebar = jQuery("BODY > MAIN[class*='wrap'] > DIV[class*='layout'] > ASIDE[class*='layout_article_sidebar']");
        if(layoutArticleSidebar.length == 1){
          layoutArticleSidebar.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('block_article_sidebar') != -1){
              element.style.marginTop = '20px';
            }

            if(element.id.indexOf('sticky-wrapper') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(layoutArticleSidebarInclosure,2000);
  }

  this.endless = function(){
    var endlessInclosure = function(){
      jQuery(function(){
        var blockBanner = jQuery("BODY > DIV[class*='last'] > DIV[class*='layout'] > DIV[id*='endless'] > DIV[class*='block_banner']");
        if(blockBanner.length == 1){
          blockBanner.hide();
        }
      });
    }
    setTimeout(endlessInclosure,2000);
  }

  this.onScrollElements = function(){
    jQuery(function(){
      var wrapperSticky = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post'] > DIV[class*='post__text'] > DIV[class*='wrapper-sticky']");
      var postSocialSide = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post'] > DIV[class*='post__text'] > DIV[class*='wrapper-sticky'] > DIV[class*='post__social__side']");
      if(wrapperSticky.length == 1){
        var wrapperStickyOriginalClass = wrapperSticky.attr("class");
        if(postSocialSide.length == 1){
          var postSocialSideOriginalClass = postSocialSide.attr("class");
          var postSocialSideOriginalStyle = postSocialSide.attr("style");
        }
      }

      jQuery(window).on('scroll',function(){
        if(wrapperSticky.length == 1){
          if(wrapperSticky.attr("class").indexOf('sticky-active') != -1){
            var wrapperStickyScrolledClass = wrapperSticky.attr("class");
            wrapperSticky.attr("class",wrapperStickyOriginalClass);
          }
          if(postSocialSide.length == 1){
            if(postSocialSide.attr("class").indexOf('sticky') != -1){
              postSocialSide.attr("class",postSocialSideOriginalClass);
            }
            if(postSocialSide.attr("style").indexOf('fixed') != -1 || postSocialSide.attr("style").indexOf('absolute') != -1){
              postSocialSide.attr("style",postSocialSideOriginalStyle);
            }
          }
        }
      });
    });
  }

}

TabloIDLounge.body();
TabloIDLounge.topPostComments();
TabloIDLounge.blockPost();
TabloIDLounge.postText();
TabloIDLounge.layoutArticleSidebar();
TabloIDLounge.endless();
TabloIDLounge.onScrollElements();
