!function(){const r=[["title","innerHTML"],[".garden_layout__header","innerHTML"],[".garden_layout__main","innerHTML"],[".garden_layout__toc","innerHTML"],["head link[rel=canonical]","href"],["head meta[name=description]","content"]];let c=new URL(location);async function n(e){var t,n,a=await(await fetch(e)).text(),o=(new DOMParser).parseFromString(a,"text/html");for([t,n]of r){var i=o.querySelector(t)[n];document.querySelector(t)[n]=i}c=e,window.scrollTo(0,0)}document.addEventListener("click",async e=>{var t;"A"===e.target.tagName&&(t=new URL(e.target.href)).origin===location.origin&&t.pathname.startsWith("/garden/")&&t.pathname!==location.pathname&&(e.preventDefault(),await n(t),history.pushState(null,document.querySelector("title").innerHTML,t),gtag("event","page_view",{page_location:document.location.href,page_title:document.title}))}),window.onpopstate=async()=>{new URL(location).pathname!==c.pathname&&await n(new URL(location))}}();