import { useEffect, useState } from "react";
import { useIsInViewPort } from "./useIsInViewport";
import {
  CsharpOriginal,
  JavascriptOriginal,
  Css3Original,
  Html5Original,
  NodejsOriginal,
  GitOriginal,
  GithubOriginal,
  ReactOriginal,
  SassOriginal,
  AzureOriginal,
  MaterialuiOriginal,
  PythonOriginal,
  AngularjsOriginal,
  MongodbOriginal,
  BootstrapOriginal,
  TailwindcssPlain,
} from "devicons-react";
import { AzuresqldatabasePlain } from "@beta/devicons-react";

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
    <CsharpOriginal size={64} />,
    <JavascriptOriginal size={64} />,
    <Css3Original size={64} />,
    <Html5Original size={64} />,
    <NodejsOriginal size={64} />,
    <GitOriginal size={64} />,
    <GithubOriginal size={64} />,
    <ReactOriginal size={64} />,
    <SassOriginal size={64} />,
    <AzureOriginal size={64} />,
    <MaterialuiOriginal size={64} />,
    <PythonOriginal size={64} />,
    <AngularjsOriginal size={64} />,
    <MongodbOriginal size={64} />,
    <BootstrapOriginal size={64} />,
    <TailwindcssPlain size={64} />,
    <AzuresqldatabasePlain size={64} />,
  ];
  return { skillsWrappers, listOfSkills };
};
