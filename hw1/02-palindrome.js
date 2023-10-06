// Get the input element with id 'number'
let numberInput = document.querySelector("#number");

// Check if the element with id 'number' was found
if (!numberInput) {
  console.error("Element with id 'number' not found!");
}

/**
 * Function to reset the result element
 * @param {Event} event - The event object
 */
const resetResult = (event) => {
  let resetdiv = document.getElementById("result");
  if (resetdiv) {
    resetdiv.remove();
  }
};

/**
 * Function to check if a number is a palindrome
 */
const palindrome = () => {
  // Reset the result element
  resetResult();

  let value = numberInput.value;
  let len = value.length;

  // Check if the input is empty
  if (value === "") {
    let app = document.querySelector(".result-div");
    if (app) {
      const reset = document.createElement("div");
      reset.innerHTML = `Please enter a number`;
      reset.style.color = "red";
      reset.setAttribute("id", "result");
      app.appendChild(reset);
      return;
    }
  }
  // Additional check for non-numeric input
  if (!/^\d+$/.test(value)) {
    const app = document.querySelector(".result-div");
    if (app) {
      const reset = document.createElement("div");
      reset.innerHTML = `Invalid input. Please enter a number`;
      reset.style.color = "red";
      reset.setAttribute("id", "result");
      app.appendChild(reset);
      return;
    }
  }
  // Check if the number is a palindrome
  for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
      let app = document.querySelector(".result-div");
      if (app) {
        const reset = document.createElement("div");
        reset.innerHTML = `No. Try again`;
        reset.style.color = "red";
        reset.setAttribute("id", "result");
        app.appendChild(reset);
      }

      return;
    }
  }
  // Display result for palindrome number
  let app = document.querySelector(".result-div");
  const reset = document.createElement("div");
  reset.innerHTML = `Yes. This is a palindrome!`;
  reset.style.color = "green";
  reset.setAttribute("id", "result");
  app.appendChild(reset);
  return;
};

//An event listener for the 'keyup' event has been added to the 'numberInput' element.
numberInput.addEventListener("keyup", (event) => {
  if (numberInput) {
    palindrome();
  }
});
