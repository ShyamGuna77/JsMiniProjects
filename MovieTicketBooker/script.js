const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookButton = document.querySelector('.button-86');
const customAlert = document.getElementById('customAlert');
const customAlertMessage = document.getElementById('customAlertMessage');



let ticketprice = +movieSelect.value; // Initialize ticketprice

// Functions
// Save selected movie data
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update seat count and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketprice;
}

// Get data from Local Storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, idx) => {
      if (selectedSeats.indexOf(idx) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Event Listeners
// Movie select change event
movieSelect.addEventListener('change', e => {
  ticketprice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// "Book Tickets" button click event
bookButton.addEventListener('click', () => {
  const selectedSeatsCount = document.querySelectorAll('.row .seat.selected').length;
  const totalPrice = selectedSeatsCount * ticketprice;
  const selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;

  if (selectedSeatsCount > 0) {
    showCustomAlert(`You have selected ${selectedSeatsCount} seats for the movie ${selectedMovie} for a total price of ₹${totalPrice}.`);
  } else {
    showCustomAlert('Please select at least one seat to book.');
  }
});

// Custom alert function
function showCustomAlert(message) {
  customAlertMessage.innerText = message;
  customAlert.classList.add('show');
  customAlert.classList.remove('hidden');

  setTimeout(() => {
      customAlert.classList.remove('show');
      customAlert.classList.add('hidden');
  }, 5000);
}

// Initial count and total set
populateUI();
updateSelectedCount();




























































































































// const container=  document.querySelector('.container');
// // const seats = document.querySelectorAll("row.seat:not(.occupied)");
// const seats = document.querySelectorAll('.row .seat')
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');
// const bookButton = document.querySelector('.button-86');
// const customAlert = document.getElementById('customAlert');
// const customAlertMessage = document.getElementById('customAlertMessage');

// populateUI();

// let ticketprice = +movieSelect.value;

// //Functions 
// //save Selected Dtaa
// function setMovieData(movieIndex,moviePrice){
//   localStorage.setItem('selectedMovieIndex',movieIndex);
//   localStorage.setItem('selectedMoviePrice',moviePrice);
// }


// function updateSelectedCount(){
//     const selctedSeats = document.querySelectorAll('.row .seat.selected');
//     const seatsIndex = [...selctedSeats].map(seat=>[...seats].indexOf(seat));
       
//     localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));


//     const selectedSeatsCount = selctedSeats.length;
//     count.innerText = selectedSeatsCount;
//     total.innerText= selectedSeatsCount*ticketprice;

// }

// //Get data from Local Storage and PopulateUi
// function populateUI(){
//   const selctedSeats= JSON.parse(localStorage.getItem('selectedSeats'));
//   if(selctedSeats !== null&& selctedSeats.length>0){
//      seats.forEach((seat,idx)=>{
//       if(selctedSeats.indexOf(idx)>-1){
//         seat.classList.add('selected');
//       }
//      })
//   }
//   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
//   if(selectedMovieIndex!==null){
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }



// //Event Listners
// // Movie Select 

// movieSelect.addEventListener('change',e=>{
//     ticketprice=+e.target.value;
//     setMovieData(e.target.selectedIndex,e.target.value);
//     updateSelectedCount();
// })

// container.addEventListener('click',(e)=>{
//  if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
//     e.target.classList.toggle('selected');
//     updateSelectedCount();
//  }
// });

// bookButton.addEventListener('click', () => {
//   const selectedSeatsCount = document.querySelectorAll('.row .seat.selected').length;
//   const totalPrice = selectedSeatsCount * ticketprice;

//   if (selectedSeatsCount > 0) {
//     alert(`You have selected ${selectedSeatsCount} seats for a total price of ₹${totalPrice}.`);
//   } else {
//     alert('Please select at least one seat to book.');
//   }
// });

// function showCustomAlert(message) {
//   customAlertMessage.innerText = message;
//   customAlert.classList.add('show');
  
//   // Hide the alert after 4 seconds
//   setTimeout(() => {
//     customAlert.classList.remove('show');
//   }, 4000);
// }

// //Intial count and total set 
// updateSelectedCount();
