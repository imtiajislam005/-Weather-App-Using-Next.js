"use client";

import { useEffect, useState } from "react";

// Weather code → label + emoji (WMO codes used by Open-Meteo)
function describe(code) {
  if (code === 0) return { label: "Clear sky", icon: "☀️" };
  if ([1, 2].includes(code)) return { label: "Partly cloudy", icon: "⛅" };
  if (code === 3) return { label: "Overcast", icon: "☁️" };
  if ([45, 48].includes(code)) return { label: "Fog", icon: "🌫️" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "Drizzle", icon: "🌦️" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "Rain", icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "Snow", icon: "❄️" };
  if ([95, 96, 99].includes(code)) return { label: "Thunderstorm", icon: "⛈️" };
  return { label: "Unknown", icon: "🌡️" };
}

const DEFAULT_CITY = {
  name: "Dhaka",
  country: "Bangladesh",
  latitude: 23.8103,
  longitude: 90.4125,
};

export default function WeatherCard() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch weather whenever the selected city changes
  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError("");
      try {
        const url =
          "https://api.open-meteo.com/v1/forecast" +
          `?latitude=${city.latitude}&longitude=${city.longitude}` +
          "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code" +
          "&timezone=auto";
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Could not load weather data. Please try again.");
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [city]);

  // Search a city using Open-Meteo geocoding
  async function handleSearch(e) {
    e.preventDefault();
    const name = query.trim();
    if (!name) return;
    setError("");
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1`
      );
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        setError(`No city found for "${name}".`);
        return;
      }
      const r = data.results[0];
      setCity({
        name: r.name,
        country: r.country || "",
        latitude: r.latitude,
        longitude: r.longitude,
      });
      setQuery("");
    } catch {
      setError("Search failed. Please try again.");
    }
  }

  const current = weather?.current;
  const units = weather?.current_units;
  const info = current ? describe(current.weather_code) : null;

  const stats = current
    ? [
        { icon: "💧", label: "Humidity", value: `${current.relative_humidity_2m} ${units.relative_humidity_2m}` },
        { icon: "💨", label: "Wind Speed", value: `${current.wind_speed_10m} ${units.wind_speed_10m}` },
        { icon: "🕒", label: "Time", value: current.time.replace("T", " ") },
        { icon: "🔁", label: "Interval", value: `${current.interval / 60} min` },
      ]
    : [];

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-5 text-slate-800 shadow-xl sm:p-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city (e.g. London)"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 transition">
          Search
        </button>
      </form>

      {error && <p className="mt-4 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">{error}</p>}

      {loading && <p className="mt-8 text-center text-slate-500">Loading weather…</p>}

      {!loading && current && (
        <div className="mt-6">
          <h2 className="text-center text-xl font-semibold">
            {city.name}
            {city.country && <span className="text-slate-500">, {city.country}</span>}
          </h2>

          <div className="mt-4 flex flex-col items-center">
            <div className="text-6xl">{info.icon}</div>
            <p className="mt-2 text-5xl font-bold text-sky-700">
              {current.temperature_2m}
              {units.temperature_2m}
            </p>
            <p className="mt-1 text-slate-500">{info.label}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-sky-50 p-3 text-center">
                <div className="text-2xl">{s.icon}</div>
                <p className="text-xs text-slate-500">{s.label}</p>
                <p className="mt-1 text-sm font-semibold break-words">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
