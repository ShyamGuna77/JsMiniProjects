# Movie Ticket Booker

This project is a movie ticket booking web application where users can select seats, view the total price for selected seats, and book them. The project also stores the selected movie and seats in local storage to persist the user's choices across sessions.

## Features

- **Seat Selection**: Users can select available seats by clicking on them. Occupied seats are marked and cannot be selected.
- **Movie Selection**: Users can select a movie from the dropdown, and the ticket price will automatically adjust based on the selected movie.
- **Total Price Calculation**: The total price updates dynamically based on the number of selected seats and the price of the chosen movie.
- **Local Storage**: The selected seats and movie details are stored in local storage to maintain the user's selection on page reload.
- **Custom Alert**: A custom alert displays the booking details or a prompt to select seats when the user attempts to book.

## Live Demo

You can access the live version of the project here: [Movie Ticket Booker](https://movieticketbooker69.netlify.app/)

## How to Use

1. **Select a Movie**: Use the dropdown to select a movie.
2. **Choose Seats**: Click on the seats in the available rows to select them. Occupied seats are marked and cannot be selected.
3. **View Total Price**: The number of selected seats and the total price will be updated in real time.
4. **Book Tickets**: After selecting seats, click the "Book Tickets" button. A custom alert will display the booking details.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- Local Storage

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ShyamGuna77/movie-ticket-booker.git
## Feature Improvements
1. Add user authentication for saving bookings.
2. Integrate payment gateway for real transactions.
3. Add support for multiple movies with different seat layouts.
