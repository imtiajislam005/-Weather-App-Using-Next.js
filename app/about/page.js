export const metadata = { title: "About – SkyNow" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-sky-700">About SkyNow</h1>
      <p className="mt-4 leading-relaxed">
        SkyNow is a simple weather application built with Next.js and Tailwind CSS.
        It uses the free Open-Meteo API, which needs no API key, to fetch real-time
        weather data for any city in the world.
      </p>
      <p className="mt-4 leading-relaxed">
        The app shows the current temperature, humidity, wind speed, the time of the
        last reading and the update interval. The layout is fully responsive, so it
        works on phones, tablets and desktops.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Built with</h2>
      <ul className="mt-3 list-disc pl-6 space-y-1">
        <li>Next.js (App Router)</li>
        <li>Tailwind CSS</li>
        <li>Open-Meteo Forecast and Geocoding APIs</li>
      </ul>
    </div>
  );
}
