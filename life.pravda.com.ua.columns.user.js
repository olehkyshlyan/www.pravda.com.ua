// ==UserScript==
// @name         Life | Ukrainska pravda | Columns
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

var LifeUPColumns = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        body.style.backgroundImage = 'none';
        body.style.backgroundRepeat = 'repeat';
        body.style.backgroundAttachment = 'scroll';
        body.style.backgroundPosition = '0% 0%';
        body.style.paddingTop = '10px';

        for(property of body.children){
          if(property.tagName == 'A' && bodyChild.id.indexOf('ar') != -1){
            property.style.display = 'none';
          }

          if(property.id == 'fb-root'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IMG'){
            property.style.display = 'none';
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

            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.id == 'fb-root'){
              element.style.display = 'none';
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
        var articleColumn = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='pagewrap'] DIV[class*='article-column']");
        if(articleColumn.length == 1){
          articleColumn.children().each(function(index,element){
            if(element.className.indexOf('article-wrap') != -1){
              var statisticTopBlock = jQuery(element).find("DIV[class*='statistic-top-block']");
              if(statisticTopBlock.length == 1){
                statisticTopBlock.children().each(function(lev2index,lev2element){
                  if(lev2element.className.indexOf('net-block') != -1){
                    lev2element.style.display = 'none';
                  }

                  if(lev2element.className.indexOf('comment') != -1){
                    lev2element.style.display = 'none';
                  }
                });
              }
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

  this.article = function(){
    var articleInclosure = function(){
      jQuery(function(){
        var article = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='pagewrap'] DIV[class*='article-wrap'] > ARTICLE[class*='article']");
        if(article.length == 1){
          article.children().each(function(index,element){
            if(element.tagName == 'P' && element.innerHTML == ''){
              element.style.display = 'none';
            }

            if(element.tagName == 'P'){
              for(property of element.children){
                if(property.innerHTML == ''){
                  element.style.display = 'none';
                }
              }
            }

            if(element.tagName == 'STRONG'){
              jQuery(element).has("INS[class*='adsbygoogle']").hide();
            }

            if(element.id.indexOf('ScriptRoot') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('adsbygoogle') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'P'){
              jQuery("p:contains('Ми хочемо тримати з вами')").hide();
              jQuery("p:contains('А якщо хочете бути в курсі')").hide();
            }
          });
        }
      });
    }
    setTimeout(articleInclosure,3000);
  }

  this.sidebar = function(){
    var sidebarInclosure = function(){
      jQuery(function(){
        var sidebar = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='pagewrap'] > DIV[class*='main-page-wrap'] > DIV[class*='sidebar']");
        if(sidebar.length == 1){
          var mobileBlockWrap = sidebar.children("DIV[class*='mobile-block-wrap']");
          if(mobileBlockWrap.length == 1){
            mobileBlockWrap.children().each(function(index,element){
              if(element.className.indexOf('banner') != -1){
                element.style.display = 'none';
              }

              if(element.id.indexOf('bn') == 0){
                var advIframe = jQuery(element).children("IFRAME");
                if(advIframe.length > 0){
                  element.style.display = 'none';
                }
              }
            });
          }
        }
      });
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

LifeUPColumns.body();
LifeUPColumns.mainInterviewPage();
LifeUPColumns.articleColumn();
LifeUPColumns.article();
LifeUPColumns.sidebar();
LifeUPColumns.pagePoint();
