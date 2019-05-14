// ==UserScript==
// @name         Life | UPravda | Columns
// @namespace    https://life.pravda.com.ua/columns/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Columns
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/columns/*
// @match        https://life.pravda.com.ua/columns/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var LifePravdaColumns = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        body.style.backgroundImage = 'none';
        body.style.backgroundRepeat = 'repeat';
        body.style.backgroundAttachment = 'scroll';
        body.style.backgroundPosition = '0% 0%';
        body.style.paddingTop = '10px';

        var bodyChildren = body.children;
        var bdChLen = bodyChildren.length;

        for(var i=0; i<bdChLen; i++){
          var bodyChild = bodyChildren[i];

          if(bodyChild.tagName == 'A' && bodyChild.id.indexOf('ar') != -1){
            bodyChild.style.display = 'none';
          }

          if(bodyChild.id == 'fb-root'){
            bodyChild.style.display = 'none';
          }

          if(bodyChild.tagName == 'IFRAME'){
            bodyChild.style.display = 'none';
          }

          if(bodyChild.tagName == 'IMG'){
            bodyChild.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.mainInterviewPage = function(){
    var mainIntPageInclosure = function(){
      var mainInterviewPagCollection = document.getElementsByClassName('main interview-page');
      var mainInterviewPageZeroEl = mainInterviewPagCollection[0];
      if(mainInterviewPageZeroEl != undefined){
        var mainIntPgZeroElChildren = mainInterviewPageZeroEl.children;
        var mnIntPgZeroElChLen = mainIntPgZeroElChildren.length;

        for(var i=0; i<mnIntPgZeroElChLen; i++){
          var currEl = mainIntPgZeroElChildren[i];

          if(currEl.className == 'pagewrap'){
            for(subproperty of currEl.children){
              if(subproperty.className == 'banner'){
                subproperty.style.display = 'none';
              }
            }
          }

          if(currEl.id == 'fb-root'){
            currEl.style.display = 'none';
          }

          if(currEl.id.indexOf('admixer') != -1){
            currEl.style.display = 'none';
          }

          if(currEl.id.indexOf('mwayss') != -1){
            currEl.style.display = 'none';
          }

          if(currEl.id.indexOf('adriver') != -1){
            currEl.style.display = 'none';
          }
        }
      }
    }
    setTimeout(mainIntPageInclosure,3000);
  }

  this.mwayss = function(){
    jQuery(window).on('scroll',function(){
      var body = document.body;
      if(body != undefined){
        var interviewPage = NodesCircuit.circuit(body,{childNode:{how:'indexOf',attr:'className',what:'interview-page'}});
        if(interviewPage != null){
          for(property of interviewPage.children){
            if(property.id.indexOf('mwayss') != -1){
              property.parentElement.removeChild(property);
            }
          }
        }
      }
    });
  }

  this.articleColumn = function(){
    var articleColumnInclosure = function(){
      jQuery(function(){
        var articleColumn = jQuery("BODY > DIV[class*='main'] > DIV[class*='article-page'] DIV.article-column");
        if(articleColumn.length == 1){
          articleColumn.children().each(function(index,element){
            if(element.className.indexOf('statistic-top-block') != -1){
              jQuery(element).children().each(function(lev2index,lev2element){
                if(lev2element.className == 'net-block'){
                  lev2element.style.display = 'none';
                }

                if(lev2element.className.indexOf('comment') != -1){
                  lev2element.style.display = 'none';
                }
              });
            }

            if(element.className == 'net-wrap'){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV'){
              if(element.hasAttribute('id') == false && element.hasAttribute('class') == false){
                jQuery(element).children().each(function(lev2index,lev2element){
                  if(lev2element.tagName == 'IFRAME' && lev2element.nextElementSibling.tagName == 'SPAN'){
                    element.style.display = 'none';
                  }
                });
              }
            }

            if(element.className == 'blurb'){
              element.style.display = 'none';
            }

            if(element.tagName == 'A' && element.name == 'comments'){
              element.style.display = 'none';
            }

            if(element.className.indexOf('fb-comments') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(articleColumnInclosure,3000);
  }

  this.sidebar = function(){
    var sidebarInclosure = function(){
      var sidebarCollection = document.getElementsByClassName('sidebar');
      if(sidebarCollection.length > 0){
        var sidebarZeroEl = sidebarCollection[0];
        if(sidebarZeroEl != undefined){
          var mobileBlockWrap = sidebarZeroEl.children[0];
          if(mobileBlockWrap != undefined){
            var mobBlockWrapChildren = mobileBlockWrap.children;
            var mobBkWrapChLen = mobBlockWrapChildren.length;

            for(var i=0; i<mobBkWrapChLen; i++){
              var mBlWrChild = mobBlockWrapChildren[i];

              if(mBlWrChild.className == 'article_300_banner'){
                mBlWrChild.style.display = 'none';
              }

              if(mBlWrChild.id == 'sticky-wrapper'){
                mBlWrChild.style.display = 'none';
              }
            }
          }
        }
      }
    }
    setTimeout(sidebarInclosure,2000);
  }

  this.pagePoint = function(){
    var pagePointInclosure = function(){
      var pagePointCollection = document.getElementsByClassName('pagewrap page-point');
      if(pagePointCollection.length > 0){
        var pagePointZeroEl = pagePointCollection[0];
        if(pagePointZeroEl != undefined){
          pagePointZeroEl.style.display = 'none';
        }
      }
    }
    setTimeout(pagePointInclosure,2000);
  }
}

LifePravdaColumns.body();
LifePravdaColumns.mainInterviewPage();
LifePravdaColumns.mwayss();
LifePravdaColumns.articleColumn();
LifePravdaColumns.sidebar();
LifePravdaSociety.pagePoint();
