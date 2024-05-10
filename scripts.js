const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  result.innerText = Math.floor (dividend / divider); // Math.floor rounds the number of.
  
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);  
    
      if (dividend.trim() === "" || divider.trim() === "") {
        alert("Division not performed. Both values are required in inputs. Try again");
        console.error("Division not performed. Both values are required in inputs. Try again");
        return;  // Validation when values are missing
      }

      if (dividerNum === 0) {
        alert("Division not performed. Invalid number provided. Try again");
        console.error("Division not performed. Invalid number provided. Try again");
        return dividend / divider; // Division not performed. Invalid number provided. Try again
      }
    
      if (isNaN(dividendNum) || isNaN(dividerNum)) {
        alert("Something critical went wrong. Please reload the page.");
        console.error("Something critical went wrong. Please reload the page.");
        return; // Anything not a number shows an error
      }
});

