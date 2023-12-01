let hasErrors = false;

function handleInputError(inputElement, errorMessageClass, errorIconClass) {
  const input = document.querySelector(inputElement);
  const errorMessage = document.querySelector(errorMessageClass);
  const errorIcon = document.querySelector(errorIconClass);

  if (inputElement === "#email" && !input.checkValidity()) {
    input.classList.add("error");
    errorMessage.innerHTML = "Looks like this is not an email";
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    hasErrors = true; // Set the flag to true if there are errors
  }

  if (input.value === "") {
    input.classList.add("error");
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    hasErrors = true; // Set the flag to true if there are errors
  }
}

// less maintable and readable code

// function error(event) {
//   hasErrors = false;

//   // Handle errors for different input fields
//   handleInputError(
//     "#first-name",
//     ".first-name-error-message",
//     ".first-name-error-icon"
//   );
//   handleInputError(
//     "#last-name",
//     ".last-name-error-message",
//     ".last-name-error-icon"
//   );
//   handleInputError("#email", ".email-error-message", ".email-error-icon");
//   handleInputError(
//     "#password",
//     ".password-error-message",
//     ".password-error-icon"
//   );
//   if (hasErrors) {
//     event.preventDefault();
//   }
// }

function error(event) {
  hasErrors = false;

  const inputSelectors = ["first-name", "last-name", "email", "password"];

  inputSelectors.forEach((selector) => {
    handleInputError(
      `#${selector}`,
      `.${selector}-error-message`,
      `.${selector}-error-icon`
    );
  });

  if (hasErrors) {
    event.preventDefault();
  }
}

document.querySelector(".btn").addEventListener("click", error);

function checkInputHasContent(inputId, errorMessageClass, errorIconClass) {
  const input = document.querySelector(inputId);
  const errorMessage = document.querySelector(errorMessageClass);
  const errorIcon = document.querySelector(errorIconClass);
  if (input.value.trim() !== "") {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    input.classList.remove("error");
  }
}

// function clearError() {
//   checkInputHasContent(
//     "#first-name",
//     ".first-name-error-message",
//     ".first-name-error-icon"
//   );
//   checkInputHasContent(
//     "#last-name",
//     ".last-name-error-message",
//     ".last-name-error-icon"
//   );
//   checkInputHasContent("#email", ".email-error-message", ".email-error-icon");
//   checkInputHasContent(
//     "#password",
//     ".password-error-message",
//     ".password-error-icon"
//   );
// }

function clearError(input) {
  const errorMessageClass = `.${input.id}-error-message`;
  const errorIconClass = `.${input.id}-error-icon`;
  const inputId = `#${input.id}`;

  checkInputHasContent(inputId, errorMessageClass, errorIconClass);
}

// the code below selects all the inputs and loops through them with the forEach method
// the function executed for each one of them is that when the user types into the input the function() { clearError(input) } the clearError is executed for the specific input only
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    clearError(input); // Pass the current input element
  });
});
