console.log("jay jagannath");
let h2=document.querySelector("h2");// accesing the element first,here we want to change in h2 so first acces h2..//for accessinjg we need tag/class/id
//console.log(h2.innerText);//property used to change the problem 
h2.innerText=h2.innerText+" from apna college "



// PRACTISING QUESTION 2
 // Accesing element where we want to change
      //   let divs=document.querySelectorAll(".BOX")

      //  divs[0].innerText="I PROPOSED HER TODAY";

      //  divs[1].innerText="she replied oh,its,ok,try to forget and love some one else who loves you";

      //  divs[2].innerText="i don't wanna love someone else i just respect her decision even after she rejected me bcz i love her really🙏 "


 //using loop solve this

 let ans=document.querySelectorAll(".BOX");
 let idx=1;
 for(answer of ans){
  answer.innerText=`new unique element value ${idx}`;
  idx++;
 }
