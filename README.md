# sQuery
sQuery - a mini library for selecting DOM elements
<br />
### Usage
<br />
<b><i>Step 1</i></b> Include simply the `sQuery.js` file in your html head tag.

```html
<head>
  <script src="sQuery.js"></script>
</head>
```

<br />
<b><i>Step 2</i></b> Run the sQuery file after the window loads.
You can give it a name of your own. Like creating a new function constructor.

```javascript
function $(e){
    return new sQuery(e);
}
window.onload = function(){
    $(p).text("Hello");
};
```

<br />
### List of properties and methods

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
