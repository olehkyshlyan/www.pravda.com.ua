// ==UserScript==
// @name         Life | UPravda | Society
// @namespace    https://life.pravda.com.ua/society/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Society
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/society/*
// @match        https://life.pravda.com.ua/society/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var LifePravdaSociety = new function(){

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
      jQuery(function(){
        var mainInterviewPage = jQuery("BODY > DIV[class*='main'][class*='interview-page']");
        if(mainInterviewPage.length == 1){
          mainInterviewPage.children().each(function(index,element){
            if(element.className == 'pagewrap'){
              for(property of element.children){
                if(property.className == 'banner'){
                  property.style.display = 'none';
                }
              }
            }

            if(element.className == 'banner'){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV' && element.className.indexOf('pagewrap') != -1){
              element.style.maxWidth = '1320px';
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('mwayss') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('adriver') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(mainIntPageInclosure,3000);
  }

  this.articleColumn = function(){
    var articleColumnInclosure = function(){
      jQuery(function(){
        var articleColumn = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='article-page'] DIV[class*='article-column']");
        if(articleColumn.length != -1){
          articleColumn.children().each(function(index,element){
            if(element.className.indexOf('statistic-top-block') != -1){
              for(property of element.children){
                if(property.className == 'net-block'){
                  property.style.display = 'none';
                }

                if(property.className.indexOf('comment') != -1){
                  property.style.display = 'none';
                }
              }
            }

            if(element.className == 'net-wrap'){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.tagName == 'IFRAME' && property.nextElementSibling.tagName == 'SPAN'){
                  element.style.display = 'none';
                }
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

  this.article = function(){
    var articleInclosure = function(){
      jQuery(function(){
        var article = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='article-page'] DIV[class*='article-column'] > ARTICLE.article");
        if(article.length != -1){
          article.children().each(function(index,element){
            if(element.tagName == 'P'){
              var tagEm = jQuery(element).find("EM:contains('Ми хочемо тримати з вами'),EM:contains('Ми не хочемо втрачати з вами'),EM:contains('А якщо хочете бути в курсі')");
              if(tagEm.length > 0){
                element.style.display = 'none';
              }
            }
          });
        }
      });
    }
    setTimeout(articleInclosure,3000);
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
              var currEl = mobBlockWrapChildren[i];

              if(currEl.className == 'article_300_banner'){
                currEl.style.display = 'none';
              }

              if(currEl.id == 'sticky-wrapper'){
                currEl.style.display = 'none';
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

LifePravdaSociety.body();
LifePravdaSociety.mainInterviewPage();
LifePravdaSociety.articleColumn();
LifePravdaSociety.article();
LifePravdaSociety.sidebar();
LifePravdaSociety.pagePoint();
