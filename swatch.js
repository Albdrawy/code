!function(){const e=document,t=e.documentElement,n=e.body,i=e.getElementById("lights-toggle"),s=window.sr=ScrollReveal();function a(){let e=i.parentNode.querySelector(".label-text");i.checked?(n.classList.remove("lights-off"),e&&(e.innerHTML=" &#1575;&#1604;&#1610;&#1604;")):(n.classList.add("lights-off"),e&&(e.innerHTML=" &#1575;&#1604;&#1606;&#1607;&#1575;&#1585;"))}t.classList.remove("no-js"),t.classList.add("js"),window.addEventListener("load",function(){n.classList.add("is-loaded")}),n.classList.contains("has-animations")&&window.addEventListener("load",function(){s.reveal(".feature",{duration:600,distance:"20px",easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",origin:"right",viewFactor:.2})}),i&&(window.addEventListener("load",a),i.addEventListener("change",a))}();
