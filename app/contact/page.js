"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend: this is a demo form.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500";

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-bold text-sky-700">Contact Us</h1>
      <p className="mt-2 text-slate-600">Have a question or feedback? Send us a message.</p>

      {sent && (
        <div className="mt-6 rounded-lg bg-green-100 px-4 py-3 text-green-800">
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required value={form.name} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block text-sm font-medium">
          Message
          <textarea name="message" rows={5} required value={form.message} onChange={handleChange} className={inputClass} />
        </label>
        <button type="submit" className="w-full rounded-lg bg-sky-600 py-2 font-semibold text-white hover:bg-sky-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
