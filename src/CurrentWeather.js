import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <h1 class="current-city" id="current-city">
        New York City
      </h1>
      <p class="current-details">
        <span id="current-date"></span>, <span id="description"></span>
        <br />
        Humidity: 20°
        <strong>
          <span id="humidity"></span>
        </strong>{" "}
        , Wind: 10 km/h
        <strong>
          <span id="wind"></span>
        </strong>
      </p>

      <span class="current-temperature-icon">🌤️</span>
      <span class="current-temperature-value">60°</span>
      <span class="current-temperature-unit">F</span>
    </div>
  );
}
