document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cocaPrice = document.getElementById('coca').value;
    const bierePrice = document.getElementById('biere').value;

    document.getElementById('results').innerHTML = `
        <h2>Prix enregistrés :</h2>
        <p>Coca : ${cocaPrice} €</p>
        <p>Bière : ${bierePrice} €</p>
    `;
});
