import React from "react";
import a1 from "../assects/Rectangle.png";
import a2 from "../assects/Group 1935.png";
import a3 from "../assects/Group 1938.png";
import a4 from "../assects/Icons.png";
import a5 from "../assects/Skills.png";
const Work = () => {
  return (
    <>
      <div className="bg-black relative text-white ">
        <div className="pt-3 ms-72 capitalize tracking-wide">
          <h2>Work Experience</h2>
        </div>

        <div className="flex flex-col items-center mt-5 gap-3">
          <div className="flex gap-3 ">
            <div className="w-96 h-32 rounded-md flex gap-2 bg-pink-950  border-x-4 border-pink-700 hover:translate-y-0.5 hover:translate-x-0.5">
              <div className="flex items-center justify-center">
                <img src={a1} alt="" height="150px " width="150px" />
              </div>
              <div className="flex flex-col  justify-start">
                <h2 className="text-xl capitalize tracking-wide">CIB on the Mobile</h2>
                <h6 className="text-sm capitalize tracking-wide">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </h6>
                <button className="capitalize tracking-wide bg-pink-800 w-44 rounded-md mt-3 hover:bg-pink-900 hover:duration-500 hover:text-slate-100 hover:underline">
                  Learn More
                </button>
              </div>
            </div>

            <div className=" w-96 h-32 rounded-md flex gap-2  bg-pink-950 border-x-4 border-pink-700 hover:translate-y-0.5 hover:translate-x-0.5">
              <div className="flex items-center justify-center">
                <img src={a2} alt="" height="150px " width="150px" />
              </div>
              <div className="flex flex-col  justify-start">
                <h2 className="text-xl capitalize tracking-wide">CIB on the Mobile</h2>
                <h6 className="text-sm capitalize tracking-wide">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </h6>
                <button className=" capitalize tracking-wide  bg-pink-800 w-44 rounded-md mt-3 hover:bg-pink-900 hover:duration-500 hover:text-slate-100 hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className=" w-96 h-32 rounded-md flex gap-2  bg-pink-950   border-x-4 border-pink-700 hover:translate-y-0.5 hover:translate-x-0.5">
              <div className="flex items-center justify-center">
                <img src={a3} alt="" height="150px " width="150px" />
              </div>
              <div className="flex flex-col  justify-start">
                <h2 className="text-xl capitalize tracking-wide">CIB on the Mobile</h2>
                <h6 className="text-sm capitalize tracking-wide">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </h6>
                <button className="capitalize tracking-wide bg-pink-800 w-44 rounded-md mt-3 hover:bg-pink-900 hover:duration-500 hover:text-slate-100 hover:underline">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" w-96 h-32 rounded-md flex gap-2  bg-pink-950 border-x-4  border-pink-700 hover:translate-y-0.5 hover:translate-x-0.5">
              <div className="flex items-center justify-center">
                <img src={a4} alt="" height="150px " width="150px" />
              </div>
              <div className="flex flex-col  justify-start">
                <h2 className="text-xl capitalize tracking-wide">CIB on the Mobile</h2>
                <h6 className="text-sm capitalize tracking-wide">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </h6>
                <button className="capitalize tracking-wide bg-pink-800 w-44 rounded-md mt-3 hover:bg-pink-900 hover:duration-500 hover:text-slate-100 hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black  pt-11 ps-52">
        <img src={a5} alt="" />
      </div>
    </>
  );
};

export default Work;
