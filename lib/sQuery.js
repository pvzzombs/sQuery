function sQuery(elem){
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
sQuery.prototype = {
	call : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			x(this.elems[i]);
		}
		return this;
	},
	html : function(x){
		var i;
		for(i = 0; i < this.elems.length; i++){
			this.elems[i].innerHTML = x;
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
	}
};