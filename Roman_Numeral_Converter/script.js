function convertToRoman(num) {
    if (num < 1) return "Please enter a number greater than or equal to 1";
    if (num >= 4000) return "Please enter a number less than or equal to 3999";
  
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];
  
    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        num -= romanNumerals[i].value;
      }
    }
    return result;
  }
  
  document.getElementById("convert-btn").addEventListener("click", function() {
    const input = document.getElementById("number").value;
    const outputElement = document.getElementById("output");
  
    if (!input || isNaN(input)) {
      outputElement.textContent = "Please enter a valid number";
      return;
    }
  
    const num = parseInt(input, 10);
    const result = convertToRoman(num);
    outputElement.textContent = result;
  });
  