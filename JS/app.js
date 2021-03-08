'use strict';

let seattle={
  min:23,
  max:65,
  avgCookie:6.3,
  totalSeattle:0,
  numberCookie:function(){
    return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('seattle');
  let unorderedList=document.createElement('ul');
  let cookiesSeattle=document.createElement('li');
  let randomNumber =seattle.numberCookie();
  cookiesSeattle.innerText=i+' am: '+randomNumber+ ' Cookies';
  unorderedList.appendChild(cookiesSeattle);
  main.appendChild(unorderedList);
  seattle.totalSeattle+=randomNumber;
}

let seattleMain=document.getElementById('seattle');
let unorderedListSeattle=document.createElement('ul');
let cookiesSeattle=document.createElement('li');
let randomNumber =seattle.numberCookie();
cookiesSeattle.innerText=12+' pm: '+randomNumber+ ' Cookies';
unorderedListSeattle.appendChild(cookiesSeattle);
seattleMain.appendChild(unorderedListSeattle);
seattle.totalSeattle+=randomNumber;


for (let i = 1; i < 8; i++){
  let main=document.getElementById('seattle');
  let unorderedList=document.createElement('ul');
  let cookiesSeattle=document.createElement('li');
  let randomNumber =seattle.numberCookie();
  cookiesSeattle.innerText=i+' pm: '+randomNumber+ ' Cookies';
  unorderedList.appendChild(cookiesSeattle);
  main.appendChild(unorderedList);
  seattle.totalSeattle+=randomNumber;
}
let seattleRandom=document.getElementById('seattle');
let unorderedListRandom=document.createElement('ul');
let cookiesSeattleRandom=document.createElement('li');
cookiesSeattleRandom.innerText=' Total: '+seattle.totalSeattle+ ' Cookies';
unorderedListRandom.appendChild(cookiesSeattleRandom);
seattleRandom.appendChild(unorderedListRandom);

// end of seattlee city..

let tokyo={
  min:3,
  max:24,
  avgCookie:1.2,
  totalTokyo:0,
  numberCookie:function(){
    return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('tokyo');
  let unorderedList=document.createElement('ul');
  let cookiesTokyo=document.createElement('li');
  let randomNumberT =tokyo.numberCookie();
  cookiesTokyo.innerText=i+' am: '+randomNumberT+ ' Cookies';
  unorderedList.appendChild(cookiesTokyo);
  main.appendChild(unorderedList);
  tokyo.totalTokyo+=randomNumberT;
}

let main=document.getElementById('tokyo');
let unorderedList=document.createElement('ul');
let cookiesTokyo=document.createElement('li');
let randomNumberT =tokyo.numberCookie();
cookiesTokyo.innerText=12+' pm: '+randomNumberT+ ' Cookies';
unorderedList.appendChild(cookiesTokyo);
main.appendChild(unorderedList);
tokyo.totalTokyo+=randomNumberT;

for (let i = 1; i < 8; i++){
  let main=document.getElementById('tokyo');
  let unorderedList=document.createElement('ul');
  let cookiesTokyo=document.createElement('li');
  let randomNumberT =tokyo.numberCookie();
  cookiesTokyo.innerText=i+' pm: '+randomNumberT+ ' Cookies';
  unorderedList.appendChild(cookiesTokyo);
  main.appendChild(unorderedList);
  tokyo.totalTokyo+=randomNumberT;
}
let tokyoRandom=document.getElementById('tokyo');
let unorderedListTRandom=document.createElement('ul');
let cookiesTokyoRandom=document.createElement('li');
cookiesTokyoRandom.innerText=' Total: '+tokyo.totalTokyo+ ' Cookies';
unorderedListTRandom.appendChild(cookiesTokyoRandom);
tokyoRandom.appendChild(unorderedListTRandom);
// end of tokyo city


let Dubai={
  min:11,
  max:38,
  avgCookie:3.7,
  totalDubai:0,
  numberCookie:function(){
    return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('dubai');
  let unorderedList=document.createElement('ul');
  let cookiesDubai=document.createElement('li');
  let randomNumberD =Dubai.numberCookie();
  cookiesDubai.innerText=i+' am: '+randomNumberD+ ' Cookies';
  unorderedList.appendChild(cookiesDubai);
  main.appendChild(unorderedList);
  Dubai.totalDubai+=randomNumberD;
}

let dubaiMain=document.getElementById('dubai');
let unorderedListDubai=document.createElement('ul');
let cookiesDubai=document.createElement('li');
let randomNumberD =Dubai.numberCookie();
cookiesDubai.innerText=12+' pm: '+randomNumberD+ ' Cookies';
unorderedListDubai.appendChild(cookiesDubai);
dubaiMain.appendChild(unorderedListDubai);
Dubai.totalDubai+=randomNumberD;

for (let i = 1; i < 8; i++){
  let main=document.getElementById('dubai');
  let unorderedList=document.createElement('ul');
  let cookiesDubai=document.createElement('li');
  let randomNumberD =Dubai.numberCookie();
  cookiesDubai.innerText=i+' pm: '+randomNumberD+ ' Cookies';
  unorderedList.appendChild(cookiesDubai);
  main.appendChild(unorderedList);
  Dubai.totalDubai+=randomNumberD;
}
let DubaiRandom=document.getElementById('dubai');
let unorderedListDRandom=document.createElement('ul');
let cookiesDubaiRandom=document.createElement('li');
cookiesDubaiRandom.innerText=' Total: '+Dubai.totalDubai+ ' Cookies';
unorderedListDRandom.appendChild(cookiesDubaiRandom);
DubaiRandom.appendChild(unorderedListDRandom);

// end of Dubai City


let Paris={
  min:20,
  max:38,
  avgCookie:2.3,
  totalParis:0,
  numberCookie:function(){
    return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('paris');
  let unorderedList=document.createElement('ul');
  let cookiesParis=document.createElement('li');
  let randomNumberP=Paris.numberCookie();
  cookiesParis.innerText=i+' am: '+randomNumberP+ ' Cookies';
  unorderedList.appendChild(cookiesParis);
  main.appendChild(unorderedList);
  Paris.totalParis+=randomNumberP;

}
let parisMain=document.getElementById('paris');
let unorderedListParis=document.createElement('ul');
let cookiesParis=document.createElement('li');
let randomNumberP =Paris.numberCookie();
cookiesParis.innerText=12+' pm: '+randomNumberP+ ' Cookies';
unorderedListParis.appendChild(cookiesParis);
parisMain.appendChild(unorderedListParis);
Paris.totalParis+=randomNumberP;

for (let i = 1; i < 8; i++){
  let main=document.getElementById('paris');
  let unorderedList=document.createElement('ul');
  let cookiesParis=document.createElement('li');
  let randomNumberP =Paris.numberCookie();
  cookiesParis.innerText=i+' pm: '+randomNumberP+ ' Cookies';
  unorderedList.appendChild(cookiesParis);
  main.appendChild(unorderedList);
  Paris.totalParis+=randomNumberP;
}
let parisRandom=document.getElementById('paris');
let unorderedListPRandom=document.createElement('ul');
let cookiesParisRandom=document.createElement('li');
cookiesParisRandom.innerText=' Total: '+Paris.totalParis+ ' Cookies';
unorderedListPRandom.appendChild(cookiesParisRandom);
parisRandom.appendChild(unorderedListPRandom);


// end of Paris City


let Lima={
  min:2,
  max:16,
  avgCookie:4.6,
  totalLima:0,
  numberCookie:function(){
    return Math.floor(Math.random() * ((this.max - this.min + 1) + this.min)*this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('lima');
  let unorderedList=document.createElement('ul');
  let cookiesLima=document.createElement('li');
  let randomNumberL =Lima.numberCookie();
  cookiesLima.innerText=i+' am: '+randomNumberL+ ' Cookies';
  unorderedList.appendChild(cookiesLima);
  main.appendChild(unorderedList);
  Lima.totalLima+=randomNumberL;

}
let limaMain=document.getElementById('lima');
let unorderedListLima=document.createElement('ul');
let cookiesLima=document.createElement('li');
let randomNumberL =Lima.numberCookie();
cookiesLima.innerText=12+' pm: '+randomNumberL+ ' Cookies';
unorderedListLima.appendChild(cookiesLima);
limaMain.appendChild(unorderedListLima);
Lima.totalLima+=randomNumberL;


for (let i = 1; i < 8; i++){
  let main=document.getElementById('lima');
  let unorderedList=document.createElement('ul');
  let cookiesLima=document.createElement('li');
  let randomNumberL =Lima.numberCookie();
  cookiesLima.innerText=i+' pm: '+randomNumberL+ ' Cookies';
  unorderedList.appendChild(cookiesLima);
  main.appendChild(unorderedList);
  Lima.totalLima+=randomNumberL;
}
let limaRandom=document.getElementById('lima');
let unorderedListLRandom=document.createElement('ul');
let cookiesLimaRandom=document.createElement('li');
cookiesLimaRandom.innerText=' Total: '+Lima.totalLima+ ' Cookies';
unorderedListLRandom.appendChild(cookiesLimaRandom);
limaRandom.appendChild(unorderedListLRandom);

