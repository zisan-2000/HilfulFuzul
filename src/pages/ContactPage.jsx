import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        position: "top-center",
      });
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="m-8 mx-auto max-w-md rounded-lg border border-gray-300 p-8 shadow-md dark:bg-slate-200">
      <ToastContainer />
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
          />
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
