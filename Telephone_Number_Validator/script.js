function validateUSPhoneNumber(phoneNumber) {
    const validUSNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
    return validUSNumberPattern.test(phoneNumber);
  }
  
  document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");
  
    if (!input) {
      alert("Please provide a phone number");
      return;
    }
  
    if (validateUSPhoneNumber(input)) {
      resultsDiv.textContent = `Valid US number: ${input}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${input}`;
    }
  });
  
  document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
  });
  