import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Submitted:", form);

    // ✅ later: save to Firestore / EmailJS / backend
    setSubmitted(true);

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="bg-black/70 border border-blue-500/20 rounded-xl shadow-2xl backdrop-blur-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center mb-6">
          We'd love to hear from you. Fill out the form below!
        </p>

        {submitted ? (
          <div className="text-green-400 text-center font-medium">
            ✅ Thank you for contacting us! We'll reply soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;