import { normalizePortfolio } from "./portfolioApi";

test("normalizes work experience returned by the portfolio API", () => {
  const portfolio = normalizePortfolio({
    work_experiences: [
      {
        start_date: "01.2023",
        end_date: null,
        title: "Independent web developer",
        company: "Small-business websites",
        summary: "Building websites.",
        focus: ["React"],
      },
      {
        start_date: "01.2021",
        end_date: "12.2021",
        title: "Web development studies",
        company: "Haaga-Helia Open UAS",
        summary: "Learning web development.",
        focus: ["HTML", "CSS"],
      },
    ],
  });

  expect(portfolio.workExperiences).toEqual([
    {
      startDate: "01.2021",
      endDate: "12.2021",
      title: "Web development studies",
      company: "Haaga-Helia Open UAS",
      summary: "Learning web development.",
      focus: ["HTML", "CSS"],
    },
    {
      startDate: "01.2023",
      endDate: null,
      title: "Independent web developer",
      company: "Small-business websites",
      summary: "Building websites.",
      focus: ["React"],
    },
  ]);
});
