!function(){const c=[["title","innerHTML"],[".garden_layout__header","innerHTML"],[".garden_layout__main","innerHTML"],[".garden_layout__toc","innerHTML"],["head link[rel=canonical]","href"],["head meta[name=description]","content"]];let l=new URL(location);async function n(t){const e=await fetch(t);var n,a,o=await e.text();const i=(new DOMParser).parseFromString(o,"text/html");for([n,a]of c){var r=i.querySelector(n)[a];document.querySelector(n)[a]=r}l=t,window.scrollTo(0,0)}document.addEventListener("click",async t=>{if("A"===t.target.tagName){const e=new URL(t.target.href);e.origin===location.origin&&e.pathname.startsWith("/garden/")&&e.pathname!==location.pathname&&(t.preventDefault(),await n(e),history.pushState(null,document.querySelector("title").innerHTML,e),gtag("event","page_view",{page_location:document.location.href,page_title:document.title}))}}),window.onpopstate=async()=>{new URL(location).pathname!==l.pathname&&await n(new URL(location))}}();