const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelector(".container .seat:not(.occupied)");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

let currentTicketPrice = localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.options[movieSelectBox.selectedIndex].value;

let currentMovieIndex = localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex

movieSelectBox.addEventListener("change", (e)=>{
    let ticketPrice = e.target.value;
    let movieIndex = e.target.selectedIndex;
    setMovieDataToLocalStorage(ticketPrice,movieIndex);
});

const setMovieDataToLocalStorage = (ticketPrice,movieIndex) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", ticketPrice);
}

container.addEventListener("click", (e)=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected")
    }

    // if(e.target.classList.contains("occupied")){
    //     alert("Please choose an available seat")
    // }
    updateMovieInfo();
});

const updateMovieInfo = () =>{
    let selectedSeats = document.querySelectorAll(".row .seat.selected");
    console.log(selectedSeats);
    console.log([...selectedSeats]);
    let selectedSeatsIndexArray = [...selectedSeats].map(seat=>[...allSeats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndexArray));
    console.log(selectedSeatsIndexArray);
}

