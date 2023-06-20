
function saveInput() {
  // Get the name and email input values.
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Create a user object.
  const user = {
    name: name,
    email: email,
  };

  // Store the user object in localStorage.
  localStorage.setItem("user", JSON.stringify(user));
}

// Bind the saveInput() function to the submit button.
document.getElementById("sumbit").addEventListener("click", saveInput);


