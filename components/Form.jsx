"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceId = "service_2rgqohe";
    const templateId = "template_4x6p4nt";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Omotola Elatuyi",
    };

    setTimeout(() => {
      emailjs
        .send(
          serviceId,
          templateId,
          templateParams,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  xl:w-2/3">
        <input
          type="text"
          id="from_name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            backgroundColor: "#282b30",
            padding: "8px",
            color: "#fff",
            border: "1px solid #fff",
          }}
        />
        {errors.name && <span>{errors.name}</span>}
        <input
          type="email"
          id="from_email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            backgroundColor: "#282b30",
            padding: "8px",
            color: "#fff",
            border: "1px solid #fff",
          }}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="flex flex-col">
        <textarea
          id="message"
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
            padding: "8px",
            height: "168px",
            backgroundColor: "#282b30",
            color: "#fff",
          }}
        />
        {errors.message && <span>{errors.message}</span>}
        <button
          type="submit"
          disabled={!formData.name || !formData.email || !formData.message}
        >
          <div
            className="w-52 cursor-pointer max-md:w-full text-[20px] flex-center py-3 px-8 mb-20 border-2 border-[#5b5d61]"
            style={{
              border: "1px solid #fff",
              borderTop: "0px solid #fff",
            }}
          >
            {isSubmitting ? <Spinner /> : "Send Message"}
          </div>
        </button>
      </div>
    </form>
  );
};

export default Form;
