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
let tableSeattleRandom=document.createElement('tr');
let cookiesSeattleRandom=document.createElement('td');
cookiesSeattleRandom.innerText='the total is '+seattle.total;
tableSeattleRandom.appendChild(cookiesSeattleRandom);
seattleRandom.appendChild(tableSeattleRandom);

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
let tableTokyoRandom=document.createElement('tr');
let cookiesTokyoRandom=document.createElement('td');
cookiesTokyoRandom.innerText='the total is '+tokyo.total;
tableTokyoRandom.appendChild(cookiesTokyoRandom);
tokyoRandom.appendChild(tableTokyoRandom);
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
let tableDubaiRandom=document.createElement('tr');
let cookiesDubaiRandom=document.createElement('td');
cookiesDubaiRandom.innerText='the total is '+dubai.total;
tableDubaiRandom.appendChild(cookiesDubaiRandom);
dubaiRandom.appendChild(tableDubaiRandom);
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
let tableParisRandom=document.createElement('tr');
let cookiesParisRandom=document.createElement('td');
cookiesParisRandom.innerText='The total is '+paris.total;
tableParisRandom.appendChild(cookiesParisRandom);
parisRandom.appendChild(tableParisRandom);
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
let tableLimaRandom=document.createElement('tr');
let cookiesLimaRandom=document.createElement('td');
cookiesLimaRandom.innerText='The total is '+lima.total;
tableLimaRandom.appendChild(cookiesLimaRandom);
limaRandom.appendChild(tableLimaRandom);
// end of Lima City

