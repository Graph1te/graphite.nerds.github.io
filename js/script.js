const linkLetter = document.querySelector(".contacts-button");
const web = document.querySelector(".products-button-web");
const app = document.querySelector(".products-button-apps");
const presentation = document.querySelector(".products-button-presentation");
const popup = document.querySelector(".modal");
const popupWeb = document.querySelector(".modal-web");
const popupApp = document.querySelector(".modal-app");
const popupPresentation = document.querySelector(".modal-presentation");
const closeButton = document.querySelector(".modal-close");
const closeButtonWeb = document.querySelector(".modal-close-web");
const closeButtonApp = document.querySelector(".modal-close-app");
const closeButtonpresentation = document.querySelector(".modal-close-presentation");
const nameLol = popup.querySelector("[name=name]");
const send = popup.querySelector(".modal-button");
const loginWeb = popupWeb.querySelector("[name=nameWeb]");
const emailWeb = popupWeb.querySelector("[name=emailWeb]");
const loginApp = popupApp.querySelector("[name=nameApp]");
const emailApp = popupApp.querySelector("[name=emailApp]");
const loginPr = popupPresentation.querySelector("[name=namePr]");
const emailPr = popupPresentation.querySelector("[name=emailPr]");
const text = popup.querySelector("[name=text-of-letter]");
const button = popup.querySelector(".modal-button");
const buttonWeb = popupWeb.querySelector(".modal-button");
const buttonApp = popupApp.querySelector(".modal-button-green");
const buttonPresentation = popupPresentation.querySelector(".modal-button-yellow");
const switcher1 = document.querySelector(".slider-button-1");
const switcher2 = document.querySelector(".slider-button-2");
const switcher3 = document.querySelector(".slider-button-3");
const slide1 = document.querySelector(".advantages-1");
const slide2 = document.querySelector(".advantages-2");
const slide3 = document.querySelector(".advantages-3");

linkLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hidden");
  nameLol.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hidden");
});

button.addEventListener("click", function () {
  if (!login.value || !email.value || !text.value) {} else {
    popup.classList.add("modal-hidden");
  }
});

web.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWeb.classList.remove("modal-hidden");
  loginWeb.focus();
});

closeButtonWeb.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWeb.classList.add("modal-hidden");
});

buttonWeb.addEventListener("click", function () {
  if (!loginWeb.value || !emailWeb.value) {} else {
    popupWeb.classList.add("modal-hidden");
  }
});
app.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupApp.classList.remove("modal-hidden");
  loginApp.focus();
});

closeButtonApp.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupApp.classList.add("modal-hidden");
});

buttonApp.addEventListener("click", function () {
  if (!loginApp.value || !emailApp.value) {} else {
    popupApp.classList.add("modal-hidden");
  }
});

presentation.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupPresentation.classList.remove("modal-hidden");
  loginPr.focus();
});

closeButtonpresentation.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupPresentation.classList.add("modal-hidden");
});

buttonPresentation.addEventListener("click", function () {
  if (!loginPr.value || !emailPr.value) {} else {
    popupPresentation.classList.add("modal-hidden");
  }
});


switcher2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide2.classList.remove("modal-hidden");
  slide1.classList.add("modal-hidden");
  slide3.classList.add("modal-hidden");
  switcher1.classList.remove("active-slide");
  switcher2.classList.add("active-slide");
  switcher3.classList.remove("active-slide");
});

switcher1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.remove("modal-hidden");
  slide2.classList.add("modal-hidden");
  slide3.classList.add("modal-hidden");
  switcher1.classList.add("active-slide");
  switcher2.classList.remove("active-slide");
  switcher3.classList.remove("active-slide");
  slide1.classList.add("")
});

switcher3.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide3.classList.remove("modal-hidden");
  slide2.classList.add("modal-hidden");
  slide1.classList.add("modal-hidden");
  switcher1.classList.remove("active-slide");
  switcher2.classList.remove("active-slide");
  switcher3.classList.add("active-slide");
});
