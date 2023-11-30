function error(event) {
  event.preventDefault();

  const firstNameInput = document.querySelector("#lastName");
  const firstNameErrorMessage = document.querySelector(".first-name-error");
  const firstNameIcon = document.querySelector(".first-name-error-icon");

  firstNameInput.style.marginBottom = "0.37rem";
  firstNameErrorMessage.style.marginBottom = "1.19rem";
  firstNameErrorMessage.style.display = "block";
  firstNameIcon.style.display = "block";
}

document.querySelector(".btn").addEventListener("click", error);
