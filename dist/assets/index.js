import{r as c,o as p,c as h,a as o,w as b,v as w,t as i,b as x,F,d as $}from"./vendor.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};D();const M=o("h1",null,"Welcome Vite Weather!",-1),N={class:"search-box"},S={key:0,class:"weather-wrap"},k={class:"location-box"},A={class:"location"},L={class:"date"},O={class:"weather-box"},B={class:"temp"},V={class:"weather"},W={setup(f){const s=c("f3c0bb8f23f9c29eb54d6eba4661e040"),u=c("http://api.openweathermap.org/data/2.5/"),n=c(""),e=c({});function t(a){a.key=="Enter"&&fetch(`${u.value}weather?q=${n.value}&unit=metric&appid=${s.value}`).then(r=>(console.log(r),r.json())).then(l)}function l(a){console.log(a),e.value=a}function y(){let a=new Date,r=["January","February","March","April","May","June","July","August","September","October","November","December"],m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],_=a.getDate(),v=r[a.getMonth()],g=a.getFullYear();return`${m} ${_} ${v} ${g}`}return(a,r)=>(p(),h(F,null,[o("header",null,[M,o("div",N,[b(o("input",{type:"text",class:"search-bar",placeholder:"Search...","onUpdate:modelValue":r[0]||(r[0]=d=>n.value=d),onKeypress:t},null,544),[[w,n.value]])])]),o("main",null,[typeof e.value.main!="undefined"?(p(),h("div",S,[o("div",k,[o("div",A,i(e.value.name)+", "+i(e.value.sys.country),1),o("div",L,i(y()),1)]),o("div",O,[o("div",B,i((e.value.main.temp-273.15).toFixed(1))+"\xB0c",1),o("div",V,i(e.value.weather[0].main),1)])])):x("",!0)])],64))}};$(W).mount("#app");
