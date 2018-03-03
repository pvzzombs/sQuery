(function(funcName, baseObj){

	funcName = funcName || "sQuery";
    baseObj = baseObj || window;

    baseObj[funcName] = function(elem) {
		var cuts;
		var i;
		var j;
		var k;
		if(typeof elem === "object" && elem !== null){
			if(window === this){
				return new sQuery(elem);
			}
			this.elems = [];
			this.elems.push(elem);
			return this;
		}else{
			if(window === this){
				return new sQuery(elem);
			}
			this.elems = [];
			if(elem.indexOf(" ") > -1){
				cuts = elem.split(" ");
				for(i = 0; i < cuts.length; i++){
					//please
					if(cuts[i].indexOf("#") == 0){
						this.elems.push(document.getElementById(cuts[i].substr(1,elem.length)));
					}else if(cuts[i].indexOf(".") == 0){
						for(j = 0; j < document.getElementsByClassName(cuts[i].substr(1,elem.length)).length; j++){
						this.elems.push(document.getElementsByClassName(cuts[i].substr(1,elem.length))[j]);
						}
					}else{
						for(k = 0; k < document.getElementsByTagName(cuts[i]).length; k++){
						this.elems.push(document.getElementsByTagName(cuts[i])[k]);
						}
					}
				}
			return this;
			}else{
				if(elem.indexOf("#") == 0){
					this.elems.push(document.getElementById(elem.substr(1,elem.length)));
					return this;
				}else if(elem.indexOf(".") == 0){
					for(i = 0; i < document.getElementsByClassName(elem.substr(1,elem.length)).length; i++){
						this.elems.push(document.getElementsByClassName(elem.substr(1,elem.length))[i]);
					}
					return this;
				}else{
					var a = document.getElementsByTagName(elem);
					for(i = 0; i < a.length; i++){
						this.elems.push(document.getElementsByTagName(elem)[i]);
					}
					return this;
				}
			}
		}
	}
})("sQuery", window)
sQuery.prototype = {
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
		return this.elems[0].value;
	}
};

/**
	The below code is a javascript source from https://github.com/jfriend00/docReady/blob/master/docready.js
	Learn more by visiting the site
	START OF DOCready function
  **/

(function(funcName, baseObj) {
    "use strict";
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of 
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }
    
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
    
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("dc", window);
// modify this previous line to pass in your own method name 
// and object for the method to be attached to
/**
	END OF THE DOCready function
  **/
