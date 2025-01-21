function generateTicket() {
    const name = document.getElementById('name').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;

    let costPerKm = 0.21;
    let discount = 0;
    let offer = 'Biglietto Standard';

    if (age === 'Minorenne') {
        discount = 0.2; 
        offer = 'Biglietto Ridotto';
    } else if (age === 'Over 65') {
        discount = 0.4;
        offer = 'Biglietto Ridotto';
    }

    const cost = (km * costPerKm * (1 - discount)).toFixed(2);

    document.getElementById('passengerName').innerHTML = `<strong>NOME PASSEGGERO</strong><br>${name}`;
    document.getElementById('offer').innerText = offer;
    document.getElementById('cost').innerText = `${cost}€`;

    document.getElementById('ticketContainer').style.display = 'block';
}