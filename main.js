// var >> Global scope
// let >> Local Scope
// Const >> Constant

// var x  = 5 ;
// let y = 6 ;
// let z = x+ y  ;
// console.log(z); // 11

//Arithmetic + , - , * , /  , % , ++ , --
// let x = 5 ;
// let y = 5 ;
// x++ ;
// y-- ;
// console.log(x) ;
// console.log(y) ;
// console.log(x*y);
// let num = 5 ;
// let num2 = num.toString() ;
// console.log(num2);

// let MyName = "Abdelrahman Abdelsamie" ;
// let NewName = MyName.slice(12,22)
// console.log(NewName) ;
// console.log(MyName.length);

// let x = "I am Abdelrahman Front-End Developer & I works at Mar3efa as Front-End" ;
// let y = x.replaceAll("Front-End","Back-End") ;

// console.log(x) ;
// console.log(y);

// let x  = "i am abdelrahman front-end developer" ;
// let y = x.toUpperCase() ;
// console.log(x);
// console.log(y);

//Dom
//? getElementById , getElementByClassName , getElementByTagName ,
// qureySelector(.>>class) , (quretSelectorAll(#>>Id))
// textContent , innerHTML

// let Grades = prompt("Please Eneter Your Grade ") ; // prompt >> مطالبة
// if(Grades>95)
// {
//     console.log("A+");
// }
// else if (Grades > 90 )
// {
//     console.log("A");
// }
// else if (Grades >80)
// {
//     console.log("B");
// }
// else if (Grades > 70)
// {
//     console.log("C");
// }
// else if (Grades > 60)
// {
//     console.log("D");
// }
// else
// {
//     console.log("F");
// }
// let >> local Scope
// Factorial  num

// let x = prompt("Please Enter Number To Get Factorail  ")
// let fact= 1 ;

// for(let i=1 ; i<=x ; i++)
// {
//     fact = fact * i ;
// }
// console.log(fact);
//Even , ODD
// let x = prompt("Please Enter Number To Check Num Even or Odd ") ;
// if(x%2==0 )
// {
//     console.log("Even");
// }
// else
// {
//     console.log("Odd");
// }
// Functions >> Normal , Arrow , SetTimeOut , Self_Invoke

// setTimeout(function () {
//     console.log("Hello Ma3refa 1 ");
// },2000)

// let print = () =>
// {
//     console.log("Hello Ma3refa 2");
// }
// print() ;

// (function(){
//     console.log("Hello Ma3refa");
// })() ;
// Array >> Index , Multi
// let Names =
//  [
//     "Ahmed","Ali","Mostfa" ,
//     ["Mahmoud","Aya","Sara"] , //[3][0] , [3][1] , [3] [2]
//     "Abdelrahman" , //[4]
//     ["Hussain"] //[5][0]
//  ] ;
//  //Abdelrahaman ?
//  console.log(Names[5][0]);

// let person =
// {
//     name : "Ahemd" ,
//     Age : 18 ,
//     phone : "01015" ,
// }
//  console.log(person.phone);
// let persons =
// [
//     {
//         name : "Ahmed" ,
//         Age : 18 ,
//         phone : "01015" ,
//     } ,
//     {
//         name : "Ali" ,
//         Age : 20 ,
//         phone :[ "01115", "01116"
//         ,["090" , "080" ] ] , // [2][1] ,
//     } ,
//     {
//         name : "Mostafa" ,
//         Age : 22 ,
//         phone : "01215" ,
//     } ,
// ]
// console.log(persons[1].phone[2][1]);
// loical Operators >> && , || , !
let bulbIcon = document.getElementById("bulbIcon");
let body = document.activeElement;
let cards = document.querySelectorAll(".card");
let img = document.querySelectorAll(".card img");
bulbIcon.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("dark");
      img[i].src = "Basit(2).png";
      bulbIcon.classList.add("light");
    }

  } else {
    body.classList.remove("dark");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("dark");
      img[i].src = "Basit(1).png";
    }
      bulbIcon.classList.remove("light");
  }
};
//SetAttribute
