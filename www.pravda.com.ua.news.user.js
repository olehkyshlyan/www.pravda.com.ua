// ==UserScript==
// @name         Ukrainska pravda | News
// @namespace    https://www.pravda.com.ua/news/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | News
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/news/*
// @match        https://www.pravda.com.ua/news/*
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
            if(element.className.indexOf('unit_header_banner') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('unit_top-banner') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'FOOTER' && element.className.indexOf('footer') != -1){
              element.style.marginTop = '0px';
            }

            if(element.id == 'fb-root'){
              element.style.display = 'none';
            }
          });
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
          containerSubSideNews.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
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
              element.style.display = 'none';
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
              element.style.display = 'none';
            }

            if(element.tagName == 'A' && element.name == 'comments'){
              element.style.display = 'none';
            }

            if(element.className.indexOf('post_comments') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(articleInclosure,3000);
  }

}

UPNews20200501.body();
UPNews20200501.containerSubPostNews();
UPNews20200501.containerSubSideNews();
UPNews20200501.containerSubAdvNews();
UPNews20200501.article();
