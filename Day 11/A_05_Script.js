

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

//4. by using getElementByName Method
let arr = document.getElementsByName("gender");
//generally used for radio button

//note :- return Array


//-----------------------------------------------------------------
//5. Selecting with querySelectorAll() and querySelector()
let p = document.querySelectorAll("p.intro");
console.log(p);