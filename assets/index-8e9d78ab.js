(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function d(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=d(o);fetch(o.href,n)}})();new Swiper(".swiper1",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},autoplay:{delay:5e3}});new Swiper(".swiper2",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});(()=>{const t=document.querySelector(".header-mobile-menu"),e=document.querySelector(".header-btn-hamburger"),d=document.querySelector(".header-btn-close"),l=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const n=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};e.addEventListener("click",l),d.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector(".rvws-data-modal-open"),closeModalBtn:document.querySelector(".rvws-data-modal-close"),modal:document.querySelector(".rvws-data-modal")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector(".sub-data-modal-open"),closeModalBtn:document.querySelector(".sub-data-modal-close"),modal:document.querySelector(".sub-data-modal")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open-buy]"),closeModalBtn:document.querySelector("[data-modal-close-buy]"),modal:document.querySelector("[data-modal-buy]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();
