!function(){var t;document.querySelector("[data-start]").addEventListener("click",(function(){document.getElementById("BtnStart").disabled=!0,document.getElementById("BtnStop").disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){document.getElementById("BtnStart").disabled=!1,document.getElementById("BtnStop").disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.eb2da4cb.js.map