function saveInput() {
  // Get the name and email input values.
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Store the values in localStorage.
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
}

// Bind the saveInput() function to the submit button.
document.getElementById("sumbit").addEventListener("click", saveInput);