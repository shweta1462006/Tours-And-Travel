import React, { useState } from "react";

export default function TravelForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Invalid email";
    if (!form.phone.match(/^[0-9]{10,15}$/)) errs.phone = "Enter a valid phone";
    if (!form.destination) errs.destination = "Destination is required";
    if (!form.budget.match(/^[0-9]+$/)) errs.budget = "Budget must be a number";
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      console.log("Form submitted:", form);
      alert("Submitted!");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/public/Images/climbing.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="/public/Images/ride.webp"
              alt="Ladakh"
              className="w-full h-full object-cover"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 p-6 flex flex-col space-y-4"
            noValidate
          >
            <h2 className="text-2xl font-bold">Travel Inquiry</h2>

            {[
              { name: "name", type: "text", label: "Name" },
              { name: "email", type: "email", label: "Email" },
              { name: "phone", type: "tel", label: "Phone Number" },
              { name: "destination", type: "text", label: "Destination" },
              { name: "budget", type: "text", label: "Budget (in ₹)" },
            ].map(({ name, type, label }) => (
              <div key={name}>
                <label className="block text-sm font-medium">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className={`mt-1 w-full px-3 py-2 border rounded ${
                    errors[name] ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
