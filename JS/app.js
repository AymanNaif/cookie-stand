'use strict';

let seattle={
  min:23,
  max:65,
  avgCookie:6.3,
  numberCookie:function(){
    return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('seattle');
  let unorderedList=document.createElement('ul');
  let cookiesSeattle=document.createElement('li');
  cookiesSeattle.innerText=i+' am: '+seattle.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesSeattle);
  main.appendChild(unorderedList);
}

let main=document.getElementById('seattle');
let unorderedList=document.createElement('ul');
let cookiesSeattle=document.createElement('li');
cookiesSeattle.innerText=12+' pm: '+seattle.numberCookie()+ ' Cookies';
unorderedList.appendChild(cookiesSeattle);
main.appendChild(unorderedList);

for (let i = 1; i < 8; i++){
  let main=document.getElementById('seattle');
  let unorderedList=document.createElement('ul');
  let cookiesSeattle=document.createElement('li');
  cookiesSeattle.innerText=i+' pm: '+seattle.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesSeattle);
  main.appendChild(unorderedList);
}

// end of seattlee city..

let tokyo={
  min:3,
  max:24,
  avgCookie:1.2,
  numberCookie:function(){
    return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('tokyo');
  let unorderedList=document.createElement('ul');
  let cookiesTokyo=document.createElement('li');
  cookiesTokyo.innerText=i+' am: '+tokyo.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesTokyo);
  main.appendChild(unorderedList);
}
let tokyoMain=document.getElementById('tokyo');
let unorderedLista=document.createElement('ul');
let cookiesTokyo=document.createElement('li');
cookiesTokyo.innerText=12+' am: '+tokyo.numberCookie()+ ' Cookies';
unorderedLista.appendChild(cookiesTokyo);
tokyoMain.appendChild(unorderedList);

for (let i = 1; i < 8; i++){
  let main=document.getElementById('tokyo');
  let unorderedList=document.createElement('ul');
  let cookiesTokyo=document.createElement('li');
  cookiesTokyo.innerText=i+' pm: '+tokyo.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesTokyo);
  main.appendChild(unorderedList);
}

// end of tokyo city


let Dubai={
  min:11,
  max:38,
  avgCookie:3.7,
  numberCookie:function(){
    return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('dubai');
  let unorderedList=document.createElement('ul');
  let cookiesDubai=document.createElement('li');
  cookiesDubai.innerText=i+' am: '+Dubai.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesDubai);
  main.appendChild(unorderedList);
}
let dubaiMain=document.getElementById('dubai');
let unorderedListDubai=document.createElement('ul');
let cookiesDubai=document.createElement('li');
cookiesDubai.innerText=12+' am: '+Dubai.numberCookie()+ ' Cookies';
unorderedListDubai.appendChild(cookiesDubai);
dubaiMain.appendChild(unorderedList);

for (let i = 1; i < 8; i++){
  let main=document.getElementById('dubai');
  let unorderedList=document.createElement('ul');
  let cookiesDubai=document.createElement('li');
  cookiesDubai.innerText=i+' am: '+Dubai.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesDubai);
  main.appendChild(unorderedList);
}

// end of Dubai City


let Paris={
  min:20,
  max:38,
  avgCookie:2.3,
  numberCookie:function(){
    return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('paris');
  let unorderedList=document.createElement('ul');
  let cookiesParis=document.createElement('li');
  cookiesParis.innerText=i+' am: '+Paris.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesParis);
  main.appendChild(unorderedList);
}
let parisMain=document.getElementById('paris');
let unorderedListParis=document.createElement('ul');
let cookiesParis=document.createElement('li');
cookiesParis.innerText=12+' pm: '+Paris.numberCookie()+ ' Cookies';
unorderedListParis.appendChild(cookiesParis);
parisMain.appendChild(unorderedList);

for (let i = 1; i < 8; i++){
  let main=document.getElementById('paris');
  let unorderedList=document.createElement('ul');
  let cookiesParis=document.createElement('li');
  cookiesParis.innerText=i+' pm: '+Paris.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesParis);
  main.appendChild(unorderedList);
}

// end of Paris City


let Lima={
  min:2,
  max:16,
  avgCookie:4.6,
  numberCookie:function(){
    return Math.floor(Math.random() * (this.max - this.min) * this.avgCookie);}
};

for (let i = 6; i < 12; i++){
  let main=document.getElementById('lima');
  let unorderedList=document.createElement('ul');
  let cookiesLima=document.createElement('li');
  cookiesLima.innerText=i+' am: '+Lima.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesLima);
  main.appendChild(unorderedList);
}
let limaMain=document.getElementById('lima');
let unorderedListLima=document.createElement('ul');
let cookiesLima=document.createElement('li');
cookiesLima.innerText=12+' pm:  '+Lima.numberCookie()+ ' Cookies';
unorderedListLima.appendChild(cookiesLima);
limaMain.appendChild(unorderedListLima);

for (let i = 1; i < 8; i++){
  let main=document.getElementById('lima');
  let unorderedList=document.createElement('ul');
  let cookiesLima=document.createElement('li');
  cookiesLima.innerText=i+' pm: '+Lima.numberCookie()+ ' Cookies';
  unorderedList.appendChild(cookiesLima);
  main.appendChild(unorderedList);
}
