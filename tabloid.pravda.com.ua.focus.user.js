// ==UserScript==
// @name         TabloID | Focus
// @namespace    http://tabloid.pravda.com.ua/
// @noframes
// @version      0.1
// @description  TabloID | tabloid.pravda.com.ua | Focus
// @author       oleh.kyshlyan
// @match        http://tabloid.pravda.com.ua/focus/*
// @match        https://tabloid.pravda.com.ua/focus/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var TabloIDFocus = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        body.style.backgroundColor = 'rgb(204,208,211)';
        body.style.backgroundImage = 'none';
        body.style.backgroundRepeat = 'repeat';
        body.style.backgroundAttachment = 'scroll';
        body.style.backgroundPosition = '0% 0%';

        for(property of body.children){
          if(property.tagName == 'A' && property.id.indexOf('ar') == 0){
            property.style.display = 'none';
          }

          if(property.className.indexOf('banner') != -1){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IMG'){
            property.style.display = 'none';
          }

          if(property.className == 'last'){
            property.style.paddingBottom = '15px';
          }

          if(property.id == 'fb-root'){
            property.style.display = 'none';
          }

          if(property.id.indexOf('webpush') != -1){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,2000);
  }

  this.topPostComments = function(){
    var topPostCommentsInclosure = function(){
      jQuery(function(){
        var postComments = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > ASIDE[class*='post__service'] > DIV[class*='post__statistic'] > DIV[class*='post__comments']");
        if(postComments.length == 1){
          postComments.hide();
        }
      });
    }
    setTimeout(topPostCommentsInclosure,2000);
  }

  this.blockPost = function(){
    var blockPostInclosure = function(){
      jQuery(function(){
        var blockPost = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post']");
        if(blockPost.length == 1){
          blockPost.children().each(function(index,element){
            if(element.id.indexOf('go2net') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'CENTER'){
              for(property of element.children){
                if(property.id.indexOf('adriver') != -1){
                  element.style.display = 'none';
                }
              }
            }

            if(element.tagName == 'IFRAME' && element.nextElementSibling.tagName == 'SPAN'){
              element.style.display = 'none';
            }

            if(element.tagName == 'SPAN' && element.previousElementSibling.tagName == 'IFRAME'){
              element.style.display = 'none';
            }

            if(element.tagName == 'A' && element.name == 'comments'){
              element.style.display = 'none';
            }

            if(element.className == 'post__comments'){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(blockPostInclosure,2000);
  }

  this.postText = function(){
    var postTextInclosure = function(){
      jQuery(function(){
        var postText = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post'] > DIV[class*='post__text']");
        if(postText.length == 1){
          postText.children().each(function(index,element){
            if(element.tagName == 'DIV'){
              for(property of element.children){
                if(property.className == 'adsbygoogle'){
                  element.style.display = 'none';
                }
              }
            }

            if(element.className.indexOf('image-box') != -1){
              for(property of element.children){
                if(property.className.indexOf('image-box__caption') != -1 && property.innerHTML == ''){
                  property.style.display = 'none';
                }

                if(property.className.indexOf('image-box__author') != -1 && property.innerHTML == ''){
                  property.style.display = 'none';
                }
              }
            }

            if(element.tagName == 'P'){
              var spanTag = jQuery(element).children("SPAN");
              if(spanTag.length == 1){
                var emptySpan = spanTag.is(":empty");
                if(emptySpan == true){
                  element.style.display = 'none';
                }
              }
            }
          });
        }
      });
    }
    setTimeout(postTextInclosure,2000);
  }

  this.layoutArticleSidebar = function(){
    var layoutArticleSidebarInclosure = function(){
      jQuery(function(){
        var layoutArticleSidebar = jQuery("BODY > MAIN[class*='wrap'] > DIV[class*='layout'] > ASIDE[class*='article_sidebar']");
        if(layoutArticleSidebar.length == 1){
          layoutArticleSidebar.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('block_article_sidebar_news') != -1){
              element.style.marginTop = '20px';
            }

            if(element.id.indexOf('sticky') != -1 || element.className.indexOf('sticky') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(layoutArticleSidebarInclosure,2000);
  }

  this.blockArticleSidebar = function(){
    var blockArticleSidebarInclosure = function(){
      jQuery(function(){
        var blockArticleSidebar = jQuery("BODY > MAIN[class*='wrap'] > DIV[class*='layout'] > ASIDE[class*='article_sidebar'] > DIV[class*='block_article_sidebar']");
        if(blockArticleSidebar.length == 1){
          blockArticleSidebar.children().each(function(index,element){
            if(element.tagName == 'ARTICLE' && element.className.indexOf('article_news') != -1){
              var articleMedia = jQuery(element).find("DIV[class='article__media']");
              if(articleMedia.length == 1){
                articleMedia.css({"position":"absolute","top":"0px","z-index":"1","overflow":"hidden","height":"100%"});
              }
              var articleContent = jQuery(element).find("DIV[class='article__content']");
              if(articleContent.length == 1){
                articleContent.css({"position":"static","z-index":"2"});
              }
            }
          });
        }
      });
    }
    setTimeout(blockArticleSidebarInclosure,3000);
  }

  this.lastEndlessBanner = function(){
    //alert('Here 1');
    var lastEndlessBannerInclosure = function(){
      //alert('Here 2');
      jQuery(function(){
        //alert('Here 3');
        var lastEndlessBanner = jQuery("BODY > DIV[class*='last'] > DIV[class*='layout'] > DIV[id='endless'] > DIV[class*='banner']");
        //alert('lastEndlessBanner: '+lastEndlessBanner);
        //alert('lastEndlessBanner.jquery: '+lastEndlessBanner.jquery);
        //alert('lastEndlessBanner.length: '+lastEndlessBanner.length);
        if(lastEndlessBanner.length == 1){
          lastEndlessBanner.hide();
        }
      });
    }
    setTimeout(lastEndlessBannerInclosure,2000);
  }

  this.onScrollElements = function(){
    jQuery(function(){
      var nav = jQuery("BODY > HEADER[class*='header'] > NAV[class*='nav']");
      if(nav.length == 1){
        var originalNavClass = nav.attr('class');
        jQuery(window).on('scroll',function(){
          if(nav.attr('class').indexOf('sticky') != -1){
            nav.attr('class',originalNavClass);
            nav.attr('style','position: static;');
          }
        });
      }

      var wrapperSticky = jQuery("BODY > MAIN[class*='wrap'] ARTICLE[class*='post'] > DIV[class*='block_post'] > DIV[class*='post__text'] > DIV[class*='wrapper-sticky']");
      if(wrapperSticky.length == 1){
        var postSocialSide = wrapperSticky.children("DIV[class*='post__social__side']");
        if(postSocialSide.length == 1){
          var originalPostSocialSideClass = postSocialSide.attr('class');
          var originalPostSocialSideStyle = postSocialSide.attr('style');
          jQuery(window).on('scroll',function(){
            if(wrapperSticky.attr('class').indexOf('sticky-active') != -1){
              wrapperSticky.attr('class','wrapper-sticky');
            }

            if(postSocialSide.attr('class').indexOf('sticky') != -1){
              postSocialSide.attr('class',originalPostSocialSideClass);
            }

            if(postSocialSide.attr('style').indexOf('position: fixed;') != -1){
              postSocialSide.attr('style',originalPostSocialSideStyle);
            }

            if(postSocialSide.attr('style').indexOf('inset: auto;') == -1){
              postSocialSide.attr('style',originalPostSocialSideStyle);
            }
          });
        }
      }
    });
  }

}

TabloIDFocus.body();
TabloIDFocus.topPostComments();
TabloIDFocus.blockPost();
TabloIDFocus.postText();
TabloIDFocus.layoutArticleSidebar();
TabloIDFocus.blockArticleSidebar();
TabloIDFocus.lastEndlessBanner();
TabloIDFocus.onScrollElements();
