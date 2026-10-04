const API_ORIGIN = process.env.REACT_APP_API_URL || "http://localhost:8000";
const API_URL = new URL("/api/portfolio/", API_ORIGIN);
API_URL.searchParams.set("domain", "deferredmonk.netlify.app");

const resolveMediaUrl = (path) => {
  if (!path) return "";
  return new URL(path, API_ORIGIN).toString();
};

export const normalizePortfolio = (data) => {
  const hero = data.content?.hero || {};
  const about = data.content?.about || {};

  return {
    person: data.person || {},
    hero,
    about,
    contact: data.content?.contact || {},
    profileImage: resolveMediaUrl(data.person?.profile_image),
    workExperiences: (data.work_experiences || []).slice().reverse().map((experience) => ({
      startDate: experience.start_date,
      endDate: experience.end_date,
      title: experience.title,
      company: experience.company,
      summary: experience.summary,
      focus: experience.focus || [],
    })),
    projects: (data.projects || []).map((project) => ({
      id: project.slug,
      name: project.title,
      src: {
        srcLive: project.content?.live_url || "",
        srcSource: project.content?.source_url || "",
      },
      createdUsing: project.content?.technologies || [],
      description: {
        application: project.content?.application || project.description || "",
        technical: project.content?.technical || "",
      },
    })),
  };
};

export const fetchPortfolio = async (signal) => {
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(`Portfolio API request failed (${response.status})`);
  }
  return normalizePortfolio(await response.json());
};

export const submitContactMessage = async (message) => {
  const contactUrl = new URL("/api/portfolio/contact/", API_ORIGIN);
  contactUrl.searchParams.set("domain", "deferredmonk.netlify.app");
  const response = await fetch(contactUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  if (!response.ok) {
    const detail =
      typeof result.detail === "string"
        ? result.detail
        : "Unable to send your message right now. Please try again later.";
    throw new Error(detail);
  }
  return result;
};
