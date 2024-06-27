const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textInput = document.getElementById("message");

const submitButton = document.getElementById("submit");
const response = document.getElementById("formResponse");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

submitButton.addEventListener("click", function (e) {
  const name = nameInput.value;
  const email = emailInput.value;
  const text = textInput.value;

  if (name !== "" && email !== "") {
    const reponseObj = {
      name: name,
      email: email,
      text: text,
    };

    console.log(reponseObj);

    response.innerText = "Form Submitted!";
    e.preventDefault();
  } else {
    response.innerText = "Fill all required fields";
  }
});

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
