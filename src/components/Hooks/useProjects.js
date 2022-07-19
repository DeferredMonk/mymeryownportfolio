export const useProject = () => {
  const listOfProjects = [
    {
      name: "Bird spotter",
      src: "https://birders-diary.netlify.app/",
      id: 1,
      createdUsing: ["ReactJS", "MUI", "React-Router", "Date-fns"],
      desctrition: {
        application:
          "This application lets you keep a record of your spotted birds.",
        technical:
          "Bird spotter is created using ReactJS, its components are from the Material UI component library. The routing is managed by React-Router. Each new bird added to the list, gets a unique ID from uuid, by using this unique id you're able to modify each item (bird) freely from the list. In addition, I have added errorHandlers to the inputs to inform the users about mistakes or errors in their inputs.",
      },
    },
  ];
  return listOfProjects;
};
