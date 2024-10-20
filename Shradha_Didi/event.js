let b=document.querySelector('#btn1');
b.onclick=(dd)=>{
  console.log('Dipi Didi ');
  alert('GooD Morning Dipi Didi');
  let a=9;
  console.log(++a);
  console.log(dd.type);
  console.log(dd.target)
  console.log(dd.clientX,dd.clientY)
};

let box=document.querySelector('#div1');
box.onmouseover=(dd)=>{
  console.log("Dipi Didi this is my box okk !")
  console.log("nOTHING TO SAY");
  console.log(dd.type);
  console.log(dd.target)
  console.log(dd.clientX,dd.clientY)
};