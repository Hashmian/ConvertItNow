// Function to show the Currency Converter section and hide the Home section
function showConverter() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('converter-section').style.display = 'block';
}

// Function to convert currency using the API
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = (amount * rate).toFixed(4);

        resultDiv.innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        resultDiv.innerHTML = "Error fetching exchange rates.";
    }
}
