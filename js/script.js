var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var fullname = document.querySelector("[name=fullname]");

var openmap = document.querySelector(".open-map");
var map = document.querySelector(".modal-map");
var closemap = document.querySelector(".modal-map-close");

var buy = document.querySelectorAll(".buy");
var cart = document.querySelector(".cart");
var closecart = document.querySelector(".cart-close");

if (link) {
	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("write-us-show");
		fullname.focus();
	});
}

if (close) {
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("write-us-show");
	});
}

if (buy) {
	for (var i = 0; i < buy.length; i++) {
		buy[i].addEventListener("click", function(event) {
			event.preventDefault();
			cart.classList.add("cart-show");
		});
	}
}

if (closecart) {
	closecart.addEventListener("click", function(event) {
		event.preventDefault();
		cart.classList.remove("cart-show");
	});
}

if (openmap) {
	openmap.addEventListener("click", function(event) {
		event.preventDefault();
		map.classList.add("modal-map-show");
	});
}

if (closemap) {
	closemap.addEventListener("click", function(event) {
		event.preventDefault();
		map.classList.remove("modal-map-show");
	});
}

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (map.classList.contains("modal-map-show")) {
			map.classList.remove("modal-map-show");
		}
	}	
});
