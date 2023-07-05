import React, { useState } from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";

const MusicSection = (music) => {
  return (
    <div
      className={classNames("w-full pt-20 pb-60 transition-all duration-1000")}
    >
      <div className="w-full min-h-screen">
        <div className=" pt-10 w-10/12 mx-auto">
          <div>
            <h3 className="text-7xl pb-16 font-playfair transition-transform duration-700 delay-200">
              Latest Mix
            </h3>
          </div>
        </div>
        <div className=" w-10/12 flex flex-col md:flex-row md:items-center mx-auto">
          <div>
            <div className="w-full md:w-1/2 mb-16 md:mb-0">
              <p className="font-playfair w-full md:w-2/3 leading-10 italic text-xl">
                Every now and again I'll get around to recording a mix. I can't
                promise a new one each week, month or year, but I give my
                personal guarantee each one will be of the highest quality!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <ReactPlayer url={music.music.youtubeMix} width={"100%"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
