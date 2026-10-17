import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-2xl bg-white p-6 shadow sm:p-10">
        <h2 className="text-2xl font-bold text-sky-700">About This App</h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          SkyNow is a lightweight weather app built with Next.js and Tailwind CSS. It
          fetches live data from the free Open-Meteo API and shows the temperature,
          humidity, wind speed, time and update interval for any city you search.
        </p>
        <Link
          href="/about"
          className="mt-5 inline-block rounded-lg bg-sky-600 px-5 py-2 font-medium text-white hover:bg-sky-700 transition"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
