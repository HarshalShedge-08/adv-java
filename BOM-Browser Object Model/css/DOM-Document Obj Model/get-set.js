// What we can Get* with DOM
// 	HTML
// 	Text
// 	Attribute

//==========================================================================================

// -----get method----- 

// let doc;

// innerText:
// doc = document.getElementById("footer").innerText;

// innerHTML:
// doc = document.getElementById("footer").innerHTML;

// getAttribute:
// doc = document.getElementById("header").getAttribute("title");

// getAttributeNode:
// doc=document.getElementById("header").getAttributeNode("title");

// Attributes:
// .value - to get value inside the attribute
// .name - to get name of that attribute

// doc = document.getElementById("header").attributes;

// doc = document.getElementById("header").attributes[2]

// doc = document.getElementById("header").attributes[2].name;


// console.log(doc)


//===========================================================================================

// -----set method----- 

let doc;

// innerText
// doc=document.getElementById("footer").innerText = "hello this is footer";
// doc = document.getElementById("footer").innerHTML;

// innerHTML
// doc=document.getElementById("footer").innerHTML = "<h1>hello this is footer</h1>";
// doc = document.getElementById("footer").innerHTML;

// setAttribute
// doc=document.getElementById('head').setAttribute("title", "i am heading one")
// doc = document.getElementById('head');

// Attributes
// doc=document.getElementById('head').attributes[1].value = "color:purple";
// doc = document.getElementById('head');

// removeAttribute
// doc=document.getElementById('head').removeAttribute("style")
// doc = document.getElementById('head');

console.log(doc)