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
