var openFeedback = document.querySelector(".feedback-btn");
var feedbackPopup = document.querySelector(".feedback-pop-up");
var closeFeedback = document.querySelector(".feedback-close");
var openMap = document.querySelector(".map");
var mapPopup = document.querySelector(".map-pop-up");
var closeMap = document.querySelector(".close-map");
var openCheckout = document.querySelectorAll(".buy");
var checkoutWindow = document.querySelector(".pop-up");
var closeCheckout = document. querySelector(".pop-up-close");
var continueShoping = document.querySelector(".continue");
var serviceBtn1 = document.querySelector(".service-1");
var serviceBtn2 = document.querySelector(".service-2");
var serviceBtn3 = document.querySelector(".service-3");
var serviceShow1 = document.querySelector(".service-item-1");
var serviceShow2 = document.querySelector(".service-item-2");
var serviceShow3 = document.querySelector(".service-item-3");


openFeedback.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackPopup.classList.add("feedback-show");
	feedbackPopup.classList.add("animation-open");
	feedbackPopup.classList.remove("animation-close");
});

closeFeedback.addEventListener("click", function(event){
	event.preventDefault();
	feedbackPopup.classList.add("animation-close");
	function timer(){
		feedbackPopup.classList.remove("feedback-show");
	}
	setTimeout(timer, 450);
	feedbackPopup.classList.remove("animation-open");        
});

openMap.addEventListener("click", function(event){
	event.preventDefault();
	mapPopup.classList.add("map-show");
	mapPopup.classList.add("animation-open");
	mapPopup.classList.remove("animation-close");
});

closeMap.addEventListener("click", function(event){
	event.preventDefault();
	mapPopup.classList.add("animation-close");
	function timer(){
		mapPopup.classList.remove("map-show");
	}
	setTimeout(timer, 450);
	mapPopup.classList.remove("animation-open");     
});
for (var i = 0; i < openCheckout.length; i++){
	openCheckout[i].addEventListener("click", function(event){
		event.preventDefault();
		checkoutWindow.classList.add("checkout-show");
		checkoutWindow.classList.add("animation-open");
		checkoutWindow.classList.remove("animation-close");
	});
}

closeCheckout.addEventListener("click", function(event){
	event.preventDefault();
	checkoutWindow.classList.remove("checkout-show");
	function timer(){
		checkoutWindow.classList.remove("animation-open");
	}
	setTimeout(timer, 450);
	checkoutWindow.classList.add("animation-close");
});

continueShoping.addEventListener("click", function(event){
	event.preventDefault();
	checkoutWindow.classList.remove("checkout-show");
	checkoutWindow.classList.remove("animation-open");
	checkoutWindow.classList.add("animation-close");
});

serviceBtn1.addEventListener("click", function(event){
	event.preventDefault();
	serviceBtn1.classList.add("active-page");
	serviceBtn2.classList.remove("active-page");
	serviceBtn3.classList.remove("active-page");
	serviceShow1.classList.add("service-show");
	serviceShow2.classList.remove("service-show");
	serviceShow3.classList.remove("service-show");
});

serviceBtn2.addEventListener("click", function(event){
	event.preventDefault();
	serviceBtn1.classList.remove("active-page");
	serviceBtn2.classList.add("active-page");
	serviceBtn3.classList.remove("active-page");
	serviceShow1.classList.remove("service-show");
	serviceShow2.classList.add("service-show");
	serviceShow3.classList.remove("service-show");
});

serviceBtn3.addEventListener("click", function(event){
	event.preventDefault();
	serviceBtn1.classList.remove("active-page");
	serviceBtn2.classList.remove("active-page");
	serviceBtn3.classList.add("active-page");
	serviceShow1.classList.remove("service-show");
	serviceShow2.classList.remove("service-show");
	serviceShow3.classList.add("service-show");
});