// ==UserScript==
// @name         Life | UPravda | Society
// @namespace    https://life.pravda.com.ua/society/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Society
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/society/*
// @match        https://life.pravda.com.ua/society/*
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
      var mainInterviewPageCollection = document.getElementsByClassName('main interview-page');
      if(mainInterviewPageCollection.length > 0){
        var mainIntPageZeroEl = mainInterviewPageCollection[0];
        if(mainIntPageZeroEl != undefined){
          var mainIntPgZeroElChildren = mainIntPageZeroEl.children;
          var mnIntPgZrElChLen = mainIntPgZeroElChildren.length;

          for(var i=0; i<mnIntPgZrElChLen; i++){
            var mIntPgChild = mainIntPgZeroElChildren[i];

            if(mIntPgChild.className == 'pagewrap'){
              var pagewrapHeader = mIntPgChild;
              var pgwrapHeaderChildren = pagewrapHeader.children;
              var pgwrHdrChLen = pgwrapHeaderChildren.length;

              for(var q=0; q<pgwrHdrChLen; q++){
                var pgwrHdChild = pgwrapHeaderChildren[q];

                if(pgwrHdChild.className == 'banner'){
                  pgwrHdChild.style.display = 'none';
                }

                if(pgwrHdChild.tagName == 'HEADER' && pgwrHdChild.className == 'header'){
                  pgwrHdChild.style.marginLeft = '0px';
                  pgwrHdChild.style.marginRight = '0px';
                }
              }
            }

            if(mIntPgChild.tagName == 'DIV' && mIntPgChild.className.indexOf('pagewrap') != -1){
              mIntPgChild.style.maxWidth = '1320px';
            }

            if(mIntPgChild.id.indexOf('admixer') != -1){
              mIntPgChild.style.display = 'none';
            }

            if(mIntPgChild.id.indexOf('mwayss') != -1){
              mIntPgChild.style.display = 'none';
            }

            if(mIntPgChild.id.indexOf('adriver') != -1){
              mIntPgChild.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(mainIntPageInclosure,3000);
  }

  this.articleColumn = function(){
    var articleColumnInclosure = function(){
      var articleColumnCollection = document.getElementsByClassName('article-column');
      if(articleColumnCollection.length > 0){
        var articleColumn = articleColumnCollection[0];
        if(articleColumn != undefined){
          var artColumnChildren = articleColumn.children;
          var artClChLen = artColumnChildren.length;

          for(var i=0; i<artClChLen; i++){
            var artColChild = artColumnChildren[i];

            if(artColChild.className == 'article-wrap'){
              var articleWrap = artColChild;
              var statisticTopBlock = articleWrap.children[1];
              if(statisticTopBlock != undefined){
                var statTopBlockChildren = statisticTopBlock.children;
                var stTopBkChLen = statTopBlockChildren.length;

                for(var q=0; q<stTopBkChLen; q++){
                  var stTpBkChild = statTopBlockChildren[q];

                  if(stTpBkChild.className == 'net-block'){
                    stTpBkChild.style.display = 'none';
                  }

                  if(stTpBkChild.className == 'comment-bottom-block'){
                    stTpBkChild.style.display = 'none';
                  }
                }
              }
            }

            if(artColChild.className == 'net-wrap'){
              artColChild.style.display = 'none';
            }

            if(artColChild.tagName == 'DIV'){
              var iframeSpanBundle = artColChild;
              var ifrSpnBundleChildren = iframeSpanBundle.children;
              var ifrSpnBndlChLen = ifrSpnBundleChildren.length;

              for(var w=0; w<ifrSpnBndlChLen; w++){
                var crElIfrSnBun = ifrSpnBundleChildren[w];

                if(crElIfrSnBun.tagName == 'IFRAME' && crElIfrSnBun.nextElementSibling.tagName == 'SPAN'){
                  artColChild.style.display = 'none';
                }
              }
            }

            if(artColChild.className == 'blurb'){
              artColChild.style.display = 'none';
            }

            if(artColChild.tagName == 'A' && artColChild.name == 'comments'){
              artColChild.style.display = 'none';
            }

            if(artColChild.className.indexOf('fb-comments') != -1){
              artColChild.style.display = 'none';
            }
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

}

LifePravdaSociety.body();
LifePravdaSociety.mainInterviewPage();
LifePravdaSociety.articleColumn();
LifePravdaSociety.sidebar();
