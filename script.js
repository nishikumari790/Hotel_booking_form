document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    document.getElementById("result").innerHTML =
        `Thank you <b>${name}</b>! Your <b>${room}</b> room is booked from 
        <b>${checkin}</b> to <b>${checkout}</b>.`;
});
