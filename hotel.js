function openBookingForm(roomType, price) {
    document.getElementById('roomType').value = roomType;
    document.getElementById('price').value = price;
    document.getElementById('bookingForm').style.display = "block";
}

function closeBookingForm() {
    document.getElementById('bookingForm').style.display = "none";
}

document.getElementById('form').onsubmit = function(event) {
    event.preventDefault(); // Stop the form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roomType = document.getElementById('roomType').value;
    const price = document.getElementById('price').value;

    // Here, you would normally send this data to your server for processing
    alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nRoom Type: ${roomType}\nPrice: $${price}`);
    
    closeBookingForm();
}

