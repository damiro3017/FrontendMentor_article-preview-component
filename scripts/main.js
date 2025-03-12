const socialButton = document.querySelector("#socialMediaPopup");
const shareButton = document.querySelector(
  ".hero__section__content__author__btn"
);

shareButton.addEventListener("click", () => {
  socialButton.classList.toggle("active");
  shareButton.classList.toggle("btn__active");
});
