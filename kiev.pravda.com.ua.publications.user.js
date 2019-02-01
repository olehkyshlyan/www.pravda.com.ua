// ==UserScript==
// @name         Kiev | Ukrainska pravda | Publications
// @namespace    https://kiev.pravda.com.ua/publications/
// @noframes
// @version      0.1
// @description  Kiev | Ukrainska pravda | kiev.pravda.com.ua | Publications
// @author       oleh.kyshlyan
// @match        http://kiev.pravda.com.ua/publications/*
// @match        https://kiev.pravda.com.ua/publications/*
// @grant        none
// ==/UserScript==

var KievUPPublications = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        for(property of body.children){

          if(property.id == 'fb-root'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.id.indexOf('adriver') != -1){
            property.style.display = 'none';
          }

        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.padr = function(){
    var padrInclosure = function(){
      var padrCollection = document.getElementsByClassName('padr');
      var padrCollZeroEl = padrCollection[0];
      if(padrCollZeroEl != undefined){
        for(property of padrCollZeroEl.children){

          if(property.className == 'socialb2'){
            property.style.display = 'none';
          }

          if(property.className == 'pad20'){
            property.style.display = 'none';
          }

          if(property.tagName == 'IFRAME' && property.nextElementSibling.tagName == 'SPAN'){
            property.style.display = 'none';
          }

          if(property.tagName == 'SPAN' && property.previousElementSibling.tagName == 'IFRAME'){
            property.style.display = 'none';
          }

          if(property.tagName == 'CENTER'){
            for(subproperty of property.children){
              if(subproperty.id.indexOf('adnet') != -1){
                property.style.display = 'none';
              }
            }
          }

          if(property.className == 'pad10'){
            property.style.display = 'none';
          }

          if(property.tagName == 'A' && property.name == 'comments'){
            property.style.display = 'none';
          }

          if(property.className.indexOf('fb-comments') != -1){
            property.style.display = 'none';
          }

          if(property.className == 'pad15'){
            property.style.display = 'none';
          }

          if(property.id.indexOf('aswift') != -1){
            property.style.display = 'none';
          }

        }
      }
    }
    setTimeout(padrInclosure,3100);
  }

  this.block3 = function(){
    var block3Inclosure = function(){
      var block3Collection = document.getElementsByClassName('block3');
      var block3CollZeroEl = block3Collection[0];
      if(block3CollZeroEl != undefined){
        for(property of block3CollZeroEl.children){

          if(property.id.indexOf('adnet') != -1){
            property.style.display = 'none';
          }

          if(property.className == 'marg15'){
            property.style.display = 'none';
          }

        }
      }
    }
    setTimeout(block3Inclosure,3200);
  }

}

KievUPPublications.body();
KievUPPublications.padr();
KievUPPublications.block3();
