
'use strict';
const corpus=window.HIT821_SEARCH;
const main=document.getElementById('main');
const pages=Array.from(main.querySelectorAll('article'));
const search=document.getElementById('search');
const links=Array.from(document.querySelectorAll('a.node'));
const groups=Array.from(document.querySelectorAll('.group'));
const sections=Array.from(document.querySelectorAll('nav > details'));
const count=document.getElementById('count');
function normalize(s){return s.toLowerCase().replace(/伯氏/g,'柏氏').replace(/柯肯达尔|柯氏效应|kirkendall/gi,'柯肯达尔').replace(/fick/gi,'菲克').replace(/\s+/g,' ').trim();}
const normalizedCorpus=Object.fromEntries(Object.entries(corpus).map(([k,v])=>[k,normalize(v)]));
function filter(){
 const words=normalize(search.value).split(' ').filter(Boolean);
 let knowledge=0,qa=0;
 links.forEach(a=>{const hit=words.every(w=>normalizedCorpus[a.dataset.key].includes(w));a.hidden=!hit;if(hit){a.dataset.key.startsWith('k')?knowledge++:qa++;}});
 groups.forEach(g=>{g.hidden=!Array.from(g.querySelectorAll('.node')).some(a=>!a.hidden);});
 sections.forEach(d=>{d.hidden=!Array.from(d.querySelectorAll('.node')).some(a=>!a.hidden);if(words.length&&!d.hidden)d.open=true;});
 count.textContent=words.length?`匹配 ${knowledge} 条知识点 · ${qa} 道背诵题`:'101条知识点 · 50道背诵题';
 document.getElementById('empty').hidden=knowledge+qa>0;
}
function display(move){
 let id;try{id=decodeURIComponent(location.hash.slice(1))||'home';}catch(e){id='home';}
 if(id==='main'){document.getElementById('main').scrollIntoView();return;}
 const selected=pages.find(p=>p.id===id)||document.getElementById('home');
 pages.forEach(p=>p.hidden=p!==selected);
 links.forEach(a=>{if(a.dataset.key===selected.id){a.setAttribute('aria-current','page');a.closest('details').open=true;}else a.removeAttribute('aria-current');});
 document.title=(selected.id==='home'?'哈工大821 · 知识点查询':selected.querySelector('h1').textContent+' · 哈工大821');
 if(move && matchMedia('(max-width:640px)').matches){setMenu(false);}
 if(move){selected.focus({preventScroll:true});selected.scrollIntoView({block:'start'});}
}
search.addEventListener('input',filter);
document.getElementById('clear').addEventListener('click',()=>{search.value='';filter();search.focus();});
document.getElementById('print').addEventListener('click',()=>window.print());
window.addEventListener('hashchange',()=>display(true));
display(false);

const menuToggle=document.getElementById('menu-toggle');
function setMenu(open){document.body.classList.toggle('menu-collapsed',!open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'收起目录':'搜索 / 目录';}
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
