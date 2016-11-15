	var link = document.querySelector(".btn-feedback");
	var popup = document.querySelector(".write-us");
	var close = document.querySelector(".write-us-close");
	var fullname = popup.querySelector("[name=fullname]");

	var openmap = document.querySelector(".open-map");
	var map = document.querySelector(".modal-map");
	var closemap = map.querySelector(".modal-map-close");

	var buy = document.querySelector(".buy");
	var cart = document.querySelector(".cart");
	var closecart = document.querySelector(".cart-close");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("write-us-show");
	fullname.focus();
});
	close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("write-us-show");
});

	buy.addEventListener("click", function(event) {
	event.preventDefault();
	cart.classList.add("cart-show");
});
	closecart.addEventListener("click", function(event) {
	event.preventDefault();
	cart.classList.remove("cart-show");
});

	openmap.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.add("modal-map-show");
});
	closemap.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.remove("modal-map-show");
});
	window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (map.classList.contains("modal-map-show")) {
	map.classList.remove("modal-map-show");
}
}
});






