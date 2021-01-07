// Selectors
const input = document.querySelector(`input`);
const div = document.querySelector(`div`);

// Function arrays
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

// Input function
const showMessage = (e) => {
  div.textContent = "";

  const value = e.target.value;

  passwords.forEach((password, index) => {
    if (value.toLowerCase() === password.toLowerCase()) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
};

// Input listener
input.addEventListener(`input`, showMessage);

// Focus function
input.addEventListener(`focus`, () => {
  input.classList.add("active");
});

// Blur function
input.addEventListener(`blur`, () => {
  input.classList.remove("active");
});
