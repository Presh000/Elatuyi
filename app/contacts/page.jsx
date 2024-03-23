import Form from "../../components/Form";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="app-section">
      <section className="w-full flex-col px-5 text-white ">
        <p className="text-[42px] font-semibold pb-5 ">Contact</p>
        <p className="text-[16px] pb-5">Book a speaking engagement</p>
        <Link href="/booking-form">
          <div className="w-72 text-[20px] flex-center py-3 px-8 mb-5 border-2 border-white">
            Fiil Booking form
          </div>
        </Link>
        <div className="leading-8 text-[18px]">
          <p>
            I am available for general questions/comments/concerns as well as
            potential employment opportunities in writing, editing, or
            teaching/tutoring.
          </p>
          <br />
          <span>You can also tweet me @scottjbroker.</span>
          <br />
          <p>
            For other matters, please be in touch with my agent, Kent Wolf:
            kent@neonliterary.com.
          </p>
          <br />
        </div>
        <Form />
      </section>
    </section>
  );
};

export default Contacts;
