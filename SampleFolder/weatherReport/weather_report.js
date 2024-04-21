function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '48700db898e31a5501f2ec4fffea1855'; // Replace 'YOUR_API_KEY' with your actual API key
    const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    let lat;
    let lon;

    //`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            lat = data[0].lat;
            lon = data[0].lon;
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                          <p>Temperature: ${data.main.temp - 273.15} &#8451;</p>
                                          <p>Weather: ${data.weather[0].description}</p>`;
                })
                .catch(error => {
                    console.error('Error fetching weather:', error);
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
                });
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

