// ==UserScript==
// @name         Ukrainska pravda | Blogs
// @namespace    https://blogs.pravda.com.ua/authors/
// @noframes
// @version      0.1
// @description  Ukrainska pravda | blogs.pravda.com.ua | Blogs
// @author       oleh.kyshlyan
// @match        http://blogs.pravda.com.ua/authors/*
// @match        https://blogs.pravda.com.ua/authors/*
// @grant        none
// ==/UserScript==

var UPBlogs = new function(){

  this.body = function(){
    var bodyCollection = document.getElementsByTagName('body');
    var body = bodyCollection[0];
    if(body != undefined){
      var bodyChildren = body.children;
      var bdChLen = bodyChildren.length;

      for(var i=0; i<bdChLen; i++){
        var currEl = bodyChildren[i];

        if(currEl.tagName == 'IMG'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.topBanner = function(){
    var body = document.getElementsByTagName('body')[0];
    if(body != undefined){
      var bodyFirstChild = body.children[0];
      var bodyFirstChildChildren = bodyFirstChild.children;
      var bdFstChdChnLen = bodyFirstChildChildren.length;

      for(var i=0; i<bdFstChdChnLen; i++){
        var currEl = bodyFirstChildChildren[i];

        if(currEl.tagName == 'INS' && currEl.className == 'adsbygoogle'){
          bodyFirstChild.style.display = 'none';
        }

        if(currEl.tagName == 'SCRIPT' && currEl.src.indexOf('adnet') != -1){
          bodyFirstChild.style.display = 'none';
        }
      }
    }
  }

  this.block0 = function(){
    var block0Collection = document.getElementsByClassName('block0');
    var blck0ZeroEl = block0Collection[0];
    if(blck0ZeroEl != undefined){
      var blck0ZeroElChildren = blck0ZeroEl.children;
      var bck0ZrElChLen = blck0ZeroElChildren.length;

      for(var i=0; i<bck0ZrElChLen; i++){
        var currEl = blck0ZeroElChildren[i];

        if(currEl.tagName == 'TABLE'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.pad0 = function(){
    var pad0Collection = document.getElementsByClassName('pad0');
    var pad0ZeroEl = pad0Collection[0];
    if(pad0ZeroEl != undefined){
      var pad0ZeroElChildren = pad0ZeroEl.children;
      var pd0ZrElChLen = pad0ZeroElChildren.length;

      for(var i=0; i<pd0ZrElChLen; i++){
        var currEl = pad0ZeroElChildren[i];

        if(currEl.className == 'cl'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'h5'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'h10'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.fblock = function(){
    var fblockCollection = document.getElementsByClassName('fblock');
    var fblockZeroEl = fblockCollection[0];
    if(fblockZeroEl != undefined){
      var fblockZeroElChildren = fblockZeroEl.children;
      var fbckZrElChLen = fblockZeroElChildren.length;

      for(var i=0; i<fbckZrElChLen; i++){
        var currEl = fblockZeroElChildren[i];

        if(currEl.className == 'h5'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'socialb2'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'h15'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'btit11'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'A' && currEl.name == 'comments'){
          currEl.style.display = 'none';
        }

        if(currEl.id == 'comentloginmenu'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'pad10'){
          currEl.style.display = 'none';
        }

        if(currEl.tagName == 'IFRAME'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'comment'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'h20'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'cl'){
          currEl.style.display = 'none';
        }
      }
    }
  }

  this.bpost = function(){
    var bpostCollection = document.getElementsByClassName('bpost');
    var bpostZeroEl = bpostCollection[0];
    if(bpostZeroEl != undefined){
      var bpostZeroElChildren = bpostZeroEl.children;
      var bpstZrElChLen = bpostZeroElChildren.length;

      for(var i=0; i<bpstZrElChLen; i++){
        var currEl = bpostZeroElChildren[i];

        if(currEl.className == 'cl'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'socialb1'){
          currEl.style.display = 'none';
        }

        if(currEl.className == 'm5'){
          var m5Children = currEl.children;
          var m5ChLen = m5Children.length;
          for(var j=0; j<m5ChLen; j++){
            var m5CurrEl = m5Children[j];

            if(m5CurrEl.className == 'pad5'){
              currEl.style.display = 'none';
            }

            if(m5CurrEl.className == 'but4'){
              currEl.style.display = 'none';
            }

            if(m5CurrEl.className == 'but5'){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
  }

  this.posts1 = function(){
    var posts1Collection = document.getElementsByClassName('posts1');
    var psts1ColLen = posts1Collection.length;

    for(var i=0; i<psts1ColLen; i++){
      var currEl = posts1Collection[i];

      if(currEl.className == 'posts1'){
        currEl.style.display = 'none';
      }
    }
  }

  this.comments1 = function(){
    var comments1Collection = document.getElementsByClassName('comments1');
    var com1ColLen = comments1Collection.length;

    for(var i=0; i<com1ColLen; i++){
      var currEl = comments1Collection[i];

      if(currEl.className == 'comments1'){
        currEl.style.display = 'none';
      }
    }
  }
}

UPBlogs.body();
UPBlogs.topBanner();
UPBlogs.block0();
UPBlogs.pad0();
UPBlogs.fblock();
UPBlogs.bpost();
UPBlogs.posts1();
UPBlogs.comments1();
