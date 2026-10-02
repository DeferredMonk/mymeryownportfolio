import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Experience.module.sass";

const ExperienceCardContent = ({
  experience,
  expandable = false,
  expanded = false,
  onToggle,
}) => {
  const detailsRef = useRef(null);
  const detailsStyle = expandable
    ? { maxHeight: expanded ? `${detailsRef.current?.scrollHeight ?? 0}px` : "0px" }
    : undefined;

  return (
    <>
      {expandable && (
        <button
          type="button"
          className={`${styles.expandButton} ${expanded ? styles.expanded : ""}`}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${experience.title}`}
          aria-expanded={expanded}
          onClick={(event) => {
            event.stopPropagation();
            onToggle?.(event);
          }}
        >
          <span className={styles.expandArrow} aria-hidden="true" />
        </button>
      )}
      <p className={styles.period}>
        {experience.startDate} – {experience.endDate || "Present"}
      </p>
      <h3>{experience.title}</h3>
      <p className={styles.company}>{experience.company}</p>
      <div ref={detailsRef} className={styles.details} style={detailsStyle}>
        <p>{experience.summary}</p>
        <ul>
          {experience.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const getOverlayPosition = (activeExperience, height) => {
  const anchor = activeExperience.cardElement.getBoundingClientRect();
  const width = Math.min(500, window.innerWidth - 32);
  const canExpandRight = !activeExperience.expandLeft;

  return {
    left: canExpandRight
      ? Math.max(16, Math.min(anchor.left, window.innerWidth - width - 16))
      : null,
    right: canExpandRight
      ? null
      : Math.max(16, window.innerWidth - Math.min(anchor.right, window.innerWidth - 16)),
    top: activeExperience.index % 2 === 0 ? anchor.bottom - height : anchor.top,
    width,
  };
};

const Experience = ({ experiences }) => {
  const timelineViewportRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);
  const overlayRef = useRef(null);
  const closeTimerRef = useRef(null);
  const widthFramesRef = useRef([]);
  const [activeExperience, setActiveExperience] = useState(null);
  const [overlayPosition, setOverlayPosition] = useState(null);
  const [positionRevision, setPositionRevision] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [overlayHeight, setOverlayHeight] = useState(135);
  const [overlayWidth, setOverlayWidth] = useState(150);
  const [isCompact, setIsCompact] = useState(
    () => window.matchMedia?.("(max-width: 1023px)").matches ?? false,
  );
  const orderedExperiences = experiences.map((experience, index) => ({
    experience,
    index,
  }));
  const displayedExperiences = isCompact
    ? orderedExperiences.slice().reverse()
    : orderedExperiences;

  useEffect(() => {
    const viewport = timelineViewportRef.current;
    if (viewport) viewport.scrollLeft = viewport.scrollWidth;
  }, []);

  useEffect(() => {
    if (!window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateLayout = (event) => setIsCompact(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateLayout);
      return () => mediaQuery.removeEventListener("change", updateLayout);
    }

    mediaQuery.addListener(updateLayout);
    return () => mediaQuery.removeListener(updateLayout);
  }, []);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const line = timelineLineRef.current;
    if (!timeline || !line || !isCompact) return undefined;

    const updateLine = () => {
      const markers = timeline.querySelectorAll(`.${styles.marker}`);
      if (!markers.length) return;

      const timelineRect = timeline.getBoundingClientRect();
      const firstMarkerRect = markers[0].getBoundingClientRect();
      const lastMarkerRect = markers[markers.length - 1].getBoundingClientRect();
      const start = firstMarkerRect.top + firstMarkerRect.height / 2 - timelineRect.top;
      const end = lastMarkerRect.top + lastMarkerRect.height / 2 - timelineRect.top;

      line.style.top = `${start}px`;
      line.style.height = `${Math.max(0, end - start)}px`;
    };

    const observer = new ResizeObserver(updateLine);
    observer.observe(timeline);
    timeline.querySelectorAll(`.${styles.milestone}`).forEach((milestone) => {
      observer.observe(milestone);
    });
    updateLine();

    window.addEventListener("resize", updateLine);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLine);
    };
  }, [experiences, isCompact, activeExperience]);

  useEffect(
    () => () => {
      window.clearTimeout(closeTimerRef.current);
      widthFramesRef.current.forEach(window.cancelAnimationFrame);
    },
    [],
  );

  useLayoutEffect(() => {
    if (!activeExperience || !overlayRef.current) return;

    setOverlayPosition(getOverlayPosition(activeExperience, overlayHeight));
  }, [activeExperience, overlayHeight, positionRevision]);

  useEffect(() => {
    if (!activeExperience || isCompact) return undefined;

    const updatePosition = () => setPositionRevision((revision) => revision + 1);

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [activeExperience, isCompact]);
  const openExperience = (experience, index, cardElement) => {
    if (!cardElement) return;
    window.clearTimeout(closeTimerRef.current);
    widthFramesRef.current.forEach(window.cancelAnimationFrame);
    widthFramesRef.current = [];
    setIsClosing(false);
    setOverlayHeight(135);
    setOverlayWidth(150);
    const anchor = cardElement.getBoundingClientRect();
    const width = Math.min(500, window.innerWidth - 32);
    const hasRoomOnRight = anchor.left + width <= window.innerWidth - 16;
    const expandLeft = index === experiences.length - 1 || !hasRoomOnRight;
    const nextExperience = { experience, index, cardElement, expandLeft };
    setOverlayPosition(getOverlayPosition(nextExperience, 135));
    setActiveExperience(nextExperience);

    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => setOverlayWidth(width));
      widthFramesRef.current.push(secondFrame);
    });
    widthFramesRef.current.push(firstFrame);
  };

  const scheduleClose = () => {
    setIsClosing(true);
    setOverlayHeight(135);
    setOverlayWidth(150);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveExperience(null);
      setOverlayPosition(null);
      setIsClosing(false);
    }, 280);
  };

  const closeExperience = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(true);
    setOverlayHeight(135);
    setOverlayWidth(150);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveExperience(null);
      setOverlayPosition(null);
      setIsClosing(false);
    }, 280);
  };

  const keepOverlayOpen = () => {
    window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setOverlayWidth(overlayPosition?.width || 150);
  };

  const measureExpandedHeight = (event) => {
    if (
      event.propertyName === "width" &&
      !isClosing &&
      overlayRef.current
    ) {
      setOverlayHeight(
        Math.min(overlayRef.current.scrollHeight, window.innerHeight - 32),
      );
    }
  };

  const updateOnTimelineScroll = () => {
    if (activeExperience && !isCompact) {
      setPositionRevision((revision) => revision + 1);
    }
  };

  const toggleCompactExperience = (experience, index, cardElement) => {
    if (activeExperience?.index === index) {
      setActiveExperience(null);
      return;
    }

    setActiveExperience({ experience, index, cardElement, expandLeft: false });
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.content}>
        <p className={styles.sectionLabel}>02 / Experience</p>
        <div className={styles.heading}>
          <h2>Work shaped by curiosity and care.</h2>
          <p className={styles.introduction}>
            From supporting people with technology to building complete web
            applications, every role has sharpened how I approach a problem.
          </p>
        </div>
        <div
          ref={timelineViewportRef}
          className={styles.timelineViewport}
          onScroll={updateOnTimelineScroll}
        >
          <div ref={timelineRef} className={styles.timeline}>
            <div ref={timelineLineRef} className={styles.timelineLine} />
            {displayedExperiences.map(({ experience, index }) => (
              <article
                className={`${styles.milestone} ${
                  activeExperience?.index === index ? styles.activeMilestone : ""
                }`}
                key={`${experience.company}-${experience.title}`}
                tabIndex="0"
                onMouseEnter={(event) =>
                  !isCompact &&
                  openExperience(
                    experience,
                    index,
                    event.currentTarget.querySelector(`.${styles.card}`),
                  )
                }
                onMouseLeave={() => !isCompact && scheduleClose()}
                onFocus={(event) =>
                  !isCompact &&
                  openExperience(
                    experience,
                    index,
                    event.currentTarget.querySelector(`.${styles.card}`),
                  )
                }
                onBlur={() => !isCompact && scheduleClose()}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    closeExperience();
                  }
                }}
              >
                <div className={styles.marker}>{String(index + 1).padStart(2, "0")}</div>
                <div
                  className={styles.card}
                  onClick={(event) => {
                    if (isCompact && !event.target.closest("button")) {
                      toggleCompactExperience(experience, index, event.currentTarget);
                    }
                  }}
                >
                  <ExperienceCardContent
                    experience={experience}
                    expandable={isCompact}
                    expanded={activeExperience?.index === index}
                    onToggle={(event) =>
                      toggleCompactExperience(
                        experience,
                        index,
                        event.currentTarget.closest(`.${styles.card}`),
                      )
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
        {!isCompact && activeExperience && overlayPosition && (
          <div
            ref={overlayRef}
            key={activeExperience.index}
            className={`${styles.card} ${styles.overlayCard} ${
              isClosing ? styles.closingOverlay : ""
            } ${activeExperience.index % 2 === 0 ? styles.overlayFromBottom : ""}`}
            style={{
              left: overlayPosition.left === null ? "auto" : `${overlayPosition.left}px`,
              right: overlayPosition.right === null ? "auto" : `${overlayPosition.right}px`,
              top: `${overlayPosition.top}px`,
              width: `${overlayWidth}px`,
              height: `${overlayHeight}px`,
            }}
            onMouseEnter={keepOverlayOpen}
            onMouseLeave={scheduleClose}
            onTransitionEnd={measureExpandedHeight}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                closeExperience();
              }
            }}
            role="group"
            aria-label={`${activeExperience.experience.title} details`}
            tabIndex="-1"
          >
            <ExperienceCardContent experience={activeExperience.experience} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
