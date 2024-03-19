"use client";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="w-full flex-center flex-col pt-12">
      <div className="w-full flex-center space-x-8 pt-10 py-5 ">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.open("https://twitter.com", "_blank")}
        >
          <FaTwitter color="#fff" size={16} />
        </a>
        <a
          href="https://www.facebook.com/Ttolaspeaks?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.open(
              "https://www.facebook.com/Ttolaspeaks?mibextid=ZbWKwL",
              "_blank"
            )
          }
        >
          <FaFacebookF color="#fff" size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/tola-bamigbaiye-elatuyi/?originalSubdomain=ng"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/tola-bamigbaiye-elatuyi/?originalSubdomain=ng",
              "_blank"
            )
          }
        >
          <FaLinkedinIn color="#fff" size={16} />
        </a>
      </div>
      <p className="text-sm text-white pb-8">
        Copyright © All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
