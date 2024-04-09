const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const errorEl = document.getElementById("error");
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function showError(text) {
  errorEl.innerHTML = text;
}

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  showError('');

  if (amountEl_one.value < 0) {
    showError("Error: The amount must be positive");
  } else {
    rateEl.innerText = "loading...";

    // https://www.exchangerate-api.com/docs/free
    fetch(`https://open.er-api.com/v6/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "error") {
          showError(`Error: ${data["error-type"]}`);
        } else {
          // console.log(data);
          const rate = data.rates[currency_two];

          rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

          amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        }
      })
      .catch((error) => {
        showError(`ERROR: ${error.message}`);
      });
  }
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
