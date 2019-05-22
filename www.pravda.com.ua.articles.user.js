// ==UserScript==
// @name         Ukrainska pravda | Articles
// @namespace    https://www.pravda.com.ua/articles/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/articles/*
// @match        https://www.pravda.com.ua/articles/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var NodesCircuit = new function(){
  this.circuit = function(pn,cn){
    var foundNode = null;
    var howSearch;
    var tagAttr;
    var whatSearch;
    var parentNode = pn;
    var childNode = cn;

    if(parentNode != undefined){
      if(parentNode != null){
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
      }
    }

    return foundNode;
  }
}

var UPArticles = new function(){

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
          if(property.className.indexOf('layout') != -1){
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
      var postComments = jQuery("BODY > DIV[class*='layout'] > DIV.main-content DIV.article__header > DIV.post__statistic > DIV.post__comments");
      if(postComments.length == 1){
        postComments.hide();
      }
    }
    setTimeout(postCommentsInclosure,2000);
  }

  this.postArticle = function(){
    var postArticleInclosure = function(){
      var postArticle = jQuery("BODY > DIV[class*='layout'] > DIV.main-content DIV[class*='post_article']");
      jQuery(postArticle).children().each(function(index,element){
        if(element.className == 'post__social-container'){
          element.style.display = 'none';
        }

        if(element.className == 'post__source'){
          element.style.display = 'none';
        }

        if(element.tagName == 'BR'){
          element.style.display = 'none';
        }

        if(element.id.indexOf('admixer') != -1){
          element.style.display = 'none';
        }

        if(element.tagName == 'IFRAME' && element.nextElementSibling.tagName == 'SPAN'){
          element.style.display = 'none';
        }

        if(element.tagName == 'SPAN' && element.previousElementSibling.tagName == 'IFRAME'){
          element.style.display = 'none';
        }

        if(element.className == 'post__social_bottom'){
          element.style.display = 'none';
        }

        if(element.className == 'unit_bottom-banner'){
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
    setTimeout(postArticleInclosure,2000);
  }

  this.postNewsText = function(){
    var postNewsTextInclosure = function(){
      jQuery(function(){
        var postNewsText = jQuery("BODY > DIV[class*='layout'] > DIV[class*='main-content'] > DIV[class*='layout-main'] DIV[class*='col__fluid__inner'] > DIV[class*='post_article'] > DIV[class*='post_news__text']");
        if(postNewsText.length == 1){
          postNewsText.children().each(function(index,element){
            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.id.indexOf('MarketGid') != -1 || property.className.indexOf('MarketGid') != -1){
                  element.style.display = 'none';
                }
              }
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.className == 'adsbygoogle'){
              element.style.display = 'none';
            }

            for(property of element.children){
              if(property.className == 'adsbygoogle'){
                property.style.display = 'none';
              }
            }

            for(property of element.children){
              if(property.className == 'adriver'){
                property.style.display = 'none';
              }
            }

            if(element.tagName == 'P' && element.innerHTML == ''){
              element.style.display = 'none';
            }

            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.id.indexOf('mwayss') != -1){
                  property.style.cssText += '; display: none !important;';
                }
                if(property.tagName == 'DIV' && property.innerHTML == ''){
                  subproperty.style.display = 'none';
                }
              }
            }
          });
        }
      });
    }
    setTimeout(postNewsTextInclosure,3000);
  }

  this.colSidebar = function(){
    var colSidebarInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var layout = NodesCircuit.circuit(body,{childNode:{how:'className',what:'layout'}});
        var mainContent = NodesCircuit.circuit(layout,{childNode:{how:'className',what:'main-content'}});
        var layoutMain = NodesCircuit.circuit(mainContent,{childNode:{how:'className',what:'layout-main'}});
        var clearfix = NodesCircuit.circuit(layoutMain,{childNode:{how:'indexOf',attr:'className',what:'clearfix'}});
        var colSidebar = NodesCircuit.circuit(clearfix,{childNode:{how:'className',what:'col__sidebar'}});

        for(property of colSidebar.children){
          if(property.className == 'unit_main-banner_right'){
            property.style.display = 'none';
          }

          if(property.className == 'unit_second-banner_right'){
            property.style.display = 'none';
          }

          if(property.className == 'unit_third-banner_right'){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(colSidebarInclosure,3000);
  }

  this.sideNewsContent = function(){
    var sideNewsContentInclosure = function(){
      var sideNewsContentCollection = document.getElementsByClassName('side-news-content');
      var sideNewsContCollZeroEl = sideNewsContentCollection[0];
      if(sideNewsContCollZeroEl != undefined){
        jQuery(sideNewsContCollZeroEl).on('mouseover','.article',function(){
          this.style.backgroundColor = 'rgb(255,127,80)';
        });
        jQuery(sideNewsContCollZeroEl).on('mouseout','.article',function(){
          this.style.backgroundColor = 'transparent';
        });
      }
    }
    setTimeout(sideNewsContentInclosure,3000);
  }

}

UPArticles.body();
UPArticles.layout();
UPArticles.postComments();
UPArticles.postArticle();
UPArticles.postNewsText();
UPArticles.colSidebar();
UPArticles.sideNewsContent();
