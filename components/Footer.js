import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} SkyNow. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <p>
          Data by{" "}
          <a href="https://open-meteo.com/" target="_blank" rel="noreferrer" className="underline hover:text-white">
            Open-Meteo
          </a>
        </p>
      </div>
    </footer>
  );
}
