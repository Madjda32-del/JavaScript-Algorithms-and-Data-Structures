function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Check if the string is the same forwards and backwards
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
  
  document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");
  
    if (!input) {
      alert("Please input a value");
      return;
    }
  
    if (isPalindrome(input)) {
      resultElement.textContent = `${input} is a palindrome`;
    } else {
      resultElement.textContent = `${input} is not a palindrome`;
    }
  });
  