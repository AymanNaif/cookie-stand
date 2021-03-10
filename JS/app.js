'use strict';

let headerTime=['','6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','Daily \n Location Total'];

let main=document.getElementById('oneTable');
let createHead=document.createElement('thead');
main.appendChild(createHead);

for(let a=0;a<headerTime.length;a++){
  let th=document.createElement('th');
  createHead.appendChild(th);
  th.innerText=headerTime[a];

}


function Branch(min,max,avgCookie,total){
  this.min=min;
  this.max=max;
  this.avgCookie=avgCookie;
  this.total=total;
  this.totalArray=[];
}
Branch.prototype.randomNumber= function(){
  return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);
};
let seattle=new Branch(23,65,6.3,0);
let tableSeattle=document.createElement('tr');
let locationBranch=document.createElement('td');
tableSeattle.appendChild(locationBranch);
locationBranch.textContent='Seattle';

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesSeattle=document.createElement('td');
  let totalSeattle =seattle.randomNumber();
  cookiesSeattle.innerText=totalSeattle;
  tableSeattle.appendChild(cookiesSeattle);
  main.appendChild(tableSeattle);
  seattle.totalArray.push(totalSeattle);
  seattle.total+=totalSeattle;
}
let valueSeattle=seattle.totalArray;

// below is for the total number of cookies for one branch
let seattleRandom=document.getElementById('oneTable');
let cookiesSeattleRandom=document.createElement('th');
cookiesSeattleRandom.innerText=seattle.total;
tableSeattle.appendChild(cookiesSeattleRandom);
seattleRandom.appendChild(tableSeattle);

// end of seattlee city..

let tokyo=new Branch(3,24,1.2,0);
let tableTokyo=document.createElement('tr');
let locationBranchTokyo=document.createElement('td');
tableTokyo.appendChild(locationBranchTokyo);
locationBranchTokyo.textContent='Tokyo';

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesTokyo=document.createElement('td');
  let totalTokyo =tokyo.randomNumber();
  cookiesTokyo.innerText=totalTokyo;
  tableTokyo.appendChild(cookiesTokyo);
  main.appendChild(tableTokyo);
  tokyo.totalArray.push(totalTokyo);
  tokyo.total+=totalTokyo;
}
let valueTokyo=tokyo.totalArray;

//below is for the total number of cookies for one branch
let tokyoRandom=document.getElementById('oneTable');
let cookiesTokyoRandom=document.createElement('th');
cookiesTokyoRandom.innerText=tokyo.total;
tableTokyo.appendChild(cookiesTokyoRandom);
tokyoRandom.appendChild(tableTokyo);
// // end of Tokyo City

let dubai=new Branch(11,38,3.7,0);
let tableDubai=document.createElement('tr');
let locationBranchDubai=document.createElement('td');
tableDubai.appendChild(locationBranchDubai);
locationBranchDubai.textContent='Dubai';

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesDubai=document.createElement('td');
  let totalDubai =dubai.randomNumber();
  cookiesDubai.innerText=totalDubai;
  tableDubai.appendChild(cookiesDubai);
  main.appendChild(tableDubai);
  dubai.totalArray.push(totalDubai);
  dubai.total+=totalDubai;
}
let valueDubai=dubai.totalArray;

//below is for the total number of cookies for one branch
let dubaiRandom=document.getElementById('oneTable');
let cookiesDubaiRandom=document.createElement('td');
cookiesDubaiRandom.innerText=dubai.total;
tableDubai.appendChild(cookiesDubaiRandom);
dubaiRandom.appendChild(tableDubai);
// end of Dubai City

let paris=new Branch(20,38,2.3,0);
let tableParis=document.createElement('tr');
let locationBranchParis=document.createElement('td');
tableParis.appendChild(locationBranchParis);
locationBranchParis.textContent='Paris';

for (let i = 0; i < 14; i++){
  let main=document.getElementById('oneTable');
  let cookiesParis=document.createElement('td');
  let totalParis =paris.randomNumber();
  cookiesParis.innerText=totalParis;
  tableParis.appendChild(cookiesParis);
  main.appendChild(tableParis);
  paris.totalArray.push(totalParis);
  paris.total+=totalParis;
}
let valueParis=paris.totalArray;

//below is for the total number of cookies for one branch
let parisRandom=document.getElementById('oneTable');
let cookiesParisRandom=document.createElement('td');
cookiesParisRandom.innerText=paris.total;
tableParis.appendChild(cookiesParisRandom);
parisRandom.appendChild(tableParis);
// // end of Paris City

let lima=new Branch(2,16,4.6,0);
let tableLima=document.createElement('tr');
let locationBranchLima=document.createElement('td');
tableLima.appendChild(locationBranchLima);
locationBranchLima.textContent='Lima';

for (let i = 0; i < 14; i++){

  let main=document.getElementById('oneTable');
  let cookiesLima=document.createElement('td');
  let totalLima =lima.randomNumber();
  cookiesLima.innerText=totalLima;
  tableLima.appendChild(cookiesLima);
  main.appendChild(tableLima);
  lima.totalArray.push(totalLima);

  lima.total+=totalLima;
}
let valueLima=lima.totalArray;



//below is for the total number of cookies for one branch
let limaRandom=document.getElementById('oneTable');
let cookiesLimaRandom=document.createElement('td');
cookiesLimaRandom.innerText=lima.total;
tableLima.appendChild(cookiesLimaRandom);
limaRandom.appendChild(tableLima);
// end of Lima City

let createFooter=document.createElement('tfoot');
main.appendChild(createFooter);
let footerTotal=document.createElement('td');
createFooter.appendChild(footerTotal);
footerTotal.textContent='Total Per Hour';

let sumHour=[];
for(let o=0;o<14;o++){
  let totalPerHour=valueSeattle[o]+valueTokyo[o]+valueDubai[o]+valueParis[o]+valueLima[o];
  sumHour.push(totalPerHour);
}

for(let a=0;a<sumHour.length;a++){
  let td=document.createElement('td');
  createFooter.appendChild(td);
  td.innerText=sumHour[a];
}
// the end of footer


let totalOfTotalDay=seattle.total+tokyo.total+dubai.total+paris.total+lima.total;
let totalOfTotalHour=sumHour[0]+sumHour[1]+sumHour[2]+sumHour[3]+sumHour[4]+sumHour[5]+sumHour[6]+sumHour[7]+sumHour[8]+sumHour[9]+sumHour[10]+sumHour[11]+sumHour[12]+sumHour[13];

let totalOfTotal=totalOfTotalDay+totalOfTotalHour;

let td=document.createElement('td');
createFooter.appendChild(td);
td.innerText='Total of \n total: '+totalOfTotal;
// end of Lima City
