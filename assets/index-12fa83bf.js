(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();new Swiper(".swiper1",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}});new Swiper(".swiper2",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});new Swiper(".swiper",{slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}});(()=>{const t=document.querySelector(".header-mobile-menu"),o=document.querySelector(".header-btn-hamburger"),s=document.querySelector(".header-btn-close"),l=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",l),s.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector("[modal-rvws-open]"),closeModalBtn:document.querySelector("[modal-rvws-close]"),modal:document.querySelector("[modal-rvws]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[modal-sub-open]"),closeModalBtn:document.querySelector("[modal-sub-close]"),modal:document.querySelector("[modal-sub]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden")}})();const i=document.querySelector('input[type="tel"]');console.log(i);const c=new Inputmask("+38 (099) 999-99-99");c.mask(i);
