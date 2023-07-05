import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import classNames from "classnames";

const Bio = (data) => {
  const [headerVis, setHeaderVis] = useState(false);
  const [bioImageVis, setBioImageVis] = useState(false);

  const [header, headerInView] = useIntersectionObserver({
    threshold: 0.6,
    root: null,
  });
  const [bioImage, bioImageInView] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
  });
  const { bioData } = data;

  useEffect(() => {
    if (headerInView?.isIntersecting && !headerVis) {
      setHeaderVis(true);
    }
    if (bioImageInView?.isIntersecting && !bioImageVis) {
      setBioImageVis(true);
    }
  });

  return (
    <div className="w-full pt-32 pb-16 md:py-32">
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2
            ref={header}
            className={classNames(
              "font-playfair relative pb-11 text-7xl transition-all delay-300 duration-700",
              {
                "opacity-0 top-14": !headerVis,
              },
              {
                "opacity-100 top-0": headerVis,
              }
            )}
          >
            Hello.
          </h2>

          <div>
            <div
              className={classNames(
                "w-full lg:w-3/5 font-playfair leading-10 italic text-xl relative transition-all delay-500 duration-700",
                {
                  "opacity-0 top-14": !headerVis,
                },
                {
                  "opacity-100 top-0": headerVis,
                }
              )}
              dangerouslySetInnerHTML={{ __html: bioData.about }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {bioData.images.map((pic, key) => {
            return (
              <div
                ref={bioImage}
                key={key}
                className={classNames(
                  "rounded-full w-full pt-[100%] bg-cover overflow-hidden relative transition-all delay-1000 duration-700",
                  {
                    "opacity-0 top-24": !bioImageVis,
                  },
                  {
                    "opacity-100 top-0": bioImageVis,
                  }
                )}
                style={{
                  backgroundImage: `url(${pic.bioImages.sourceUrl})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bio;
