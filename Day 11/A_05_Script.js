

//Dom Methods :- 

//1. The getElementById Method
let head = document.getElementById("head-id");
console.log(head);

//2.The getElementsByClassName Method
let para = document.getElementsByClassName("para-class");
console.log(para);

//-----------------------------------------------------------------
//3. The getElementsByTagName Method  (Selecting by tagname)
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

for(let i =0 ; i<paragraph.length; i++)
{
    paragraph[i].style.color="blue";
    paragraph[i].style.backgroundColor="yellow";
}


//----------------------------------------------------------------


//4. by using getElementByName Method
let arr = document.getElementsByName("gender");
//generally used for radio button

//note :- return Array


//-----------------------------------------------------------------
//5. Selecting with querySelectorAll() and querySelector()
let p = document.querySelector("p");
console.log(p);



// 1. Return Type:
// querySelector(): Returns the first matching element that matches the specified CSS selector(s). If no match is found, it returns null.

// querySelectorAll(): Returns a static NodeList of all elements that match the specified CSS selector(s). If no matches are found, it returns an empty NodeList.

// 2. Number of Matches:
// querySelector(): Useful when you want only the first matching element.

// querySelectorAll(): Useful when you need all matching elements.

// 3. Iteration:
// querySelectorAll(): Since it returns a NodeList (which is similar to an array), you can iterate over it using methods like forEach, or convert it into an array to use array methods.

// querySelector(): Since it returns only one element (or null), iteration is not applicable.

let firstDiv = document.querySelector("div");
console.log(firstDiv);

let allDiv = document.querySelectorAll("div");
allDiv.forEach(div => console.log(div));


