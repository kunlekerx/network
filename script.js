async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    
    const data = await response.json();
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const location = data.name;

    document.getElementById('weatherResult').innerHTML = `
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Description:</strong> ${desc}</p>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `
      <p style="color: yellow;">Error: ${error.message}</p>
    `;
  }
}
