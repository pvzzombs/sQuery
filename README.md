# sQuery
[![CodeFactor](https://www.codefactor.io/repository/github/pvzzombs/squery/badge)](https://www.codefactor.io/repository/github/pvzzombs/squery)
[![HitCount](http://hits.dwyl.io/pvzzombs/sQuery.svg)](http://hits.dwyl.io/pvzzombs/sQuery)
<br />
sQuery - a mini library for selecting DOM elements
<br />
<b> Note "sQuery" is just my remake of famous DOM selector ... </b>
<br />
<i> Stable version: 1.5 + fix - <a href="https://cdn.rawgit.com/pvzzombs/sQuery/3960d331/lib/sQuery.js">sQuery.js</a></i>
<br />
<i> Minified: 1.5 + fix - <a href="https://cdn.rawgit.com/pvzzombs/sQuery/cb1ada59/lib/sQuery.min.js">sQuery.min.js</a></i>
  <br />
### Usage
<br />
<b><i>Step 1</i></b> Include the `sQuery.js` file in your html head tag.

```html
<head>
  <script src="sQuery.js"></script>
</head>
```

<br />
<b><i>Step 2</i></b> Run the sQuery file after the documents or window loads.
You can give it a name of your own. Like creating a new function constructor.

```javascript
// sQuery v1.0

function $(e){
    return new sQuery(e);
}
window.onload = function(){
    $("p").text("Hello");
};

// NOW sQuery v 1.1.1 and above now supports .ready() method

sQuery("document").ready(function(){
  //code here
});
```

<br />

### List of properties and methods

#### .ready(function()...)
###### executes a function once the DOM was ready
###### best use with document

#### .call(function(element)...)
###### accepts a function and then executes the function for the element selected.
###### the function must contain also a param that would accept the elements to come.

#### .html(string)
###### accepts a string
###### changes the innerHTML of element to the specified string
###### returns the html of the selected element if param is empty

#### .text(string)
###### accepts a string
###### changes the innerText of element to the specified string

#### .value(string)
###### accepts a string
###### changes the value of element to the specified string

#### .color(string)
###### changes the color of the element to the specified string

#### .on("event",function()...)
###### adds an event to the corresponding function
###### returns false to prevent popping, bubbling etc...

#### .toggle()
###### toggles the current display of the element to either none or block

#### .txt()
###### returns the innerText of the selected element

#### .val()
###### returns the value of the selected element

#### .css(property,value)
###### changes the assign style property to the element with the given value
