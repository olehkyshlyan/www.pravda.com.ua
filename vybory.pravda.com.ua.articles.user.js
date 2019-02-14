// ==UserScript==
// @name         Ukrainska pravda | Articles | Vybory
// @namespace    https://vybory.pravda.com.ua/articles/
// @noframes
// @version      0.1
// @description  Vybory | Ukrainska pravda | www.pravda.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://vybory.pravda.com.ua/articles/*
// @match        https://vybory.pravda.com.ua/articles/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
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
                    break;
                  }
                }
                if(howSearch == 'className'){
                  if(property.className == whatSearch){
                    foundNode = property;
                    break;
                  }
                }
                if(howSearch == 'indexOf'){
                  if(tagAttr != undefined){
                    if(property[tagAttr].indexOf(whatSearch) != -1){
                      foundNode = property;
                      break;
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
          if(property.className == 'layout'){
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
      var body = document.body;
      if(body != undefined){
        var layout = NodesCircuit.circuit(body,{childNode:{how:'className',what:'layout'}});
        var mainContent = NodesCircuit.circuit(layout,{childNode:{how:'className',what:'main-content'}});
        var layoutMain = NodesCircuit.circuit(mainContent,{childNode:{how:'className',what:'layout-main'}});
        var clearfix = NodesCircuit.circuit(layoutMain,{childNode:{how:'indexOf',attr:'className',what:'clearfix'}});
        var articleHeader = NodesCircuit.circuit(clearfix,{childNode:{how:'className',what:'article__header'}});
        var postStatistic = NodesCircuit.circuit(articleHeader,{childNode:{how:'className',what:'post__statistic'}});
        var postComments = NodesCircuit.circuit(postStatistic,{childNode:{how:'className',what:'post__comments'}});
        if(postComments != null){
          postComments.style.display = 'none';
        }
      }
    }
    setTimeout(postCommentsInclosure,2000);
  }

  this.postArticle = function(){
    var postArticleInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var layout = NodesCircuit.circuit(body,{childNode:{how:'className',what:'layout'}});
        var mainContent = NodesCircuit.circuit(layout,{childNode:{how:'className',what:'main-content'}});
        var layoutMain = NodesCircuit.circuit(mainContent,{childNode:{how:'className',what:'layout-main'}});
        var clearfix = NodesCircuit.circuit(layoutMain,{childNode:{how:'indexOf',attr:'className',what:'clearfix'}});
        var colFluid = NodesCircuit.circuit(clearfix,{childNode:{how:'className',what:'col__fluid'}});
        var colFluidInner = NodesCircuit.circuit(colFluid,{childNode:{how:'className',what:'col__fluid__inner'}});
        var postArticle = NodesCircuit.circuit(colFluidInner,{childNode:{how:'indexOf',attr:'className',what:'post_article'}});
        for(property of postArticle.children){
          if(property.className == 'post__social-container'){
            property.style.display = 'none';
          }

          if(property.className == 'post__source'){
            property.style.display = 'none';
          }

          if(property.className == 'post__social_bottom'){
            property.style.display = 'none';
          }

          if(property.className == 'unit_bottom-banner'){
            property.style.display = 'none';
          }

          if(property.tagName == 'A' && property.name == 'comments'){
            property.style.display = 'none';
          }

          if(property.className == 'block_comments'){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(postArticleInclosure,2000);
  }

  this.postNewsText = function(){
    var postNewsTextInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var layout = NodesCircuit.circuit(body,{childNode:{how:'className',what:'layout'}});
        var mainContent = NodesCircuit.circuit(layout,{childNode:{how:'className',what:'main-content'}});
        var layoutMain = NodesCircuit.circuit(mainContent,{childNode:{how:'className',what:'layout-main'}});
        var clearfix = NodesCircuit.circuit(layoutMain,{childNode:{how:'indexOf',attr:'className',what:'clearfix'}});
        var colFluid = NodesCircuit.circuit(clearfix,{childNode:{how:'className',what:'col__fluid'}});
        var colFluidInner = NodesCircuit.circuit(colFluid,{childNode:{how:'className',what:'col__fluid__inner'}});
        var postArticle = NodesCircuit.circuit(colFluidInner,{childNode:{how:'indexOf',attr:'className',what:'post_article'}});
        var postNewsText = NodesCircuit.circuit(postArticle,{childNode:{how:'className',what:'post_news__text'}});
        for(property of postNewsText.children){
          if(property.tagName == 'P' && property.innerHTML == ''){
            property.style.display = 'none';
          }
        }
      }
    }
    setTimeout(postNewsTextInclosure,2000);
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

}

UPArticles.body();
UPArticles.layout();
UPArticles.postComments();
UPArticles.postArticle();
UPArticles.postNewsText();
UPArticles.colSidebar();
