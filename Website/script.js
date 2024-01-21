function updatePulseData(pulseValue) {
    document.getElementById('pulse-display').innerText = `Heart Rate: ${pulseValue}`;
}// iss function se html file me pulse value update ho rahi hai

function fetchData() {
    fetch('http://localhost:5000/api/pulse')//isme jo /api/pulse likha hai isse humari python file ko request jaati hai 
        .then(response => response.json())
        .then(data => {
            const pulseValue = data.heartRate;
            updatePulseData(pulseValue);
        })
        .catch(error => {
            console.error('Error fetching pulse data:', error);
        });
}

// Fetch data initially
fetchData();

// Fetch data every 5 seconds (adjust as needed)
setInterval(fetchData, 5000);
