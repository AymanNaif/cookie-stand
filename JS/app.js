'use strict';

let headerTime = ['Hour/\nLocation', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily \n Location Total'];

let main = document.getElementById('oneTable');
let createHead = document.createElement('thead');
main.appendChild(createHead);

for (let a = 0; a < headerTime.length; a++) {
  let th = document.createElement('th');
  createHead.appendChild(th);
  th.innerText = headerTime[a];

}


function Branch(min, max, avgCookie, total) {
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.total = total;
  this.totalArray = [];
}
Branch.prototype.randomNumber = function () {
  return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min) * this.avgCookie);
};
let seattle = new Branch(23, 65, 6.3, 0);
let tableSeattle = document.createElement('tr');
let locationBranch = document.createElement('td');
tableSeattle.appendChild(locationBranch);
locationBranch.textContent = 'Seattle';

for (let i = 0; i < 14; i++) {
  let main = document.getElementById('oneTable');
  let cookiesSeattle = document.createElement('td');
  let totalSeattle = seattle.randomNumber();
  cookiesSeattle.innerText = totalSeattle;
  tableSeattle.appendChild(cookiesSeattle);
  main.appendChild(tableSeattle);
  seattle.totalArray.push(totalSeattle);
  seattle.total += totalSeattle;
}
let valueSeattle = seattle.totalArray;

// below is for the total number of cookies for one branch
let seattleRandom = document.getElementById('oneTable');
let cookiesSeattleRandom = document.createElement('th');
cookiesSeattleRandom.innerText = seattle.total;
tableSeattle.appendChild(cookiesSeattleRandom);
seattleRandom.appendChild(tableSeattle);

// end of seattlee city..

let tokyo = new Branch(3, 24, 1.2, 0);
let tableTokyo = document.createElement('tr');
let locationBranchTokyo = document.createElement('td');
tableTokyo.appendChild(locationBranchTokyo);
locationBranchTokyo.textContent = 'Tokyo';

for (let i = 0; i < 14; i++) {
  let main = document.getElementById('oneTable');
  let cookiesTokyo = document.createElement('td');
  let totalTokyo = tokyo.randomNumber();
  cookiesTokyo.innerText = totalTokyo;
  tableTokyo.appendChild(cookiesTokyo);
  main.appendChild(tableTokyo);
  tokyo.totalArray.push(totalTokyo);
  tokyo.total += totalTokyo;
}
let valueTokyo = tokyo.totalArray;

//below is for the total number of cookies for one branch
let tokyoRandom = document.getElementById('oneTable');
let cookiesTokyoRandom = document.createElement('th');
cookiesTokyoRandom.innerText = tokyo.total;
tableTokyo.appendChild(cookiesTokyoRandom);
tokyoRandom.appendChild(tableTokyo);
// // end of Tokyo City

let dubai = new Branch(11, 38, 3.7, 0);
let tableDubai = document.createElement('tr');
let locationBranchDubai = document.createElement('td');
tableDubai.appendChild(locationBranchDubai);
locationBranchDubai.textContent = 'Dubai';

for (let i = 0; i < 14; i++) {
  let main = document.getElementById('oneTable');
  let cookiesDubai = document.createElement('td');
  let totalDubai = dubai.randomNumber();
  cookiesDubai.innerText = totalDubai;
  tableDubai.appendChild(cookiesDubai);
  main.appendChild(tableDubai);
  dubai.totalArray.push(totalDubai);
  dubai.total += totalDubai;
}
let valueDubai = dubai.totalArray;

//below is for the total number of cookies for one branch
let dubaiRandom = document.getElementById('oneTable');
let cookiesDubaiRandom = document.createElement('td');
cookiesDubaiRandom.innerText = dubai.total;
tableDubai.appendChild(cookiesDubaiRandom);
dubaiRandom.appendChild(tableDubai);
// end of Dubai City

let paris = new Branch(20, 38, 2.3, 0);
let tableParis = document.createElement('tr');
let locationBranchParis = document.createElement('td');
tableParis.appendChild(locationBranchParis);
locationBranchParis.textContent = 'Paris';

for (let i = 0; i < 14; i++) {
  let main = document.getElementById('oneTable');
  let cookiesParis = document.createElement('td');
  let totalParis = paris.randomNumber();
  cookiesParis.innerText = totalParis;
  tableParis.appendChild(cookiesParis);
  main.appendChild(tableParis);
  paris.totalArray.push(totalParis);
  paris.total += totalParis;
}
let valueParis = paris.totalArray;

//below is for the total number of cookies for one branch
let parisRandom = document.getElementById('oneTable');
let cookiesParisRandom = document.createElement('td');
cookiesParisRandom.innerText = paris.total;
tableParis.appendChild(cookiesParisRandom);
parisRandom.appendChild(tableParis);
// // end of Paris City

let lima = new Branch(2, 16, 4.6, 0);
let tableLima = document.createElement('tr');
let locationBranchLima = document.createElement('td');
tableLima.appendChild(locationBranchLima);
locationBranchLima.textContent = 'Lima';

for (let i = 0; i < 14; i++) {

  let main = document.getElementById('oneTable');
  let cookiesLima = document.createElement('td');
  let totalLima = lima.randomNumber();
  cookiesLima.innerText = totalLima;
  tableLima.appendChild(cookiesLima);
  main.appendChild(tableLima);
  lima.totalArray.push(totalLima);

  lima.total += totalLima;
}
let valueLima = lima.totalArray;



//below is for the total number of cookies for one branch
let limaRandom = document.getElementById('oneTable');
let cookiesLimaRandom = document.createElement('td');
cookiesLimaRandom.innerText = lima.total;
tableLima.appendChild(cookiesLimaRandom);
limaRandom.appendChild(tableLima);
// end of Lima City



let createFooter = document.createElement('tfoot');
main.appendChild(createFooter);
let footerTotal = document.createElement('td');
createFooter.appendChild(footerTotal);
footerTotal.textContent = 'Total Per Hour';

let sumHour = [];
for (let o = 0; o < 14; o++) {
  let totalPerHour = valueSeattle[o] + valueTokyo[o] + valueDubai[o] + valueParis[o] + valueLima[o];
  sumHour.push(totalPerHour);
}

for (let a = 0; a < sumHour.length; a++) {
  let td = document.createElement('td');
  createFooter.appendChild(td);
  td.innerText = sumHour[a];
}

// let totalOfTotalDay=seattle.total+tokyo.total+dubai.total+paris.total+lima.total;
let totalOfTotal=0;
for(let p=0;p<sumHour.length;p++){
  totalOfTotal += sumHour[p];
}
let totalOfTotalHour = totalOfTotal;

// let totalOfTotal=totalOfTotalDay+totalOfTotalHour;

let td = document.createElement('td');
createFooter.appendChild(td);
td.innerText = 'Total of \n total: ' + totalOfTotalHour;

// the end of footer

// Start to add new location
let form = document.getElementById('addLocation');

form.addEventListener('submit', getLocation);

function getLocation(e) {
  e.preventDefault();

  let locationTr = document.createElement('tr');
  main.appendChild(locationTr);
  let locationTd = document.createElement('td');
  locationTr.appendChild(locationTd);
  locationTd.textContent = e.target.locationAdder.value;

  e.preventDefault();
  let minNew = e.target.minAdder.value;
  let maxNew = e.target.maxAdder.value;
  let avgNew = e.target.avgAdder.value;
  // alert(e.target.min.value);
  let newLocationValue = new Branch(minNew,maxNew,avgNew,0); // make min , max , avg with new value ....

  for (let i = 0; i < 14; i++) {
    let main = document.getElementById('oneTable');
    let cookiesNewLocation = document.createElement('td');
    let totalNewLocation = newLocationValue.randomNumber();
    cookiesNewLocation.innerText = totalNewLocation;
    locationTr.appendChild(cookiesNewLocation);
    main.appendChild(locationTr);
    newLocationValue.totalArray.push(totalNewLocation);
    newLocationValue.total += totalNewLocation;
  }
  console.log(newLocationValue.total); // sum per location
  let valueNewLocation = newLocationValue.totalArray;
  console.log(valueNewLocation); // array for each our for same location
  // let totalHour=totalOfTotalHour+valueNewLocation[m];
  let newTotalLocationRandom = document.getElementById('oneTable');
  let cookiesNewTotalLocation = document.createElement('td'); //NewTotalLocation
  cookiesNewTotalLocation.innerText = newLocationValue.total; //NewTotalLocation
  newTotalLocationRandom.appendChild(locationTr);
  locationTr.appendChild(cookiesNewTotalLocation);
  let locationNewArray=[];
  for(let m=0;m<sumHour.length;m++){
    let NewLocationHour=sumHour[m]+ valueNewLocation[m];
    locationNewArray.push(NewLocationHour);
  }
  let td = document.createElement('td');
  main.appendChild(td);
  td.innerText = 'Total Per Hour';
  for (let a = 0; a < locationNewArray.length; a++) {
    let td = document.createElement('td');
    main.appendChild(td);
    td.innerText = locationNewArray[a];
  }
}


// end for add new location
