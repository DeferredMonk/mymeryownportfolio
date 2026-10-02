import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

test("renders experiences supplied by the API", () => {
  render(
    <Experience
      experiences={[
        {
          startDate: "01.2023",
          endDate: null,
          title: "Independent web developer",
          company: "Small-business websites",
          summary: "Building websites.",
          focus: ["React"],
        },
      ]}
    />,
  );

  expect(screen.getByText("01.2023 – Present")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Independent web developer" })).toBeInTheDocument();
  expect(screen.getByText("Small-business websites")).toBeInTheDocument();
});
