// ==UserScript==
// @name         Life | Ukrainska pravda | Travel
// @namespace    https://life.pravda.com.ua/travel/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Travel
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/travel/*
// @match        https://life.pravda.com.ua/travel/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var LifeUPTravel = new function(){

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
          if(property.tagName == 'A' && property.id.indexOf('ar') == 0){
            property.style.display = 'none';
          }

          if(property.id.indexOf('fb-root') != -1){
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
    var mainInterviewPageInclosure = function(){
      jQuery(function(){
        var mainInterviewPage = jQuery("BODY > DIV[class*='main'][class*='interview-page']");
        if(mainInterviewPage.length == 1){
          mainInterviewPage.children().each(function(index,element){
            if(element.className == 'pagewrap'){
              for(property of element.children){
                if(property.className.indexOf('banner') != -1){
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

            if(element.className == 'empty'){
              element.style.display = 'none';
            }

            if(element.id.indexOf('webpush') != -1){
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

}

LifeUPTravel.body();
LifeUPTravel.mainInterviewPage();
LifeUPTravel.articleColumn();
