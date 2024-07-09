const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const symbol = document.getElementById('symbol');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency');

populateUI();

let ticketPrice = +movieSelect.value;

// Fetch exchange rates and update the DOM
function calculate() {
  const currency = currencySelect.value;

  if (currency === 'USD') {
    updateSelectedCount(1, currency);
  } else {
    // https://www.exchangerate-api.com/docs/free
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[currency];

        let i;
        for (i = 0; i < movieSelect.length; i++) {
          const option = movieSelect.options[i];
          const replacement = `${(rate * option.value).toFixed(2)} ${currency}`;
          const text = option.innerText.replace(/\[(.+?)\]/g, '[' + replacement + ']');
          option.innerText = text;
        }
        updateSelectedCount(rate, currency);
      });
  }
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount(rate, currencySymbol) {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = (selectedSeatsCount * ticketPrice * rate).toFixed(2);
  symbol.innerText = currencySymbol;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Currency select event
currencySelect.addEventListener('change', calculate);

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  calculate();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    calculate();
  }
});

// Initial count and total set
calculate();
