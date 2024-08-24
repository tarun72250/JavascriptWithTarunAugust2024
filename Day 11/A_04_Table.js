let tvar = document.body.firstElementChild.firstElementChild;
console.log(tvar);
console.log(tvar.rows);//HTMLCollection(4)
console.log(tvar.caption);//caption ajyga
console.log(tvar.tHead.firstElementChild);//tr
console.log(tvar.tFoot);//null
console.log(tvar.tBodies);//HTMLCollection(1)
console.log(tvar.rows[0]);//tr
console.log(tvar.rows[0].rowIndex);//0
console.log(tvar.rows[1].rowIndex);//1
