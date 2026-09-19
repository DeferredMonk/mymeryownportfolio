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

export const useSkills = ({ wrapperRef, wrapperRefSkills, skills }) => {
  const isInViewport = useIsInViewPort(wrapperRef);
  const isSkillsInViewport = useIsInViewPort(wrapperRefSkills);
  const [skillsWrappers, setSkillsWrappers] = useState({
    Me: false,
    Skills: false,
  });

  useEffect(() => {
    setSkillsWrappers((current) => ({
      Me: current.Me || isInViewport,
      Skills: current.Skills || isSkillsInViewport,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewport, isSkillsInViewport]);

  const icons = {
    "C#": CsharpOriginal,
    JavaScript: JavascriptOriginal,
    CSS: Css3Original,
    HTML: Html5Original,
    "Node.js": NodejsOriginal,
    Git: GitOriginal,
    GitHub: GithubOriginal,
    React: ReactOriginal,
    SASS: SassOriginal,
    Azure: AzureOriginal,
    "Material UI": MaterialuiOriginal,
    Python: PythonOriginal,
    Angular: AngularjsOriginal,
    MongoDB: MongodbOriginal,
    Bootstrap: BootstrapOriginal,
    "Tailwind CSS": TailwindcssPlain,
    "Azure SQL": AzuresqldatabasePlain,
  };
  const listOfSkills = skills.map((skill) => {
    const Icon = icons[skill];
    return Icon ? <Icon key={skill} size={64} /> : null;
  });
  return { skillsWrappers, listOfSkills };
};
