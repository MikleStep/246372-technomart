var openFeedback=document.querySelector(".feedback-btn"),feedbackPopup=document.querySelector(".feedback-pop-up"),closeFeedback=document.querySelector(".feedback-close"),openMap=document.querySelector(".map"),mapPopup=document.querySelector(".map-pop-up"),closeMap=document.querySelector(".close-map"),openCheckout=document.querySelector(".buy"),checkoutWindow=document.querySelector(".pop-up"),closeCheckout=document.querySelector(".pop-up-close"),continueShoping=document.querySelector(".continue"),openCheckout=document.querySelector(".buy"),checkoutWindow=document.querySelector(".pop-up"),closeCheckout=document.querySelector(".pop-up-close"),continueShoping=document.querySelector(".continue");openFeedback.addEventListener("click",function(a){a.preventDefault(),feedbackPopup.classList.add("feedback-show"),feedbackPopup.classList.add("animation-open"),feedbackPopup.classList.remove("animation-close")}),closeFeedback.addEventListener("click",function(a){a.preventDefault(),feedbackPopup.classList.add("animation-close"),feedbackPopup.classList.remove("feedback-show"),feedbackPopup.classList.remove("animation-open")}),openMap.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("map-show"),mapPopup.classList.add("animation-open"),mapPopup.classList.remove("animation-close")}),closeMap.addEventListener("click",function(a){function b(){mapPopup.classList.remove("map-show")}a.preventDefault(),mapPopup.classList.add("animation-close"),setTomeout(b,1e3),mapPopup.classList.remove("animation-open")}),openCheckout.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.add("checkout-show"),checkoutWindow.classList.add("animation-open"),checkoutWindow.classList.remove("animation-close")}),closeCheckout.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.remove("checkout-show"),checkoutWindow.classList.remove("animation-open"),checkoutWindow.classList.add("animation-close")}),continueShoping.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.remove("checkout-show"),checkoutWindow.classList.remove("animation-open"),checkoutWindow.classList.add("animation-close")}),openCheckout.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.add("checkout-show")}),closeCheckout.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.remove("checkout-show")}),continueShoping.addEventListener("click",function(a){a.preventDefault(),checkoutWindow.classList.remove("checkout-show")});