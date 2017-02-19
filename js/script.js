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
	setTimeout(timer, 300);
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
	setTimeout(timer, 300);
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
	setTimeout(timer, 300);
	checkoutWindow.classList.add("animation-close");
});

continueShoping.addEventListener("click", function(event){
	event.preventDefault();
	checkoutWindow.classList.remove("checkout-show");
	checkoutWindow.classList.remove("animation-open");
	checkoutWindow.classList.add("animation-close");
});