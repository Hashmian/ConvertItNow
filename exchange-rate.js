// Function to fetch and update the exchange rates
async function refreshRates() {
    try {
        // Fetch USD to other currencies rates
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();

        // Get USD to PKR rate
        const usdToPkrRate = data.rates.PKR;

        // Get rates for other currencies
        const usdToEurRate = data.rates.EUR;
        const usdToGbpRate = data.rates.GBP;
        const usdToJpyRate = data.rates.JPY;
        const usdToAudRate = data.rates.AUD;
        const usdToCadRate = data.rates.CAD;

        // Calculate PKR to other currencies
        const pkrToEurRate = usdToPkrRate / usdToEurRate;
        const pkrToGbpRate = usdToPkrRate / usdToGbpRate;
        const pkrToJpyRate = usdToPkrRate / usdToJpyRate;
        const pkrToAudRate = usdToPkrRate / usdToAudRate;
        const pkrToCadRate = usdToPkrRate / usdToCadRate;

        // Update the DOM with the rates
        document.getElementById('pkr-usd').textContent = usdToPkrRate.toFixed(2);
        document.getElementById('pkr-eur').textContent = pkrToEurRate.toFixed(2);
        document.getElementById('pkr-gbp').textContent = pkrToGbpRate.toFixed(2);
        document.getElementById('pkr-jpy').textContent = pkrToJpyRate.toFixed(2);
        document.getElementById('pkr-aud').textContent = pkrToAudRate.toFixed(2);
        document.getElementById('pkr-cad').textContent = pkrToCadRate.toFixed(2);

    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}

// Call the refreshRates function on page load to populate the initial data
window.onload = refreshRates;
