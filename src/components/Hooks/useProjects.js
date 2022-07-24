export const useProject = () => {
  const listOfProjects = [
    {
      name: "Bird spotter",
      src: {
        srcLive: "https://birders-diary.netlify.app/",
        srcSource: "https://github.com/DeferredMonk/Birdspots",
      },
      id: 1,
      createdUsing: ["ReactJS", "MUI", "React-Router", "Date-fns"],
      desctrition: {
        application:
          "This application lets you keep a record of your spotted birds.",
        technical:
          "Bird spotter is created using ReactJS, its components are from the Material UI component library. The routing is managed by React-Router. Each new bird added to the list, gets a unique ID from uuid, by using this unique id you're able to modify each item (bird) freely from the list. In addition, I have added errorHandlers to the inputs to inform the users about mistakes or errors in their inputs.",
      },
    },
    {
      name: "Angelis Pizza!",
      src: {
        srcLive: "https://angelispizza.netlify.app/englanniksi/",
        srcSource: "https://github.com/DeferredMonk/angelis_pizza",
      },
      id: 2,
      createdUsing: ["HTML", "CSS"],
      desctrition: {
        application:
          "My very first project. A web site for an immaginary pizzeria.",
        technical:
          "Angeli's Pizza! is created purely with css and html. This is my first project creating this project I learned the basics of HTML and CSS.",
      },
    },
    {
      name: "Portfolio",
      src: {
        srcLive: "https://birders-diary.netlify.app/",
        srcSource: "https://github.com/DeferredMonk/mymeryownportfolio",
      },
      id: 3,
      createdUsing: ["ReactJS", "React-Router", "SASS"],
      desctrition: {
        application:
          "This is my personal portfolio created with patience and love!",
        technical:
          "My portfolio is created using ReactJS. To create animations and style the site, I've used SASS. I created this portfolio using my own skills. Everything is created by me except for the routing. Creating my portfolio I really wanted to show my skill level of ReactJS and SASS.",
      },
    },
    {
      name: "Laiterekisteri",
      src: {
        srcLive: "https://birders-diary.netlify.app/",
        srcSource: "https://github.com/DeferredMonk/mymeryownportfolio",
      },
      id: 4,
      createdUsing: ["ReactJS", "MUI", "React-Router"],
      desctrition: {
        application:
          "This application is my ReactJS course final project. It is a device registry that lets you keep a record of your lend devices.",
        technical:
          "My device registry is created using ReactJS. Importing MUI:s Data-grid component to display data in a clean way. In my device registry you can add, modify and delete registrys. Input fields have error handlers. This device registry is not responsive and will only work on a bigger screen.",
      },
    },
  ];
  return listOfProjects;
};
