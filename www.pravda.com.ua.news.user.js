// ==UserScript==
// @name         Ukrainska pravda | News
// @namespace    https://www.pravda.com.ua/news/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/news/*
// @match        https://www.pravda.com.ua/news/*
// @match        https://*.pravda.com.ua/news/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var UPNews20200501 = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      jQuery(function(){
        var body = jQuery("BODY");
        if(body.length == 1){
          body.children().each(function(index,element){
            if(element.id.indexOf('ar_') == 0){
              element.style.cssText += '; display: none !important;';
            }

            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'FOOTER' && element.className.indexOf('footer') != -1){
              element.style.marginTop = '0px';
            }

            if(element.id == 'fb-root'){
              element.style.display = 'none';
            }

            if(element.tagName == 'IFRAME'){
              element.style.display = 'none';
            }

            if(element.tagName == 'IMG'){
              element.style.display = 'none';
            }

            if(element.id.indexOf('push') != -1){
              element.style.display = 'none';
            }
          });

          body.css({"background":"transparent none repeat scroll 0% 0%"});
          body.css({"padding-top":"0px"});
          //body.attr({style:""});
          body.attr({class:""});
        }
      });
    }
    setTimeout(bodyInclosure,3000);
  }

  this.containerSubPostNews = function(){
    var containerSubPostNewsInclosure = function(){
      jQuery(function(){
        var containerSubPostNews = jQuery("BODY > DIV[class*='main_content'] DIV[class*='container_sub_post_news']");
        if(containerSubPostNews.length == 1){
          containerSubPostNews.css({"max-width":"100%"});

          containerSubPostNews.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(containerSubPostNewsInclosure,3000);
  }

  this.containerSubSideNews = function(){
    var containerSubSideNewsInclosure = function(){
      jQuery(function(){
        var containerSubSideNews = jQuery("BODY > DIV[class*='main_content'] > DIV[class*='container_news'] > DIV[class*='container_sub_side_news']");
        if(containerSubSideNews.length == 1){
          containerSubSideNews.css({"max-width":"none"});
          containerSubSideNews.css({"margin-left":"0px"});
          containerSubSideNews.css({"width":"calc(25% + 120px)"});

          containerSubSideNews.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.cssText += '; display: none !important;';
            }
          });
        }
      });
    }
    setTimeout(containerSubSideNewsInclosure,3000);
  }

  this.containerSubAdvNews = function(){
    var containerSubAdvNewsInclosure = function(){
      jQuery(function(){
        var containerSubAdvNews = jQuery("BODY > DIV[class*='main_content'] > DIV[class*='container_news'] > DIV[class*='container_sub_adv_news']");
        if(containerSubAdvNews.length == 1){
          containerSubAdvNews.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.cssText += '; display: none !important;';
            }
          });
        }
      });
    }
    setTimeout(containerSubAdvNewsInclosure,3000);
  }

  this.article = function(){
    var articleInclosure = function(){
      jQuery(function(){
        var article = jQuery("BODY > DIV[class*='main_content'] ARTICLE[class*='post']");
        if(article.length == 1){
          article.children().each(function(index,element){
            if(element.className.indexOf('block_post') != -1){
              var postSocialItemComments = jQuery(element).find("A[class*='post_social_item_comments']");
              if(postSocialItemComments.length == 1){
                postSocialItemComments.hide();
              }
            }

            if(element.className.indexOf('banner') != -1){
              element.style.cssText += '; display: none !important;';
            }

            if(element.tagName == 'A' && element.name == 'comments'){
              element.style.cssText += '; display: none !important;';
            }

            if(element.className.indexOf('post_comments') != -1){
              element.style.cssText += '; display: none !important;';
            }
          });
        }
      });
    }
    setTimeout(articleInclosure,3000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      jQuery(function(){
        var postText = jQuery("BODY > DIV[class*='main_content'] ARTICLE[class*='post'] DIV[class*='block_post'] > DIV[class*='post_text']");
        if(postText.length == 1){
          postText.children().each(function(index,element){
            if(element.id.indexOf('banner') != -1 || element.className.indexOf('banner') != -1){
              element.style.cssText += '; display: none !important;';
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.cssText += '; display: none !important;';
            }

            if(element.tagName == 'P' && element.innerHTML == ''){
              element.style.cssText += '; display: none !important;';
            }

            if(element.className.indexOf('image-box') != -1){
              var caption = jQuery(element).children("DIV[class*='caption']");
              var capInHTML = caption.html();
              if(capInHTML == ''){
                caption.hide();
              }

              var author = jQuery(element).children("DIV[class*='author']");
              var authInHTML = author.html();
              if(authInHTML == ''){
                author.hide();
              }
            }

            if(element.tagName == 'BLOCKQUOTE'){
              var subscription = jQuery(element).find("A:contains('Читайте нас у Telegram')");
              if(postText.length == 1){
                element.style.cssText += '; display: none !important;';
              }
            }
          });
        }
      });
    }
    setTimeout(postTextInclosure,3000);
  }

}

UPNews20200501.body();
UPNews20200501.containerSubPostNews();
UPNews20200501.containerSubSideNews();
UPNews20200501.containerSubAdvNews();
UPNews20200501.article();
UPNews20200501.postText();
