import{a as w,S,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const q="23963114-6d0d5d874ae460d9125bacd21",E="https://pixabay.com/api/",B=15;async function u(o,t=1){return(await w.get(E,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:B}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-more");let P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:a,comments:b,downloads:v})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${b}</p>
          <p><b>Downloads:</b> ${v}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){m.innerHTML=""}function p(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}function M(){y.classList.remove("hidden")}function g(){y.classList.add("hidden")}const O=document.querySelector(".form");document.querySelector(".gallery");const A=document.querySelector(".load-more");let c="",s=1,L=0;O.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!!c){$(),g(),s=1,p();try{const t=await u(c,s);if(L=t.totalHits,t.hits.length===0){l.warning({title:"No results",message:"No images found."}),d();return}h(t.hits),M()}catch{l.error({title:"Error",message:"Failed to fetch images."})}finally{d()}}});A.addEventListener("click",async()=>{s+=1,p();try{const o=await u(c,s);h(o.hits),(s-1)*15+o.hits.length>=L&&(g(),l.info({message:"We're sorry, but you've reached the end of search results."}));const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch{l.error({title:"Error",message:"Failed to load more images."})}finally{d()}});
//# sourceMappingURL=index.js.map
