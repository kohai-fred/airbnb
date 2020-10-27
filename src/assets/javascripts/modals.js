const body = document.querySelector("body");
const changeLangIco = document.querySelector(".header-account-country");
const accountMenuElem = document.querySelector(".header-account-menu");
let calc;
let modal = "";
/* Create elements */
const createCalc = () => {
	calc = document.createElement("div");
	calc.classList.add("calc");
};

const createModal = (sizeModal, contentModal) => {
	modal = document.createElement("div");
	modal.classList.add(`${sizeModal}`);
	modal.innerHTML = `
  ${contentModal}`;
};

/* Functions */

/* const openModal = (sizeModal, contentModal) => {
	// createCalc();
	createModal(sizeModal, contentModal);

	// body.append(modal);
}; */

const cancelModal = () => {
	if (modal != "") {
		body
			.getElementsByClassName("modal")
			.item(0)
			.parentElement.classList.remove("pos-relative");
		modal.remove();
		modal = "";
	}
};

/* Events */
changeLangIco.addEventListener("click", (event) => {
	event.stopPropagation();
	cancelModal();

	if (changeLangIco.lastElementChild.className != "modal") {
		changeLangIco.classList.add("pos-relative");
		contentModal = `
		<p><i class='fas fa-globe'></i> <span class="bold">Français (FR)</span></p>
		<p><i class='fas fa-euro-sign'></i> <span class="bold">EUR</span></p>`;

		createModal(
			"modal",
			contentModal
			/* `<p><i class='fas fa-globe'></i> Français (FR)</p>
			<p><i class='fas fa-euro-sign'></i> EUR</p>` */
		);
		changeLangIco.insertAdjacentElement("beforeend", modal);
	}
});

accountMenuElem.addEventListener("click", (event) => {
	event.stopPropagation();
	cancelModal();

	if (accountMenuElem.lastElementChild.className != "modal") {
		accountMenuElem.classList.add("pos-relative");
		contentModal = `
			<p class="bold">Inscription</p>
			<p>Connection</p>
			<div class="separator-w100"></div>
			<p>Héberger des voyageurs</p>
			<p>Créer une expérience</p>
			<p>Aide</p>
		`;
		createModal("modal", contentModal);
		accountMenuElem.insertAdjacentElement("beforeend", modal);
	}
});

body.addEventListener("click", () => {
	cancelModal();
});
