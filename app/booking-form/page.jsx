"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    eventLocation: "",
    eventDate: null,
    dateFlexible: "",
    noOfAttendees: "",
    attendeesValue: "",
    speakingRequest: "",
  });

  const [isDateFlexible1, setIsDateFlexible1] = useState(false);
  const [isDateFlexible2, setIsDateFlexible2] = useState(false);

  const [isSpeakingRequest1, setIsSpeakingRequest1] = useState(false);
  const [isSpeakingRequest2, setIsSpeakingRequest2] = useState(false);
  const [isSpeakingRequest3, setIsSpeakingRequest3] = useState(false);

  const toogleSpeakingRequest = (option) => {
    if (option === 1) {
      setIsSpeakingRequest1(true);
      setIsSpeakingRequest2(false);
      setIsSpeakingRequest3(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        speakingRequest: "Paid",
      }));
    } else if (option === 2) {
      setIsSpeakingRequest1(false);
      setIsSpeakingRequest2(true);
      setIsSpeakingRequest3(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        speakingRequest: "Unpaid",
      }));
    } else {
      setIsSpeakingRequest1(false);
      setIsSpeakingRequest2(false);
      setIsSpeakingRequest3(true);
      setFormData((prevFormData) => ({
        ...prevFormData,
        speakingRequest: "I don't know",
      }));
    }
  };
  useEffect(() => {
    console.log(formData.speakingRequest);
  }, [formData.speakingRequest]);

  const toggleDataFlexible = (option) => {
    if (option === 1) {
      setIsDateFlexible1(true);
      setIsDateFlexible2(false);
      setFormData((prevFormData) => ({ ...prevFormData, dateFlexible: "Yes" }));
    } else {
      setIsDateFlexible1(false);
      setIsDateFlexible2(true);
      setFormData((prevFormData) => ({ ...prevFormData, dateFlexible: "No" }));
    }
  };
  useEffect(() => {
    console.log(formData.dateFlexible);
  }, [formData.dateFlexible]);
  useEffect(() => {
    console.log(formData.eventDate);
  }, [formData.eventDate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    alert("Form submitted successfully");
  };

  return (
    <section className="w-full flex-center flex-col px-5 text-white">
      <p className="text-[42px] font-semibold pb-5 text-[#EC2E57] ">
        Find out more
      </p>
      <p className="text-[#7E7E7E] pb-16">
        To enquire about engaging The Business of Trust for your next event,
        please submit the form below.
      </p>
      <form onSubmit={handleSubmit} className="w-full flex-center flex-col">
        <label className="text-[#7E7E7E] pb-3">First Name (Required)</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="md:w-2/3 w-full "
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">Last Name (Required)</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          Email Address (Required)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          Where will the event take place?
        </label>
        <input
          type="text"
          id="eventLocation"
          name="eventLocation"
          placeholder="Event Location"
          value={formData.eventLocation}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          When will this event be held?
        </label>
        <DatePicker
          className="text-black"
          name="eventDate"
          value={formData.eventDate}
          selected={formData.eventDate}
          dateFormat={"dd/MM/yyyy"}
          minDate={new Date()}
          isClearable
          onChange={(date) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              eventDate: date,
            }));
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          Is your date flexible?
        </label>
        <div className="flex items-center space-x-5">
          <div
            onClick={() => toggleDataFlexible(1)}
            className="cursor-pointer items-center flex space-x-2 "
          >
            <div
              className=""
              style={{
                width: 24,
                height: 24,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {isDateFlexible1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#F26436"
                  strokeWidth="5"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span>Yes</span>
          </div>
          <div
            onClick={() => toggleDataFlexible(2)}
            className="cursor-pointer items-center flex space-x-2"
          >
            <div
              className=""
              style={{
                width: 24,
                height: 24,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {isDateFlexible2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#F26436"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span>No</span>
          </div>
        </div>
        <label className="text-[#7E7E7E] pt-8 pb-3">Number of attendees</label>
        <input
          type="number"
          id="noOfAttendees"
          name="noOfAttendees"
          placeholder="Number of attendees"
          value={formData.noOfAttendees}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          By the end of the session, what value would you like your attendees to
          have received?
        </label>
        <input
          type="text"
          id="attendeesValue"
          name="attendeesValue"
          placeholder="Value"
          value={formData.attendeesValue}
          onChange={handleChange}
          className="md:w-2/3 w-full"
          style={{
            backgroundColor: "#fff",
            padding: "8px",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        />
        <label className="text-[#7E7E7E] pt-8 pb-3">
          Is this a paid or unpaid speaking request?
        </label>
        <div className="flex items-center  pt-8 pb-3 space-x-5">
          <div
            onClick={() => toogleSpeakingRequest(1)}
            className="cursor-pointer items-center flex space-x-2"
          >
            <div
              className=""
              style={{
                width: 24,
                height: 24,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {isSpeakingRequest1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#F26436"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span>Paid</span>
          </div>
          <div
            onClick={() => toogleSpeakingRequest(2)}
            className="cursor-pointer items-center flex space-x-2"
          >
            <div
              className=""
              style={{
                width: 24,
                height: 24,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {isSpeakingRequest2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#F26436"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span>Unpaid</span>
          </div>
          <div
            onClick={() => toogleSpeakingRequest(3)}
            className="cursor-pointer items-center flex space-x-2"
          >
            <div
              className=""
              style={{
                width: 24,
                height: 24,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {isSpeakingRequest3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  color="red"
                  fill="black"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span>I don't know</span>
          </div>
        </div>
        <div className="w-52 text-[20px] py-3 pt-12">
          <button
            type="submit"
            className="transition ease-in-out delay-0    hover:bg-[#338c8c] duration-150 hover:text-white bg-[#F26436] px-5 py-3  w-full"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
