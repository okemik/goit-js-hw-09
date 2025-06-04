document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  const STORAGE_KEY = "feedback-form-state";

  // Load saved data from localStorage
  const loadSavedData = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      if (email) emailInput.value = email;
      if (message) messageInput.value = message;
    }
  };

  // Save data to localStorage
  const saveData = () => {
    const data = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // Clear data from form and localStorage
  const clearData = () => {
    emailInput.value = "";
    messageInput.value = "";
    localStorage.removeItem(STORAGE_KEY);
  };

  // Form input event listener
  form.addEventListener("input", saveData);

  // Form submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    if (!data.email || !data.message) {
      alert("Both fields must be filled!");
      return;
    }

    console.log(data);
    clearData();
  });

  // Initialize form with saved data
  loadSavedData();
});
