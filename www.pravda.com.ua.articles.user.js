// ==UserScript==
// @name         Ukrainska pravda | Articles
// @namespace    https://www.pravda.com.ua/articles/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/articles/*
// @match        https://www.pravda.com.ua/articles/*
// @grant        none
// ==/UserScript==

var UPArticles = new function(){

  this.body = function(){
    var bodyCollection = document.getElementsByTagName('body');
    var body = bodyCollection[0];
    if(body != undefined){
      var bodyChildren = body.children;
      var bdChLen = bodyChildren.length;

      for(var i=0; i<bdChLen; i++){
        var currEl = bodyChildren[i];

        if(currEl.tagName == 'IMG'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }
      }
    }
  }

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

  this.postStatistic = function(){
    var postStatisticCollection = document.getElementsByClassName('post__statistic');
    var postStZeroEL = postStatisticCollection[0];
    if(postStZeroEL != undefined){
      if(postStZeroEL.parentElement.className == 'article__header'){
        postStZeroEL.style.display = 'none';
      }
    }
  }

  this.postArticle = function(){
    var postArticleCollection = document.getElementsByClassName('post post_news post_article');
    var postArticleZeroEl = postArticleCollection[0];
    if(postArticleZeroEl != undefined){
      var postArtZeroElChildren = postArticleZeroEl.children;
      var pstArtZrElChLen = postArtZeroElChildren.length;

      for(var i=0; i<pstArtZrElChLen; i++){
        var currEl = postArtZeroElChildren[i];

        if(currEl.tagName == 'IFRAME' && currEl.nextElementSibling.tagName == 'SPAN'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'SPAN' && currEl.previousElementSibling.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'post__social_bottom'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'unit_bottom-banner'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'block_comments'){
          currEl.style.display = 'none';
        }
      }
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

        if(currEl.className == 'unit_third-banner_right'){
          currEl.style.display = 'none';
        }
      }
    }
  }
}

UPArticles.body();
UPArticles.layout();
UPArticles.postStatistic();
UPArticles.postArticle();
UPArticles.colSidebar();
