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

  return { skillsWrappers, listOfSkills };
};
