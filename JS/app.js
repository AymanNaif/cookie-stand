'use strict';

// let seattle={
//   min:23,
//   max:65,
//   avgCookie:6.3,
//   totalSeattle:0,
//   numberCookie:function(){
//     return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
// };
// let header=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];

function Branch(min,max,avgCookie,total){
  this.min=min;
  this.max=max;
  this.avgCookie=avgCookie;
  this.total=total;
}
Branch.prototype.randomNumber= function(){
  return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);
};
let seattle=new Branch(23,65,6.3,0);
let tableSeattle=document.createElement('tr');

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesSeattle=document.createElement('td');
  let totalSeattle =seattle.randomNumber();
  cookiesSeattle.innerText=totalSeattle;
  tableSeattle.appendChild(cookiesSeattle);
  main.appendChild(tableSeattle);
  seattle.total+=totalSeattle;
}

// below is for the total number of cookies for one branch
let seattleRandom=document.getElementById('oneTable');
let cookiesSeattleRandom=document.createElement('th');
cookiesSeattleRandom.innerText='the total is '+seattle.total;
tableSeattle.appendChild(cookiesSeattleRandom);
seattleRandom.appendChild(tableSeattle);

// end of seattlee city..

let tokyo=new Branch(3,24,1.2,0);
let tableTokyo=document.createElement('tr');

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesTokyo=document.createElement('td');
  let totalTokyo =tokyo.randomNumber();
  cookiesTokyo.innerText=totalTokyo;
  tableTokyo.appendChild(cookiesTokyo);
  main.appendChild(tableTokyo);
  tokyo.total+=totalTokyo;
}
//below is for the total number of cookies for one branch
let tokyoRandom=document.getElementById('oneTable');
let cookiesTokyoRandom=document.createElement('th');
cookiesTokyoRandom.innerText='the total is '+tokyo.total;
tableTokyo.appendChild(cookiesTokyoRandom);
tokyoRandom.appendChild(tableTokyo);
// // end of Tokyo City

let dubai=new Branch(11,38,3.7,0);
let tableDubai=document.createElement('tr');

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesDubai=document.createElement('td');
  let totalDubai =dubai.randomNumber();
  cookiesDubai.innerText=totalDubai;
  tableDubai.appendChild(cookiesDubai);
  main.appendChild(tableDubai);
  dubai.total+=totalDubai;
}
//below is for the total number of cookies for one branch
let dubaiRandom=document.getElementById('oneTable');
let cookiesDubaiRandom=document.createElement('td');
cookiesDubaiRandom.innerText='the total is '+dubai.total;
tableDubai.appendChild(cookiesDubaiRandom);
dubaiRandom.appendChild(tableDubai);
// end of Dubai City

let paris=new Branch(20,38,2.3,0);
let tableParis=document.createElement('tr');

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesParis=document.createElement('td');
  let totalParis =paris.randomNumber();
  cookiesParis.innerText=totalParis;
  tableParis.appendChild(cookiesParis);
  main.appendChild(tableParis);
  paris.total+=totalParis;
}
//below is for the total number of cookies for one branch
let parisRandom=document.getElementById('oneTable');
let cookiesParisRandom=document.createElement('td');
cookiesParisRandom.innerText='The total is '+paris.total;
tableParis.appendChild(cookiesParisRandom);
parisRandom.appendChild(tableParis);
// // end of Paris City

let lima=new Branch(2,16,4.6,0);
let tableLima=document.createElement('tr');

for (let i = 0; i < 14; i++){

  let main=document.getElementById('oneTable');
  let cookiesLima=document.createElement('td');
  let totalLima =lima.randomNumber();
  cookiesLima.innerText=totalLima;
  tableLima.appendChild(cookiesLima);
  main.appendChild(tableLima);
  lima.total+=totalLima;
}
//below is for the total number of cookies for one branch
let limaRandom=document.getElementById('oneTable');
let cookiesLimaRandom=document.createElement('td');
cookiesLimaRandom.innerText='The total is '+lima.total;
tableLima.appendChild(cookiesLimaRandom);
limaRandom.appendChild(tableLima);
// end of Lima City

let table= document.getElementById('oneTable'), sumVal=0;
for (let i=0;i < table.rows.length;i++){
  sumVal = sumVal + parseInt(table.rows[i].cells[0].innerHTML);
}
// <<<<<<< HEAD
// end of Paris City

// let Lima={
//   min:2,
//   max:16,
//   avgCookie:4.6,
//   numberCookie:function(){
//     return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
// };
// =======

let tableRawSum=document.createElement('tr');
// >>>>>>> 086b3c59edbc1f0b6da2092db4b49314b6b2949e

let main=document.getElementById('oneTable');
let cookiesRawSum=document.createElement('td');
cookiesRawSum.innerText='The total per hour is '+sumVal;
tableRawSum.appendChild(cookiesRawSum);
main.appendChild(tableRawSum);
