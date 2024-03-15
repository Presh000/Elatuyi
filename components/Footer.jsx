import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="w-full flex-center flex-col pt-12">
      <div className="w-full flex-center space-x-8 pt-10 py-5 ">
        <FaTwitter color="#fff" size={16} />
        <FaFacebookF color="#fff" size={16} />
        <FaLinkedinIn color="#fff" size={16} />
        <IoShareSocialSharp color="#fff" size={16} />
      </div>
      <p className="text-sm text-white pb-8">Copyright © All rights reserved.</p>
    </section>
  );
};

export default Footer;
