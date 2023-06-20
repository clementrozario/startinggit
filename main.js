document.addEventListener('DOMContentLoaded', function() {
  function saveInput() {
    // Get the name, email, and phone number input values.
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneno = document.getElementById("phone-no").value;

    // Create a form data object.
    const formData = {
      name: name,
      email: email,
      phoneno: phoneno,
    };

    // Retrieve existing form data from localStorage or create an empty array if none exists.
    let storedData = localStorage.getItem("formData");
    let formDataArray = storedData ? JSON.parse(storedData) : [];

    // Add the new form data to the array.
    formDataArray.push(formData);

    // Store the updated array in localStorage.
    localStorage.setItem("formData", JSON.stringify(formDataArray));

    // Clear the form inputs.
    document.getElementById("my_form").reset();

    // Display the stored form data.
    displayFormData();
  }

  function displayFormData() {
    // Get the stored form data from localStorage.
    let storedData = localStorage.getItem("formData");
    
    if (storedData) {
      let formDataArray = JSON.parse(storedData);

      // Create a list to display the form data.
      const list = document.createElement("ul");

      // Loop through the form data and create list items.
      formDataArray.forEach(function(formData) {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phoneno}`;
        list.appendChild(listItem);
      });

      // Check if the data is already displayed and remove it before displaying again.
      const existingList = document.getElementById("form-data-list");
      if (existingList) {
        existingList.remove();
      }

      // Assign an id to the list.
      list.setAttribute("id", "form-data-list");

      // Append the list to the body.
      document.body.appendChild(list);
    }
  }

  // Bind the saveInput() function to the submit button.
  document.getElementById("submit").addEventListener("click", saveInput);
});
