import React from "react";
import i1 from "../assects/Group 1939 (1).png";
import { FaFacebook } from "react-icons/fa6";
import Work from "./Work";
import Project from "./Project";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div
        // style={{ "background-color": "RGB(17,1,32)", colour: "white" }}
        className=" bg-black mt-[50px]"
      >
        <div>
          <img src={i1} alt="image" className="ms-64" />
        </div>

        <div className="text-white w-full flex flex-col  items-center">
          <h2 className="text-3xl font-serif capitalize tracking-wide">I'm a Full-stack developer. </h2>
          <h4 className="flex items-center capitalize tracking-wide">
            Currently, I'm a Full-stack developer at{" "}
            <span className="capitalize tracking-wide underline hover:text-blue-400 duration-500 hover:no-underline flex items-center cursor-pointer"> <a href="https://www.prolixtechnikos.com/" className="mx-1">Prolix Technikos</a></span>
          </h4>
        </div>

        <div className="text-white  flex justify-center mt-9 capitalize tracking-wide">
          <p className=" w-96 ms-10 ">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>

    </>
  );
};

export default Main;
