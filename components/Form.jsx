"use client";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validation rules
    // let errors = {};
    // if (!formData.name.trim()) {
    //   errors.name = "Name is required";
    // }
    // if (!formData.email.trim()) {
    //   errors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   errors.email = "Email address is invalid";
    // }
    // if (!formData.message.trim()) {
    //   errors.message = "Message is required";
    // }

    // // If there are errors, set them and prevent form submission
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }
    setSubmitting(true);

    //send email
    try {
      const response = await fetch("api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { success, error } = await response.json();
      if (success) {
        alert("Your message has been sent!");
      } else if (error) {
        console.error(error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("There was a problem with the request. Please try again later.");
    }
    setSubmitting(false);


  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  xl:w-2/3">
        <input
          type="text"
          // id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          // required
          style={{
            backgroundColor: "#282b30",
            padding: "8px",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        {errors.name && <span>{errors.name}</span>}
        <input
          type="email"
          // id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            backgroundColor: "#282b30",
            padding: "8px",
            color: "#fff",
            // borderLeft:"0px solid white",
            borderRadius: "5px",
            border: "1px solid #fff",
          }}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <textarea
        // id="message"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={10}
        className="xl:w-2/3 w-full resize-none"
        style={{
          borderLeft: "1px solid #fff",
          borderBottom: "1px solid #fff",
          borderRight: "1px solid #fff",
          // fontSize: "12px",
          padding: "8px",
          // maxHeight: "168px",
          height: "168px",
          backgroundColor: "#282b30",
          borderRadius: "5px",
          color: "#fff",
        }}
      />
      {errors.message && <span>{errors.message}</span>}
      <button
        type="submit"
        // disabled={!formData.name || !formData.email || !formData.message}
      >
        <div className="w-52 text-[20px] flex-center py-3 px-8 mb-20 border-2 border-[#5b5d61]">
          Send Message
        </div>
      </button>
    </form>
  );
};

export default Form;
