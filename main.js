// Selectors
const input = document.querySelector(`input`);
const div = document.querySelector(`div`);

// Function arrays
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

// Lowercase passwords
passwords.forEach((password, index) => {
  passwords[index] = password.toLowerCase();
});

// Input function
const showMessage = (e) => {
  div.textContent = "";

  const value = e.target.value.toLowerCase();

  passwords.forEach((password, index) => {
    if (value === password) {
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
