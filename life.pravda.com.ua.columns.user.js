// ==UserScript==
// @name         Life | Columns
// @namespace    http://life.pravda.com.ua/columns/
// @noframes
// @version      0.1
// @description  Life | www.pravda.com.ua | Columns
// @author       oleh.kyshlyan
// @match        http://life.pravda.com.ua/columns/*
// @match        https://life.pravda.com.ua/columns/*
// @grant        none
// ==/UserScript==

//alert('Life | Columns');

var LifePravdaColumns = new function(){

  this.mainInterviewPageChildren = function(){
    var mainIntPageInclosure = function(){
      var mainInterviewPagCollection = document.getElementsByClassName('main interview-page');
      var mainInterviewPageZeroEl = mainInterviewPagCollection[0];
      var mainIntPgZeroElChildren = mainInterviewPageZeroEl.children;
      var mnIntPgZeroElChLen = mainIntPgZeroElChildren.length;
      for(var i=0; i<mnIntPgZeroElChLen; i++){
        var currEl = mainIntPgZeroElChildren[i];
        if(currEl.id.indexOf('admixer') != -1){ currEl.style.display = 'none'; }
        if(currEl.id.indexOf('mwayss') != -1){ currEl.style.display = 'none'; }
        if(currEl.id.indexOf('adriver') != -1){ currEl.style.display = 'none'; }
      }
    }
    setTimeout(mainIntPageInclosure,2000);
  }

  this.netBlock = function(){
    var netBlockCollection = document.getElementsByClassName('net-block');
    var netBlCollLen = netBlockCollection.length;
    for(var i=0; i<netBlCollLen; i++){
      var currEl = netBlockCollection[i];
      if(currEl.parentElement.className.indexOf('statistic-top-block') != -1){
        currEl.style.display = 'none';
      }
    }
  }

  this.article300Banner = function(){
    var article300BannerCollection = document.getElementsByClassName('article_300_banner');
    var article300BannerZeroEl = article300BannerCollection[0];
    if(article300BannerZeroEl != undefined){
      if(article300BannerZeroEl.parentElement.className == 'mobile-block-wrap'){
        article300BannerZeroEl.style.display = 'none';
      }
    }
  }

  this.pagePoint = function(){
    var pagePointCollection = document.getElementsByClassName('pagewrap page-point');
    var pagePointZeroEl = pagePointCollection[0];
    if(pagePointZeroEl != undefined){
      pagePointZeroEl.style.display = 'none';
    }
  }
}

LifePravdaColumns.mainInterviewPageChildren();
LifePravdaColumns.netBlock();
LifePravdaColumns.article300Banner();
LifePravdaColumns.pagePoint();
