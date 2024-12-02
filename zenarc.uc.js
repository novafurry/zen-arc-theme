// ==UserScript==
// @name           zenarc
// @namespace      zenarc
// @version        0.0.0
// @include main
// @description    Zenarc helper script.
// @author Nova of novafurry.win
// ==/UserScript==

setTimeout(() => {
  document.querySelectorAll('[removable="false"]').forEach(el => { el.setAttribute("removable", "true") })
  var nb = document.querySelector("#zen-appcontent-navbar-container")
  document.querySelector("#TabsToolbar-customization-target").prepend(nb)
  document.querySelector("#tabbrowser-tabs").prepend(document.querySelector("#urlbar-container"))
  var wb = document.querySelector(".titlebar-buttonbox-container")
  wb.style.order = "-200"
  document.querySelector("#zen-expand-sidebar-button").style.order = "-199"
  document.querySelector("#zen-sidebar-top-buttons-customization-target").prepend(wb)
  document.querySelector("#identity-box").style.display = "none"
  document.querySelector("#tracking-protection-icon-container").style.display = "none"
  document.querySelector("#star-button-box").style.display = "none"
  document.querySelectorAll("#nav-bar-customization-target > *").forEach(el => {
    if (el.tagName.toLowerCase() == "toolbarspring") {
      el.remove()
    } else {
      document.querySelector("#zen-sidebar-top-buttons-customization-target").prepend(el)
    }
  })
  document.querSelector("#urlbar-zoom-button").style.display = "none"
}, 500)
setTimeout(() => {
  document.querySelector("#zen-sidebar-top-buttons-customization-target").prepend(document.querySelector("#PanelUI-button"))
  document.querySelector("#zen-appcontent-navbar-container").remove()
  document.querySelector("#titlebar").prepend(document.querySelector("#zen-sidebar-top-buttons"))
}, 700)
