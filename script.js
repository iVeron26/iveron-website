const button=document.querySelector('.menu');const nav=document.querySelector('.topbar nav');button.addEventListener('click',()=>{nav.classList.toggle('mobile-open');nav.style.display=nav.classList.contains('mobile-open')?'flex':''});document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('mobile-open');nav.style.display=''}));

// V11 bilingual EN/DE switch. Design and layout remain unchanged.
(function(){
 const buttons=document.querySelectorAll('.lang-switch button');
 function setLang(lang){
   document.documentElement.lang=lang;
   document.querySelectorAll('[data-en],[data-de]').forEach(el=>{
     const val=el.getAttribute('data-'+lang);
     if(val!==null) el.textContent=val;
   });
   document.querySelectorAll('[data-en-html],[data-de-html]').forEach(el=>{
     const val=el.getAttribute('data-'+lang+'-html');
     if(val!==null) el.innerHTML=val;
   });
   buttons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
   try{localStorage.setItem('iveron-language',lang)}catch(e){}
 }
 buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
 let initial='en';
 try{initial=localStorage.getItem('iveron-language')||'en'}catch(e){}
 setLang(initial);
})();

// V23 interactive phase dropdowns — one phase open at a time.
(function(){
 const articles=[...document.querySelectorAll('.phases article[data-phase]')];
 const details=[...document.querySelectorAll('.phase-detail[data-detail]')];
 function closeAll(){
   articles.forEach(a=>{a.classList.remove('active');const b=a.querySelector('.phase-toggle');if(b)b.setAttribute('aria-expanded','false')});
   details.forEach(d=>d.classList.remove('active'));
 }
 articles.forEach(article=>{
   const button=article.querySelector('.phase-toggle');
   if(!button)return;
   button.addEventListener('click',()=>{
     const key=article.dataset.phase;
     const detail=details.find(d=>d.dataset.detail===key);
     const wasOpen=article.classList.contains('active');
     closeAll();
     if(!wasOpen && detail){article.classList.add('active');button.setAttribute('aria-expanded','true');detail.classList.add('active')}
   });
 });
})();
