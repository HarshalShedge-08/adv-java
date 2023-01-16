
// Targeting / Selecting Methods:

// document
// document.all
// document.head
// document.body
// document.images
// document.links
// document.forms
// document.doctype
// document.URL

// let doc;

// doc=document.doctype

// console.log(doc);

//=========================================================

// Target DOM Objects:

// [2] - if there is same class names then we can select particular class
// 		  by providing index number.

// 1) document.getElementById('id')
// 2) document.getElementsByClassName('class')[2]
// 3) document.getElementByTagName('tagName')[2]
// 4) document.querySelector
// 5) document.querySelectorAll


let doc2;

// doc2 = document.getElementsByTagName('a')[1]

// doc2=document.querySelector('a')

doc2=document.querySelectorAll('a')

console.log(doc2);
