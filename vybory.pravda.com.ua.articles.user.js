// ==UserScript==
// @name         Ukrainska pravda | Articles | Vybory
// @namespace    https://vybory.pravda.com.ua/articles/
// @noframes
// @version      0.1
// @description  Vybory | Ukrainska pravda | www.pravda.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://vybory.pravda.com.ua/articles/*
// @match        https://vybory.pravda.com.ua/articles/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

var UPArticlesVybory = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var bodyChildren = body.children;
        var bdChLen = bodyChildren.length;

        for(var i=0; i<bdChLen; i++){
          var bodyChild = bodyChildren[i];

          if(bodyChild.tagName == 'IMG'){
            bodyChild.style.display = 'none';
          }

          if(bodyChild.tagName == 'IFRAME'){
            bodyChild.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.layout = function(){
    var layoutInclosure = function(){
      var body = document.body;
      if(body != undefined){
        for(property of body.children){
          if(property.className == 'layout'){
            var layout = property;
            for(property of layout.children){
              if(property.className == 'unit_header-banner'){
                property.style.display = 'none';
              }

              if(property.className == 'unit_top-banner'){
                property.style.display = 'none';
              }

              if(property.className == 'sections'){
                property.style.paddingBottom = '50px';
              }
            }
            break;
          }
        }
      }
    }
    setTimeout(layoutInclosure,2000);
  }

  this.postComments = function(){
    var postCommentsInclosure = function(){
      jQuery(function(){
        var postComments = jQuery("BODY > DIV[class*='layout'] > DIV.main-content > DIV.layout-main DIV.post__comments");
        postComments.hide();
      });
    }
    setTimeout(postCommentsInclosure,2000);
  }

  this.postSocialContainer = function(){
    var postSocialContainerInclosure = function(){
      jQuery(function(){
        var postSocialContainer = jQuery("BODY > DIV[class*='layout'] > DIV.main-content > DIV.layout-main > DIV[class*='cols'] > DIV.col__wide DIV.post__social-container");
        postSocialContainer.hide();
      });
    }
    setTimeout(postSocialContainerInclosure,2100);
  }

  this.postArticle = function(){
    var postArticleInclosure = function(){
      var postArticle = jQuery("BODY > DIV[class*='layout'] > DIV.main-content > DIV.layout-main > DIV[class*='cols'] > DIV.col__wide DIV[class*='post_article']");
      postArticle.children().each(function(index,element){
        if(element.className == 'post__source'){
          element.style.display = 'none';
        }

        if(element.className == 'post__social_bottom'){
          element.style.display = 'none';
        }

        if(element.tagName == 'A' && element.name == 'comments'){
          element.style.display = 'none';
        }

        if(element.className == 'block_comments'){
          element.style.display = 'none';
        }
      });
    }
    setTimeout(postArticleInclosure,2100);
  }

  this.postNewsText = function(){
    var postNewsTextInclosure = function(){
      var postNewsText = jQuery("BODY > DIV[class*='layout'] > DIV.main-content > DIV.layout-main > DIV[class*='cols'] > DIV.col__wide DIV[class*='post_article'] > DIV.post_news__text");
      postNewsText.children().each(function(index,element){
        if(element.tagName == 'P' && element.innerHTML == ''){
          element.style.display = 'none';
        }

        if(element.tagName == 'DIV' && element.className.indexOf('image-box') != -1){
          for(property of element.children){
            if(property.className == 'image-box__author' && property.innerHTML == ''){
              property.style.display = 'none';
            }
          }
        }
      });
    }
    setTimeout(postNewsTextInclosure,2000);
  }

}

UPArticlesVybory.body();
UPArticlesVybory.layout();
UPArticlesVybory.postComments();
UPArticlesVybory.postSocialContainer();
UPArticlesVybory.postArticle();
UPArticlesVybory.postNewsText();
