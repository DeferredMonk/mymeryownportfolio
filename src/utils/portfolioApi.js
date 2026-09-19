const API_URL =
  "http://localhost:8000/api/portfolio/?domain=deferredmonk.netlify.app";
const API_ORIGIN = new URL(API_URL).origin;

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
    skills: data.content?.skills || [],
    contact: data.content?.contact || {},
    profileImage: resolveMediaUrl(data.person?.profile_image),
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
