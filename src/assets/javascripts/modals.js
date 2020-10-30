const body = document.querySelector("body");
const changeLanguageIco = document.querySelector(".header-account-country");
// const changeLanguageElem = document.querySelectorAll(".change-language");
const changeLanguageElem = document.querySelector(".change-language");
const changeCurracyElem = document.querySelector(".change-curracy");
const accountMenuElem = document.querySelector(".header-account-menu");
const footerCountrySection = document.querySelector(".footer-country");

/* Elements Modal */
let calc;
let modal = "";
let contentModal = document.createElement("div");

const separator = document.createElement("div");
separator.classList.add("separator-w100");

const crossCloseIco = document.createElement("div");
crossCloseIco.innerHTML = `<i class="fas fa-times"></i>`;

/* Elements multiple clickable */
const paraLangElem = document.createElement("p");
paraLangElem.classList.add("change-language");
paraLangElem.innerHTML = `<i class="fas fa-globe"></i><span class="bold">Français (FR)</span>`;

const paraCurrencyElem = document.createElement("p");
paraCurrencyElem.innerHTML = `<i class='fas fa-euro-sign'></i><span class="bold"> EUR</span>`;

const tableLang = document.createElement("p");
tableLang.innerHTML = "English";

/* Insert multiples elements in HTML */
/* footerCountrySection.insertAdjacentElement("afterbegin", paraLangElem);
footerCountrySection.insertAdjacentElement("beforeend", paraCurrencyElem); */
// footerCountrySection.append(paraLangElem, paraCurrencyElem);

/* Create elements */

const createCalc = () => {
	calc = document.createElement("div");
	calc.classList.add("calc");

	calc.insertAdjacentElement("afterbegin", modal);
	body.append(calc);
};

const createModal = (sizeModal, contentModal) => {
	modal = document.createElement("div");
	modal.classList.add("modal", `${sizeModal}`);
	modal.appendChild(contentModal);

	return modal;
};

/* Functions */

const cancelModal = () => {
	if (modal != "") {
		if (modal.className == "modal modal-small") {
			body
				.getElementsByClassName("modal")
				.item(0)
				.parentElement.classList.remove("pos-relative");
			modal.remove();
			modal = "";
			contentModal = document.createElement("div");
		}
		if (modal.className == "modal modal-big") {
			modal.remove();
			calc.remove();
			modal = "";
			contentModal = document.createElement("div");
		}
	}
};

/* Events */
const modalLangIco = (event) => {
	event.stopPropagation();

	cancelModal();

	changeLanguageIco.classList.add("pos-relative");

	contentModal.append(paraLangElem, paraCurrencyElem);

	createModal("modal-small", contentModal);
	changeLanguageIco.insertAdjacentElement("beforeend", modal);

	paraLangElem.addEventListener("click", (event) => {
		event.stopPropagation();
		cancelModal();
		modalLangChoices();
	});
};

const modalLangChoices = () => {
	// event.stopPropagation();
	// cancelModal();
	const firstSection = document.createElement("section");
	const h3FirstSection = document.createElement("h3");
	h3FirstSection.innerHTML = `Langues et régions suggérées`;
	firstSection.append(h3FirstSection, tableLang);

	contentModal.append(crossCloseIco, separator, firstSection);
	createModal("modal-big", contentModal);
	createCalc();
};

accountMenuElem.addEventListener("click", (event) => {
	event.stopPropagation();
	cancelModal();

	accountMenuElem.classList.add("pos-relative");

	const firstSection = document.createElement("section");
	const paraInscription = document.createElement("p");
	paraInscription.classList.add("bold");
	paraInscription.textContent = "Inscription";
	const paraConnection = document.createElement("p");
	paraConnection.textContent = "Connection";
	firstSection.append(paraInscription, paraConnection);

	const secondSection = document.createElement("section");
	const paraHost = document.createElement("p");
	paraHost.textContent = "Héberger des voyageurs";
	const paraExp = document.createElement("p");
	paraExp.textContent = "Créer une expérience";
	const paraHelp = document.createElement("p");
	paraHelp.textContent = "Aide";
	secondSection.append(paraHost, paraExp, paraHelp);

	contentModal.append(firstSection, separator, secondSection);
	createModal("modal-small", contentModal);
	accountMenuElem.insertAdjacentElement("beforeend", modal);
});

changeLanguageIco.addEventListener("click", modalLangIco);
footerCountrySection.firstElementChild.addEventListener("click", (event) => {
	event.stopPropagation();
	modalLangChoices();
});

body.addEventListener("click", (event) => {
	event.stopPropagation();
	cancelModal();
});
