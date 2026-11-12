document.documentElement.classList.add('js');

const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
/* marquee: duplicate the skills strip once so the loop is seamless */
(function(){const t=document.getElementById('mtrack');if(!t||!t.firstElementChild)return;
const c=t.firstElementChild.cloneNode(true);c.setAttribute('aria-hidden','true');t.appendChild(c)})();
/* HERO: split the giant name into per-letter spans for the blur reveal */
(function(){const g=document.querySelector('.hero .giant');if(!g)return;
 const txt=g.textContent;g.textContent='';
 if(RM){g.classList.add('nofx');g.textContent=txt;return}
 [...txt].forEach((ch,i)=>{const s=document.createElement('span');s.className='ch';
  s.textContent=ch===' '?' ':ch;s.style.animationDelay=(0.05+i*0.06)+'s';g.appendChild(s)})})();
/* one scroll handler + cursor drift: sidebar rail, progress bar, hero parallax */
const prog=document.getElementById('prog');
const giant=document.querySelector('.hero .giant');
const photo=document.querySelector('.hero .photo');
let pY=0,dX=0,dY=0;
function applyHero(){if(giant)giant.style.transform='translate('+dX+'px,'+(pY+dY)+'px)';
 if(photo)photo.style.transform='translate('+(dX*-0.4)+'px,'+(pY*0.45+dY*-0.4)+'px)'}
addEventListener('scroll',()=>{
 document.body.classList.toggle('rail',scrollY>innerHeight*.75);
 const h=document.documentElement.scrollHeight-innerHeight;
 if(prog&&h>0)prog.style.width=(scrollY/h*100)+'%';
 if(!RM&&scrollY<innerHeight){pY=scrollY*0.22;applyHero()}
},{passive:true});
if(!RM&&!matchMedia('(pointer:coarse)').matches){const hero=document.querySelector('.hero');
 if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();
   dX=((e.clientX-r.left)/r.width-0.5)*22;dY=((e.clientY-r.top)/r.height-0.5)*14;applyHero()});
  hero.addEventListener('pointerleave',()=>{dX=0;dY=0;applyHero()})}}
/* JOURNEY: measured connecting line, drawn in on scroll, re-measured on resize */
(function(){const wrap=document.querySelector('.journey');if(!wrap)return;
 const cards=[...wrap.querySelectorAll('.jcard')];if(cards.length<2)return;
 document.body.classList.add('has-jline');
 const NS='http://www.w3.org/2000/svg';
 const svg=document.createElementNS(NS,'svg');svg.setAttribute('class','jline');
 const path=document.createElementNS(NS,'path');svg.appendChild(path);
 wrap.insertBefore(svg,wrap.firstChild);
 const dots=cards.map(()=>{const c=document.createElementNS(NS,'circle');c.setAttribute('r','6');svg.appendChild(c);return c});
 function pts(){const wr=wrap.getBoundingClientRect();
  return cards.map((card,i)=>{const b=card.getBoundingClientRect();const y=b.top-wr.top+34;
   const right=card.offsetLeft>wrap.clientWidth*0.3;const x=right?b.left-wr.left:b.right-wr.left;
   return[x,y]})}
 function draw(){const P=pts();let d='M '+P[0][0]+' '+P[0][1];
  for(let i=1;i<P.length;i++){const a=P[i-1],b=P[i],my=(a[1]+b[1])/2;
   d+=' C '+a[0]+' '+my+' '+b[0]+' '+my+' '+b[0]+' '+b[1]}
  path.setAttribute('d',d);P.forEach((p,i)=>{dots[i].setAttribute('cx',p[0]);dots[i].setAttribute('cy',p[1])});
  if(!RM&&!wrap.classList.contains('drawn')){const L=path.getTotalLength();path.style.strokeDasharray=L;path.style.strokeDashoffset=L}}
 draw();addEventListener('resize',draw,{passive:true});
 if(RM){return}
 const lo=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
  path.style.transition='stroke-dashoffset 1.5s ease';path.style.strokeDashoffset=0;wrap.classList.add('drawn');lo.disconnect()}}),{threshold:.12});
 lo.observe(wrap)})();
/* numbers count up when they scroll into view */
function animCount(el){const raw=el.textContent;const m=raw.match(/\d+/);if(!m||RM)return;
const target=+m[0];if(!target)return;
const pre=raw.slice(0,m.index),suf=raw.slice(m.index+m[0].length);
const dur=1100,st=performance.now();
(function tick(now){const p=Math.min(1,(now-st)/dur);const v=Math.round(target*(1-Math.pow(1-p,3)));
el.textContent=pre+v+suf;if(p<1)requestAnimationFrame(tick)})(st)}
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animCount(e.target);cio.unobserve(e.target)}}),{threshold:.6});
document.querySelectorAll('.chip b, aside .stats b').forEach(el=>cio.observe(el));
/* scrollspy: sidebar nav highlights the section you are reading */
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;
document.querySelectorAll('aside nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))}}),
{rootMargin:'-40% 0px -55% 0px'});
['top','journey','projects','bring','refs','faq','contact'].forEach(id=>{const el=document.getElementById(id);if(el)spy.observe(el)});
/* drag-to-scroll for the horizontal projects strip */
(function(){const pw=document.getElementById('projwrap');if(!pw)return;
let down=false,sx=0,sl=0;
pw.addEventListener('pointerdown',e=>{down=true;sx=e.clientX;sl=pw.scrollLeft;pw.classList.add('grabbing')});
addEventListener('pointerup',()=>{down=false;pw.classList.remove('grabbing')});
pw.addEventListener('pointermove',e=>{if(!down)return;pw.scrollLeft=sl-(e.clientX-sx)})})();
/* photo fallback: if photo.png is missing, try the other usual names before showing initials */
(function(){const box=document.querySelector('.hero .photo');if(!box)return;
 const names=['photo.jpg','photo.jpeg','Photo.png','Photo.jpg','Photo.jpeg','photo.PNG','photo.JPG'];
 function tryNext(i){if(i>=names.length)return;const im=new Image();
  im.onload=function(){box.innerHTML='';const n=document.createElement('img');n.src=names[i];n.alt='';box.appendChild(n)};
  im.onerror=function(){tryNext(i+1)};im.src=names[i]}
 function check(){if(box.querySelector('.initials'))tryNext(0)}
 const img=box.querySelector('img');
 if(img&&!img.complete){img.addEventListener('error',()=>setTimeout(check,0));}else{setTimeout(check,0)}
})();
