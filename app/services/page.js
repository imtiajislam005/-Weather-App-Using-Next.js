export const metadata = { title: "Services – SkyNow" };

const services = [
  { icon: "🌡️", title: "Current Temperature", text: "See the live temperature in °C for your chosen city." },
  { icon: "💧", title: "Humidity", text: "Check the relative humidity so you know how the air feels." },
  { icon: "💨", title: "Wind Speed", text: "Get the current wind speed in km/h." },
  { icon: "🕒", title: "Time & Update Interval", text: "Know exactly when the data was recorded and how often it refreshes." },
  { icon: "🔎", title: "City Search", text: "Search any city in the world using the Open-Meteo geocoding service." },
  { icon: "📱", title: "Responsive Design", text: "A clean layout that adapts to mobile, tablet and desktop screens." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-sky-700">Our Services</h1>
      <p className="mt-2 text-slate-600">Everything SkyNow offers, completely free.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition">
            <div className="text-4xl">{s.icon}</div>
            <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
