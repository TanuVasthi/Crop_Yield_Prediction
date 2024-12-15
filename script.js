document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const stateName = document.getElementById('stateName').value;
    const districtName = document.getElementById('districtName').value;
    const cropYear = document.getElementById('cropYear').value;
    const season = document.getElementById('season').value;
    const crop = document.getElementById('crop').value;
    const area = parseFloat(document.getElementById('area').value);
    const production = parseFloat(document.getElementById('production').value);

    if (!stateName || !districtName || !cropYear || !season || !crop || !area || !production) {
        alert('Please fill in all fields.');
        return;
    }

    const formData = {
        stateName,
        districtName,
        cropYear,
        season,
        crop,
        area,
        production
    };

    console.log('Form Submitted:', formData);

    // Simulate yield prediction
    const predictedYield = (production / area).toFixed(2); // Example calculation
    const outputContainer = document.getElementById('output');

    // Display predicted yield
    outputContainer.innerHTML = `
        <h2>Yield Prediction</h2>
        <p>Predicted Yield: <strong>${predictedYield} tonnes per hectare</strong></p>
        <button id="recommendButton">Do you need our recommendation?</button>
    `;

    // Handle recommendation
    document.getElementById('recommendButton').addEventListener('click', function () {
        const recommendation = predictedYield > 3
            ? 'Yes, it is advisable to continue with this crop.'
            : 'No, consider switching to a different crop for better yield.';
        outputContainer.innerHTML += `
            <h3>Recommendation</h3>
            <p>${recommendation}</p>
        `;
    });

    this.reset(); // Clear the form after submission
});
