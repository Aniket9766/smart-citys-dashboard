document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    window.toggleDarkMode = function () {
        document.body.classList.toggle("dark-mode");
    };

    // Tab Switching
    window.switchTab = function (tabId) {
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
        document.getElementById(tabId).classList.remove("hidden");
    };

    // Weather API
    async function fetchWeather() {
        const apiKey = "YOUR_OPENWEATHER_API_KEY";
        const city = "New York";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            let response = await fetch(url);
            let data = await response.json();
            document.getElementById("weather-info").innerHTML =
                `🌡 Temperature: ${data.main.temp}°C, 🌬 Wind: ${data.wind.speed} m/s, 🌤 Condition: ${data.weather[0].description}`;
        } catch (error) {
            document.getElementById("weather-info").innerHTML = "Failed to load weather data.";
        }
    }
    fetchWeather();

    // Traffic Data Chart
    var ctx = document.getElementById("trafficChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
            datasets: [{
                label: "Traffic Congestion",
                data: [20, 45, 70, 50, 30, 15],
                borderColor: "#FF0000",
                fill: false
            }]
        }
    });

    // Events Section
    const events = [
        { name: "Music Concert", date: "Feb 10, 2025" },
        { name: "Tech Expo", date: "Mar 5, 2025" },
        { name: "Food Festival", date: "Apr 12, 2025" }
    ];

    const eventsList = document.getElementById("events-list");
    events.forEach(event => {
        let li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date}`;
        eventsList.appendChild(li);
    });

    // Alerts Section
    const alerts = [
        "🚨 Road Closure: 5th Avenue closed due to construction.",
        "⚠️ Air Quality Alert: High pollution levels today.",
        "🔥 Fire Hazard: Avoid wooded areas due to dry conditions."
    ];

    const alertsContainer = document.getElementById("alerts-container");
    alerts.forEach(alert => {
        let p = document.createElement("p");
        p.textContent = alert;
        alertsContainer.appendChild(p);
    });

    // Google Maps Integration
    window.initMap = function () {
        new google.maps.Map(document.getElementById("map-container"), {
            center: { lat: 40.7128, lng: -74.0060 },
            zoom: 12
        });
    };
});
