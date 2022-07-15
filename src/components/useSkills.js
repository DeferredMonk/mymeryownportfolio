import { useEffect, useState } from "react";
import { useIsInViewPort } from "./useIsInViewport";

export const useSkills = ({ wrapperRef, wrapperRefSkills }) => {
  const isInViewport = useIsInViewPort(wrapperRef);
  const isSkillsInViewport = useIsInViewPort(wrapperRefSkills);
  const [skillsWrappers, setSkillsWrappers] = useState({
    Me: false,
    Skills: false,
  });

  useEffect(() => {
    isInViewport && setSkillsWrappers({ ...skillsWrappers, Me: true });
    isSkillsInViewport &&
      setSkillsWrappers({ ...skillsWrappers, Skills: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewport, isSkillsInViewport]);

  const listOfSkills = [
    "/icons8-javascript-96.png",
    "/icons8-css3-96.png",
    "/icons8-html-5-96.png",
    "/icons8-nodejs-96.png",
    "/icons8-git-96.png",
    "/icons8-react-native-96.png",
    "/icons8-sass-96.png",
    "/icons8-sql-96.png",
  ];
  const listOfProgLang = [
    {
      language: "JavaScript",
      description:
        "I've completed in Haaga-Helia UAS a JS basics course where I learned about variables, arrays, forloops, objects and in general the basics of JavaScript.",
    },
    { language: "HTML5", description: "" },
    { language: "CSS3", description: "" },
    { language: "Node.js", description: "" },
    { language: "Git", description: "" },
    { language: "ReactJS", description: "" },
    { language: "Sass", description: "" },
    { language: "SQL", description: "" },
  ];

  return { skillsWrappers, listOfSkills, listOfProgLang };
};
