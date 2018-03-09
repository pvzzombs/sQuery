(function(options){
	"use strict";
	var e;
	function DOMselect(elem){
	var i, j, k, cuts, elems = [];
		if(elem.indexOf(" ") > -1){
				cuts = elem.split(" ");
				for(i = 0; i < cuts.length; i++){
					if(cuts[i].indexOf("#") == 0){
						elems.push(document.getElementById(cuts[i].substr(1,elem.length)));
					}else if(cuts[i].indexOf(".") == 0){
						for(j = 0; j < document.getElementsByClassName(cuts[i].substr(1,elem.length)).length; j++){
						elems.push(document.getElementsByClassName(cuts[i].substr(1,elem.length))[j]);
						}
					}else{
						for(k = 0; k < document.getElementsByTagName(cuts[i]).length; k++){
						elems.push(document.getElementsByTagName(cuts[i])[k]);
						}
					}
				}
			return elems;
			}else{
				if(elem.indexOf("#") == 0){
					elems.push(document.getElementById(elem.substr(1,elem.length)));
					return elems;
				}else if(elem.indexOf(".") == 0){
					for(i = 0; i < document.getElementsByClassName(elem.substr(1,elem.length)).length; i++){
						elems.push(document.getElementsByClassName(elem.substr(1,elem.length))[i]);
					}
					return elems;
				}else{
					var a = document.getElementsByTagName(elem);
					for(i = 0; i < a.length; i++){
						elems.push(document.getElementsByTagName(elem)[i]);
					}
					return elems;
				}
			}
	}
    e = function(elem) {
		if(typeof elem === "object" && elem !== null){
			if(window === this || typeof this === "undefined"){
				return new sQuery(elem);
			}
			this.elems = [elem];
			return this;
		}else{
			if(window === this || typeof this === "undefined"){
				return new sQuery(elem);
			}
			this.elems = DOMselect(elem);
			return this;
		}
	}
	e.prototype = options;
	window.sQuery = e;
	if(typeof $ === "undefined") {
		window.$ = e;
	}
	if(typeof requirejs !== "undefined"){
		define(function(){
			return e;
		});
	}
})({
	ready : function(x){
		dc(x);
	},
	call : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			x(this.elems[i]);
		}
		return this;
	},
	html : function(x){
		if(x){
			var i;
			for(i = 0; i < this.elems.length; i++){
				this.elems[i].innerHTML = x;
			}
			return this;
		}else{
			return this.elems[0].innerHTML;
		}
	},
	css : function(x, y){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].style[x] = y;
		}
		return this;
	},
	value : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].value = x;
		}
		return this;
	},
	text : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].innerText = x;
		}
		return this;
	},
	color : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].style.color = x;
		}
		return this;
	},
	on : function(evt,fun){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].addEventListener(evt, fun, false);
		}
		return this;
	},
	toggle : function(){
		var i;
		for(i = 0; i < this.elems.length; i++){
			if(this.elems[i].style.display == "none"){
				this.elems[i].style.display = "block";
			}else{
				this.elems[i].style.display = "none";
			}
		}
	},
	val : function(){
		return this.elems[0].value;
	},
	txt : function(){
		return this.elems[0].innerText;
	}
});

/**
	The below code is a javascript source from https://github.com/jfriend00/docReady/blob/master/docready.js
	Learn more by visiting the site
	START OF DOCready function
  **/

(function(funcName, baseObj) {
    "use strict";
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    function ready() {
        if (!readyFired) {
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            readyList = [];
        }
    }
    
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
    
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            readyList.push({fn: callback, ctx: context});
        }
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", ready, false);
                window.addEventListener("load", ready, false);
            } else {
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("dc", window);
/**
	END OF THE DOCready function
  **/
