const menu__icon = document.querySelector("#icon");
const menu__body = document.querySelector("#menu__body");
const menuItems = document.querySelector("#menu__body");
const body = document.body;


menu__icon.addEventListener("click", () => {
	body.classList.toggle("stop-scroll");
	menu__icon.classList.toggle("menu__icon--active");
	menu__body.classList.toggle("menu__body--visible");
});
menuItems.addEventListener("click", () => {
	body.classList.remove("stop-scroll");
	menu__icon.classList.remove("menu__icon--active");
	menu__body.classList.remove("menu__body--visible");
});

