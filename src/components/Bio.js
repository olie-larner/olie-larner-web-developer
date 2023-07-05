import React, { useState } from "react";

const Bio = (data) => {
  const [revealClass, setRevealClass] = useState("scale-y-0");
  const { bioData } = data;
  return (
    <div className="w-full pt-32 pb-16 md:py-32">
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2
            className={`font-playfair pb-11 text-7xl transition-all ${revealClass}`}
          >
            Hello.
          </h2>

          <div>
            <div
              className=" w-full lg:w-3/5 font-playfair leading-10 italic text-xl"
              dangerouslySetInnerHTML={{ __html: bioData.about }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {bioData.images.map((pic, key) => {
            return (
              <div key={key}>
                <div
                  className="rounded-full w-full pt-[100%] bg-cover overflow-hidden"
                  style={{
                    backgroundImage: `url(${pic.bioImages.sourceUrl})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bio;
