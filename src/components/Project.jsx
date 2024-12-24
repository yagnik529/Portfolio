import React from "react";
import l1 from "../assects/Mask group (1).png";
import l2 from "../assects/Screenshot 2022-09-20 at 11.44 1.png";
const Project = () => {
  return (
    <>
      <div className="bg-black flex flex-col gap-10 ">
        <div className=" flex items-center justify-center text-white gap-3">
          <div>
            <div className="absolute  top-[1880px] left-24">
              <span className="block text-xl text-pink-950 capitalize tracking-wide">
                Featured Project
              </span>
              <span className="text-2xl capitalize tracking-wide">Example Project</span>
              <div className=" bg-pink-950 text-white  opacity-40  rounded-md px-4 py-4">
                <p className="w-[600px] text-start capitalize tracking-wide">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="absolute  top-[1880px] left-24">
              <span className="block text-xl text-pink-950 capitalize tracking-wide">
                Featured Project
              </span>
              <span className="text-2xl capitalize tracking-wide ">Example Project</span>
              <div className=" bg-pink-950 text-white  opacity-40  rounded-md px-4 py-4">
                <p className="w-[600px] text-start capitalize tracking-wide">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>
            {/*  */}

          </div>
          <div className="ms-96 ">
            <img src={l1} alt="" className="bg-pink-950  rounded-md" />
          </div>
        </div>
        <div className="flex items-center justify-center pe-96">
          <div>
            <img src={l2} alt="" className="rounded-2xl" />
          </div>
          <div>
            <div className="absolute  top-[2250px] left-[500px] text-end">
              <span className="block text-xl text-pink-950 capitalize tracking-wide">
                Featured Project
              </span>
              <span className="text-2xl text-white capitalize tracking-wide">Example Project</span>
              <div className=" bg-pink-950 text-white  opacity-60  rounded-md px-4 py-4">
                <p className="w-[600px] text-start text-white capitalize tracking-wide">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="absolute  top-[2250px] left-[500px] text-end">
              <span className="block text-xl text-pink-950 capitalize tracking-wide">
                Featured Project
              </span>
              <span className="text-2xl text-white capitalize tracking-wide">Example Project</span>
              <div className=" bg-pink-950 text-white  opacity-60  rounded-md px-4 py-4">
                <p className="w-[600px] text-start text-white capitalize tracking-wide">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Project;
