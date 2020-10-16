import "./index.scss";

const navbarLiElem = document.querySelectorAll(".header-navbar a");
const navbarSpanElem = document.querySelectorAll(".header-navbar li span");

navbarLiElem.forEach((li) => {
	li.addEventListener("click", (event) => {
		const target = event.target;
		// console.log(target.nextSibling);
		if (target.nextSibling.getAttribute("class") == "hover") {
			// console.log(target.nextSibling.getAttribute("class"));
			navbarSpanElem.forEach((span) => {
				span.classList.replace("active", "hover");
			});
			target.nextSibling.classList.replace("hover", "active");
		}
	});
});
