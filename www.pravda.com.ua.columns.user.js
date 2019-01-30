// ==UserScript==
// @name         Ukrainska pravda | Columns
// @namespace    https://www.pravda.com.ua/columns/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Columns
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/columns/*
// @match        https://www.pravda.com.ua/columns/*
// @grant        none
// ==/UserScript==

var UPColumns = new function(){

  this.nodesCircle = function(pn,cn){
    var foundNode = null;
    var howSearch;
    var tagAttr;
    var whatSearch;
    var parentNode = pn;
    var childNode = cn;
    if(childNode != undefined){
      if(childNode.childNode != undefined){
        if(childNode.childNode.how != undefined){
          howSearch = childNode.childNode.how;
        }
        if(childNode.childNode.attr != undefined){
          tagAttr = childNode.childNode.attr;
        }
        if(childNode.childNode.what != undefined){
          whatSearch = childNode.childNode.what;
        }
      }
    }

    if(parentNode != undefined){
      if(howSearch != undefined){
        if(whatSearch != undefined){
          for(property of parentNode.children){
            if(howSearch == 'tagName'){
              if(property.tagName == whatSearch){
                foundNode = property;
              }
            }
            if(howSearch == 'className'){
              if(property.className == whatSearch){
                foundNode = property;
              }
            }
            if(howSearch == 'indexOf'){
              if(tagAttr != undefined){
                if(property[tagAttr].indexOf(whatSearch) != -1){
                  foundNode = property;
                }
              }
            }
          }
        }
      }
    }

    return foundNode;
  }

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
      postColumnZeroEl.style.marginBottom = '10px';
      var pstColZeroElChildren = postColumnZeroEl.children;
      var ptColZrElChLen = pstColZeroElChildren.length;

      for(var i=0; i<ptColZrElChLen; i++){
        var currEl = pstColZeroElChildren[i];

        if(currEl.tagName == 'BR'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'post__statistic'){
          currEl.style.display = 'none';
        }

        if(currEl.id.indexOf('admixer') != -1){
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

  this.postNewsText = function(){
    var postNewsTextInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var layout = UPColumns.nodesCircle(body,{childNode:{how:'className',what:'layout'}});
        var mainContent = UPColumns.nodesCircle(layout,{childNode:{how:'className',what:'main-content'}});
        var layoutMain = UPColumns.nodesCircle(mainContent,{childNode:{how:'className',what:'layout-main'}});
        var clearfix = UPColumns.nodesCircle(layoutMain,{childNode:{how:'indexOf',attr:'className',what:'clearfix'}});
        var colFluid = UPColumns.nodesCircle(clearfix,{childNode:{how:'className',what:'col__fluid'}});
        var colFluidInner = UPColumns.nodesCircle(colFluid,{childNode:{how:'className',what:'col__fluid__inner'}});
        var postColumn = UPColumns.nodesCircle(colFluidInner,{childNode:{how:'indexOf',attr:'className',what:'post_column'}});
        var postNewsText = UPColumns.nodesCircle(postColumn,{childNode:{how:'className',what:'post_news__text'}});
        for(property of postNewsText.children){

          if(property.id.indexOf('admixer') != -1){
            property.style.display = 'none';
          }

          for(subproperty of property.children){
            if(subproperty.className == 'adsbygoogle'){
              subproperty.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(postNewsTextInclosure,3000);
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
UPColumns.postNewsText();
UPColumns.colSidebar();
