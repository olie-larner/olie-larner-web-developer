import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import classNames from "classnames";
import { useQuery } from "@apollo/client";
import BigImage from "../components/BigImage";
import Bio from "../components/Bio";
import ContactMe from "../components/ContactMe";
import IntroSection from "../components/IntroSection";
import Music from "../components/MusicSection";
import PreviousProjects from "../components/PreviousProjects";
import SkillsSection from "../components/SkillsSection";
import Header from "../components/Header";

const APOLLO_QUERY = gql`
  {
    pageBy(uri: "home") {
      id
      homePage {
        fieldGroupName

        skillSet {
          skillSetLogos {
            skillLogo {
              altText
              sourceUrl(size: LARGE)
            }
            skillName
          }
          skillSetTitle
        }

        previousProjects {
          backgroundImage {
            altText
            sourceUrl(size: LARGE)
          }
          websiteLink
          websiteName
          year
          workDone
        }

        music {
          youtubeMix
        }

        bio {
          about
          images {
            bioImages {
              altText
              sourceUrl(size: LARGE)
            }
          }
          location
          name
        }
      }
      slug
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);
  const [pageLoading, setLoading] = useState(loading);
  const [loadingDisplay, setLoadingDisplay] = useState(true);
  const [projectsInView, setProjectsInView] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setTimeout(() => {
        setLoadingDisplay(false);
      }, 4000);
    }
  });

  if (loading) {
    return (
      <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-white">
        <h1 className="text-2xl text-center font-arastin_std ">
          OLIE LARNER <br />
          Loading...
        </h1>
      </div>
    );
  }
  if (error) return `${error}`;

  const skillSet = data.pageBy.homePage.skillSet;
  const bioData = data.pageBy.homePage.bio;
  const previousProjects = data.pageBy.homePage.previousProjects;
  const music = data.pageBy.homePage.music;

  const isProjectsInView = (seeProjects) => {
    setProjectsInView(seeProjects);
  };

  return (
    <div>
      <div
        className={classNames(
          "fixed top-0 z-40 items-center justify-center w-screen h-screen bg-white transition-all delay-1000 duration-500",
          { "opacity-100": pageLoading },
          { "opacity-0": !pageLoading },
          { flex: loadingDisplay },
          { hidden: !loadingDisplay }
        )}
      >
        <h1 className="text-2xl text-center font-arastin_std">
          OLIE LARNER <br />
          Loading...
        </h1>
      </div>
      <Header projectsInView={projectsInView} />
      <IntroSection loading={loading} />
      <Bio bioData={bioData} />
      <SkillsSection skillSet={skillSet} />
      <PreviousProjects
        previousProjects={previousProjects}
        isProjectsInView={isProjectsInView}
      />
      <Music music={music} />
      <ContactMe />
      <BigImage image="bg-road" />
    </div>
  );
};

export default Home;
