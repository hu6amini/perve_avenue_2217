(function(){function e(i){if(i.closest("#pa_slideshow"))return;if(i.getAttribute("data-src")&&i.getAttribute("decoding")==="async")return;if(!i.getAttribute("data-src")){i.setAttribute("data-src",i.src);i.removeAttribute("src")}if(!i.getAttribute("decoding"))i.setAttribute("decoding","async");i.setAttribute("data-sizes","auto");i.classList.add("lazyload")}var t=new MutationObserver(function(o){o.forEach(function(n){n.addedNodes.forEach(function(i){if(i.nodeType===Node.ELEMENT_NODE&&i.tagName==="IMG")e(i)})})});t.observe(document.documentElement,{childList:!0,subtree:!0});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("img:not(.lazyload)").forEach(function(i){e(i)})})})();
