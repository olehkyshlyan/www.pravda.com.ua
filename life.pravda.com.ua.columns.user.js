// ==UserScript==
// @name         Life | UPravda | Columns
// @namespace    https://life.pravda.com.ua/columns/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Columns
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/columns/*
// @match        https://life.pravda.com.ua/columns/*
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
      var articleColumnCollection = document.getElementsByClassName('article-column');
      var articleColumn = articleColumnCollection[0];
      if(articleColumn != undefined){
        var articleColumnChildren = articleColumn.children;
        var artColChLen = articleColumnChildren.length;

        for(var i=0; i<artColChLen; i++){
          var artColChild = articleColumnChildren[i];

          if(artColChild.className == 'article-wrap'){
            var articleWrap = artColChild;
            var artWrapChildren = articleWrap.children;
            var artWrChLen = artWrapChildren.length;

            for(var q=0; q<artWrChLen; q++){
              var artWrChild = artWrapChildren[q];

              if(artWrChild.className.indexOf('statistic-top-block') != -1){
                var statTopBlock = artWrChild;
                var stTopBlckChildren = statTopBlock.children;
                var stTpBlChLen = stTopBlckChildren.length;

                for(var w=0; w<stTpBlChLen; w++){
                  var stTpBlChild = stTopBlckChildren[w];

                  if(stTpBlChild.className == 'net-block'){
                    stTpBlChild.style.display = 'none';
                  }

                  if(stTpBlChild.className.indexOf('comment') != -1){
                    stTpBlChild.style.display = 'none';
                  }
                }
              }
            }
          }

          if(artColChild.className == 'net-wrap'){
            artColChild.style.display = 'none';
          }

          if(artColChild.tagName == 'DIV'){
            if(artColChild.hasAttribute('id') == false && artColChild.hasAttribute('class') == false){
              var iframeSpanBundle = artColChild;
              var ifrSpnBndlChildren = iframeSpanBundle.children;
              var ifrSpBnChLen = ifrSpnBndlChildren.length;

              for(var a=0; a<ifrSpBnChLen; a++){
                var ifrSpBnChild = ifrSpnBndlChildren[a];

                if(ifrSpBnChild.tagName == 'IFRAME' && ifrSpBnChild.nextElementSibling.tagName == 'SPAN'){
                  artColChild.style.display = 'none';
                }
              }
            }
          }

          if(artColChild.className == 'blurb'){
            artColChild.style.display = 'none';
          }

          if(artColChild.tagName == 'A' && currEl.name == 'comments'){
            artColChild.style.display = 'none';
          }

          if(artColChild.className.indexOf('fb-comments') != -1){
            artColChild.style.display = 'none';
          }
        }
      }
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
