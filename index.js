import{a as f,S as p,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="23963114-6d0d5d874ae460d9125bacd21",h="https://pixabay.com/api/";function g(n){const o={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:o}).then(r=>r.data).catch(r=>{throw console.error("❌ Error fetching data:",r.message),r})}const c=document.querySelector(".gallery");document.querySelector(".loader");let y=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(n){const o=n.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${r}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){c.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form");l.querySelector('input[name="search-text"]');l.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Enter search text!",position:"topRight"});return}L(),S();try{const r=await g(o);if(!r.hits.length){a.info({message:"No results found.",position:"topRight"});return}b(r.hits)}catch{a.error({message:"Something went wrong.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
