// ==UserScript==
// @name         Life | Ukrainska Pravda | Health
// @namespace    https://life.pravda.com.ua/health/
// @noframes
// @version      0.1
// @description  Life | life.pravda.com.ua | Health
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/health/*
// @match        https://life.pravda.com.ua/health/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var LifePravdaHealth = new function(){

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
          if(property.tagName == 'A' && property.id.indexOf('ar') != -1){
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

  this.headerPagewrap = function(){
    var headerPagewrapInclosure = function(){
      jQuery(function(){
        var headerPagewrap = jQuery("BODY > DIV[class*='main'] > DIV.pagewrap").has('HEADER.header');
        if(headerPagewrap.length == 1){
          headerPagewrap.children().each(function(index,element){
            if(element.className == 'banner'){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(headerPagewrapInclosure,3000);
  }

  this.mainInterviewPage = function(){
    var mainInterviewPageInclosure = function(){
      jQuery(function(){
        var mainInterviewPage = jQuery("BODY > DIV[class*='main'][class*='interview-page']");
        if(mainInterviewPage.length == 1){
          mainInterviewPage.children().each(function(index,element){
            if(element.className == 'banner'){
              element.style.display = 'none';
            }

            if(element.id == 'fb-root'){
              element.style.display = 'none';
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('adriver') != -1){
              element.style.display = 'none';
            }

            if(element.id == 'internalwebpush'){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(mainInterviewPageInclosure,3000);
  }

  this.articleColumn = function(){
    var articleColumnInclosure = function(){
      jQuery(function(){
        var articleColumn = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='pagewrap'] DIV.article-column");
        if(articleColumn.length == 1){
          articleColumn.children().each(function(index,element){

            if(element.className == 'article-wrap'){
              var statisticTopBlock = jQuery(element).children("DIV[class*='statistic-top-block']");
              if(statisticTopBlock.length == 1){
                statisticTopBlock.children().each(function(stTBindex,stTBelement){
                  if(stTBelement.className == 'net-block'){
                    stTBelement.style.display = 'none';
                  }

                  if(stTBelement.className.indexOf('comment') != -1){
                    stTBelement.style.display = 'none';
                  }
                });
              }
            }

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

            if(element.className == 'blurb'){
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
        var article = jQuery("BODY > DIV[class*='main'][class*='interview-page'] > DIV[class*='pagewrap'] DIV.article-column > ARTICLE[class*='article']");
        if(article.length == 1){
          article.children().each(function(index,element){
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
    setTimeout(sidebarInclosure,3000);
  }

}

LifePravdaHealth.body();
LifePravdaHealth.headerPagewrap();
LifePravdaHealth.mainInterviewPage();
LifePravdaHealth.articleColumn();
LifePravdaHealth.article();
LifePravdaHealth.sidebar();
