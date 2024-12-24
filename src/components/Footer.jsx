import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white pt-[200px] flex flex-col ps-[450px] pb-[60px]">
        <div className="block">
          <span className="text-2xl capitalize tracking-wide">contact</span>
        </div>

        <div className="flex flex-col mt-[20px]">
          <span className="w-[530px] text-sm  capitalize tracking-wide">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect.
          </span>
          <span className="mt-[10px] text-sm  capitalize tracking-wide">yagnikpansuriya603@gmail.com</span>
        </div>

        <div className="flex gap-3 mt-3">
            <FaFacebook/>
            <FaInstagramSquare />
            <FaLinkedin />
            <FaSquareTwitter />
        </div>
      </div>
    </>
  );
};

export default Footer;
