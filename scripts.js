const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor (dividend / divider); // Math.floor rounds the number of.
    if (form.elements.namedItem('dividend', 'divider').value === "") {
      alert("Division not performed. Both values are required in inputs. Try again");
      valid = false;  // Validation when values are missing
    }
});