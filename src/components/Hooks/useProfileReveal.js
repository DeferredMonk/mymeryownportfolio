import { useEffect, useState } from "react";
import { useIsInViewPort } from "./useIsInViewport";

export const useProfileReveal = (ref) => {
  const isInViewport = useIsInViewPort(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setIsVisible(true);
  }, [isInViewport]);

  return isVisible;
};
