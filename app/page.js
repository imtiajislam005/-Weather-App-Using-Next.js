import WeatherCard from "../components/WeatherCard";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-500 to-sky-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            Live Weather, Anywhere
          </h1>
          <p className="mt-3 text-center text-sky-100 max-w-xl mx-auto">
            Search any city and get the current temperature, humidity and wind speed instantly.
          </p>
          <div className="mt-8">
            <WeatherCard />
          </div>
        </div>
      </section>
      <AboutSection />
    </>
  );
}
