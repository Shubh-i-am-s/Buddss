import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error text

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // ✅ Client-side validation
    if (formData.name.trim().length < 2) {
      setStatus("Name must be at least 2 characters");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email address");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Message must be at least 10 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://buddies-universe.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-canvas py-20">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-textPrimary text-center mb-6">
          Collaborate With Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-sm border border-brandLight/40 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandMid"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandMid"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-brandMid"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#FFB703] text-white font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-yellow-600 text-sm text-center">
              Message sent successfully ✅
            </p>
          )}

          {status && status !== "success" && (
            <p className="text-red-600 text-sm text-center">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
