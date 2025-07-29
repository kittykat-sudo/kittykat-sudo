"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (name && email && message) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Get in Touch With Us</h2>
      </div>

      {success && (
        <p className="text-green-500 mb-4 text-center">
          Message sent successfully!
        </p>
      )}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium mb-2 text-gray-300"
            htmlFor="name"
          >
            NAME
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none text-white"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-2 text-gray-300"
            htmlFor="email"
          >
            SUBJECT
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none text-white"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-2 text-gray-300"
            htmlFor="message"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none text-white resize-none"
            rows={4}
            required
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
