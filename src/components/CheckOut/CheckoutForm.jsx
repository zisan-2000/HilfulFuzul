import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = ({ setFormData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    altPhoneNumber: "",
    country: "bangladesh",
    district: "bogura",
    area: "Nandigram",
    addressDetails: "",
  });

  useEffect(() => {
    setFormData(formValues);
  }, [formValues, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, phoneNumber, addressDetails } = formValues;
    if (!name || !email || !phoneNumber || !addressDetails) {
      toast.error("Please fill out all required fields.");
      return false;
    }
    return true;
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">Checkout Form</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">আপনার নাম (Your Name)*</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full rounded border p-2 sm:p-3"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ইমেইল (Email)*</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full rounded border p-2 sm:p-3"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ফোন নং (Phone Number)*</label>
          <input
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            className="w-full rounded border p-2 sm:p-3"
            placeholder="+88"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            বিকল্প ফোন নং (Alt Phone Number)
          </label>
          <input
            type="text"
            name="altPhoneNumber"
            value={formValues.altPhoneNumber}
            onChange={handleChange}
            className="w-full rounded border p-2 sm:p-3"
            placeholder="Alt Phone Number"
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-gray-700">দেশ (Country)*</label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
              className="w-full rounded border p-2 sm:p-3"
              required
            >
              <option value="bangladesh">বাংলাদেশ</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">জেলা (District)*</label>
            <select
              name="district"
              value={formValues.district}
              onChange={handleChange}
              className="w-full rounded border p-2 sm:p-3"
              required
            >
              <option value="bogura">বগুড়া</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              এলাকা/থানা (Area/Thana)*
            </label>
            <select
              name="area"
              value={formValues.area}
              onChange={handleChange}
              className="w-full rounded border p-2 sm:p-3"
              required
            >
              <option value="Nandigram">নন্দীগ্রাম</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            বিস্তারিত ঠিকানা (Address Details)*
          </label>
          <textarea
            name="addressDetails"
            value={formValues.addressDetails}
            onChange={handleChange}
            className="w-full rounded border p-2 sm:p-3"
            placeholder="Address Details"
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
