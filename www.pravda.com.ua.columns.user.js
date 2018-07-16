// ==UserScript==
// @name         Ukrainska pravda | Columns
// @namespace    https://www.pravda.com.ua/columns/
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Columns
// @author       oleh.kyshlyan
// @match        https://www.pravda.com.ua/columns/*
// @grant        none
// ==/UserScript==

var UPColumns = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.getElementsByTagName('body')[0];
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

        if(currEl.id.indexOf('admixer') != -1 ){
          currEl.style.display = 'none';
        }
      }
    }
    setTimeout(bodyInclosure,7000);
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

  this.postColumn = function(){
    var postColumnCollection = document.getElementsByClassName('post post_news post_column');
    var postColumnZeroEl = postColumnCollection[0];
    if(postColumnZeroEl != undefined){
      var pstColZeroElChildren = postColumnZeroEl.children;
      var ptColZrElChLen = pstColZeroElChildren.length;

      for(var i=0; i<ptColZrElChLen; i++){
        var currEl = pstColZeroElChildren[i];

        if(currEl.className == 'post__statistic'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME' && currEl.nextElementSibling.tagName == 'SPAN'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'SPAN' && currEl.previousElementSibling.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'post__social_bottom'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'block_related'){
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
      }
    }
  }

  this.colSidebar = function(){
    var colSidebarCollection = document.getElementsByClassName('col__sidebar');
    var colSidebarZeroEl = colSidebarCollection[0];
    if(colSidebarZeroEl != undefined){
      var clSidebarZeroElChildren = colSidebarZeroEl.children;
      var clSdbrZrElChLen = clSidebarZeroElChildren.length;

      for(var i=0; i<clSdbrZrElChLen; i++){
        var currEl = clSidebarZeroElChildren[i];

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

UPColumns.body();
UPColumns.layout();
UPColumns.postColumn();
UPColumns.colSidebar();
