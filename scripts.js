const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor (dividend / divider); // Math.floor rounds the number of.
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);  
    if (isNaN(dividendNum) || isNaN(dividerNum)) {
      alert("Division not performed. Both values are required in inputs. Try again");
      valid = false;  // Validation when values are missing
    }
    if (dividerNum === 0) {
      alert("Division not performed. Invalid number provided. Try again")
      console.error("Division not performed. Invalid number provided. Try again")
      return dividend / divider;  // Invalid division logs error in console
    }
    
});

