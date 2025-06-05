import{S as n}from"./assets/vendor-g6-w1428.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");fetch("./data/images.json").then(t=>t.json()).then(t=>{const o=t.map(({preview:l,original:i,description:e})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${l}" alt="${e}" />
          </a>
        </li>`).join("");c.innerHTML=o,new n(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>console.error("Görseller yüklenemedi:",t));
//# sourceMappingURL=index.js.map
