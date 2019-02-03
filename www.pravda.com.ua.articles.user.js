// ==UserScript==
// @name         Ukrainska pravda | Articles
// @namespace    https://www.pravda.com.ua/articles/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | www.pravda.com.ua | Articles
// @author       oleh.kyshlyan
// @match        http://www.pravda.com.ua/articles/*
// @match        https://www.pravda.com.ua/articles/*
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
          if(property.className == 'layout'){
            var layout = property;
            for(property of layout.children){
              if(property.className == 'unit_header-banner'){
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

  this.postArticle = function(){
    var postArticleInclosure = function(){
      var body = document.body;
      if(body != undefined){
        for(property of body.children){
          if(property.className == 'layout'){
            var layout = property;
            for(property of layout.children){
              if(property.className == 'main-content'){
                var mainContent = property;
                for(property of mainContent.children){
                  if(property.className == 'layout-main'){
                    var layoutMain = property;
                    for(property of layoutMain.children){
                      if(property.className.indexOf('clearfix') != -1){
                        var clearfix = property;
                        for(property of clearfix.children){
                          if(property.className == 'col__fluid'){
                            var colFluid = property;
                            for(property of colFluid.children){
                              if(property.className == 'col__fluid__inner'){
                                var colFluidInner = property;
                                for(property of colFluidInner.children){
                                  if(property.className.indexOf('post_article') != -1){
                                    var postArticle = property;

                                    for(property of postArticle.children){
                                      if(property.className == 'article__header'){
                                        var articleHeader = property;
                                        for(property of articleHeader.children){
                                          if(property.className == 'post__statistic'){
                                            var postStatistic = property;
                                            for(property of postStatistic.children){
                                              if(property.className == 'post__comments'){
                                                property.style.display = 'none';
                                              }
                                            }
                                            break;
                                          }
                                        }
                                      }

                                      if(property.className == 'post__social-container'){
                                        property.style.display = 'none';
                                      }

                                      if(property.tagName == 'BR'){
                                        property.style.display = 'none';
                                      }

                                      if(property.id.indexOf('admixer') != -1){
                                        property.style.display = 'none';
                                      }

                                      if(property.tagName == 'IFRAME' && property.nextElementSibling.tagName == 'SPAN'){
                                        property.style.display = 'none';
                                      }

                                      if(property.tagName == 'SPAN' && property.previousElementSibling.tagName == 'IFRAME'){
                                        property.style.display = 'none';
                                      }

                                      if(property.className == 'post__social_bottom'){
                                        property.style.display = 'none';
                                      }

                                      if(property.className == 'unit_bottom-banner'){
                                        property.style.display = 'none';
                                      }

                                      if(property.tagName == "A" && property.name == 'comments'){
                                        property.style.display = 'none';
                                      }

                                      if(property.className == 'block_comments'){
                                        property.style.display = 'none';
                                      }
                                    }

                                    break;
                                  }
                                }
                                break;
                              }
                            }
                            break;
                          }
                        }
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
              }
            }
            break;
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
          if(property.id.indexOf('admixer') != -1){
            property.style.display = 'none';
          }

          if(property.className == 'adsbygoogle'){
            property.style.display = 'none';
          }

          for(subproperty of property.children){
            if(subproperty.className == 'adsbygoogle'){
              subproperty.style.display = 'none';
            }
          }

          for(subproperty of property.children){
            if(subproperty.id.indexOf('adriver') != -1){
              subproperty.style.display = 'none';
            }
          }

          if(property.tagName == 'P' && property.innerHTML == ''){
            property.style.display = 'none';
          }
        }
      }
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

}

UPArticles.body();
UPArticles.layout();
UPArticles.postArticle();
UPArticles.postNewsText();
UPArticles.colSidebar();
