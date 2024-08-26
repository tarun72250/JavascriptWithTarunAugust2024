//1. Matches
//elem.matches(css):- To check if element matches the given css selectors or not

let id1 = document.getElementById("id1");
console.log(id1);

console.log(id1.matches(".class"));//false
console.log(id1.matches(".div1"));//true

//2. Closest 
//elem.closest(css):- To look for the nearest ancestor that matches the given CSS selector . The element itself is also checked.

let span1 = document.getElementById("span1");
console.log(span1.closest(".div1"));


//3. Contains
//elemA.contains(elemB) :- Return true if elemB is inside elemA (a descendent of elemA) or when elemA == elemB

console.log(span1.contains(id1));//false

console.log(id1.contains(span1));//true