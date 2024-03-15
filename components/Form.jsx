"use client";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  xl:w-2/3">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            backgroundColor: "#282b30",
            padding: "8px",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <input
          type="email"
          id="email"
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
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        maxLength={200}
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
      <Link href="/contact">
        <div className="w-52 text-[20px] flex-center py-3 px-8 mb-20 border-2 border-[#5b5d61]">
          Send Message
        </div>
      </Link>
      {/*        <div className="flex flex-col ">
      
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            //   className="selection:border-black "
            style={{
              border: "2px solid ",
              fontSize: "12px",
              padding: "5px",
              height: "130px",
              backgroundColor: "#E6F3F1",
            }}
          />
        </div>
        <div className="pt-8">
          <a href="#" className="">
            <button
              type="submit"
              className="transition ease-in-out delay-0    hover:bg-[#338c8c] duration-150 hover:text-white bg-[#1AABAC] px-5 py-3  w-full"
            >
              Check out my LinkedIn
            </button>
          </a>
        </div>
      </div> */}
    </form>
  );
};

export default Form;
