export const useProject = () => {
  const listOfFEProjects = [
    {
      name: "Lost in translation",
      src: {
        srcLive: "https://lost1ntr4nslation.netlify.app/",
        srcSource: "https://github.com/DeferredMonk/lostintranslation",
      },
      id: 6,
      createdUsing: [
        "React",
        "Redux",
        "React-router-dom",
        "React-hook-form",
        "HTML",
        "SASS",
      ],
      desctrition: {
        application:
          "Lost in translation is a application that translates text into sign language.",
        technical: `This application translates text into sign language. This was a three-person project. 
                    In addition to input
                    components mechanism I did most of the styling and responsiveness in the
                    project. This project was created in approximately one week. The projects styling was
                    done with SASS. With redux we were able to pass efficiently data through
                    components.`,
      },
    },
    // {
    //   name: "Komputer Store",
    //   src: {
    //     srcLive: "https://komputerstore.netlify.app/",
    //     srcSource: "https://github.com/DeferredMonk/KomputerStore",
    //   },
    //   id: 5,
    //   createdUsing: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    //   desctrition: {
    //     application:
    //       "Komputer store is a web page where you can gain money by working, take loans and buy laptops.",
    //     technical:
    //       "This project is created using html, css and js. During this assingnement I improved my vanilla JavaScript skills and DOM manipulation skills. ",
    //   },
    // },
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
        srcLive: "https://deferredmonk.netlify.app/",
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
      name: "Pokemon trainer",
      src: {
        srcLive: "https://pokemontr41ner.netlify.app",
        srcSource: "https://github.com/DeferredMonk/pokemon_trainer",
      },
      id: 4,
      createdUsing: [
        "Angular",
        "Typescript",
        "HTML",
        "CSS",
        "Glitch",
        "Netlify",
      ],
      desctrition: {
        application:
          "Pokemon trainer allows you to browse all of the pokemons and add them to your collection. From the collection you can also delete a pokemon.",
        technical:
          "Pokémon trainer is a web application created with Angular Framework. This application fetches data from pokeApi and stores data into a json file stored in glitch. During this project I learned the basics of Angular.",
      },
    },
  ];

  const listOfBEProjects = [
    {
      name: "RPG heroes",
      src: {
        srcSource: "https://github.com/DeferredMonk/ConsoleBasedRpgGame",
      },
      id: 1,
      createdUsing: ["C#", "Visual Studio"],
      desctrition: {
        application:
          "RPG heroes is a small RPG console game made with C#. RPG Heroes enables you to play with four different classes and equip weapons and armors.",
        technical: `The purpose of this project was to enable me to learn C# 
          fundamentals as deeply as possible. This project too 
          approximately 10 days to complete. During these ten days I 
          learned about Classes, Interfaces, Abstract classes, and Object-oriented 
          programming in general.`,
      },
    },
    {
      name: "MovieCharacterAPI",
      src: {
        srcSource: "https://github.com/DeferredMonk/MovieCharactersAPI",
      },
      id: 3,
      createdUsing: [
        "C#",
        "SQL",
        "Code First",
        "ASP.NET Core",
        "Entity framework",
      ],
      desctrition: {
        application:
          "MovieCharacterAPI is an API created with the code first method. Using Entity framework(EF) dummy data is inserted while the database and tables are created.",
        technical: `Using EF the API handles all CRUD operations. There are also custom operations
                    where tables are joined together. This API inlcudes also DTOs and they're populated
                    using Automapper. During this project I learned how to use Entity framework and Automapper. 
                    This was a pair project created in approximately four days.`,
      },
    },
    {
      name: "Running Shoes On",
      src: {
        srcSource: "https://github.com/DeferredMonk/RunningShoesOn",
      },
      id: 2,
      createdUsing: ["Python", "Pygame"],
      desctrition: {
        application:
          "Running shoes on is a small 2D game made with pygame. The goal is to jump from moving platforms and reach the goal",
        technical: `This project was my first experience about object-oriented programming and took me approximately 
        one week of six hours per day programming sessions to complete. During this project I learned the fundamentals of Python and OOP. 
        On top of everything I learned how to use the Pygame library wicth was pretty fun.`,
      },
    },
    {
      name: "SQL CRUD operations with C#",
      src: {
        srcSource:
          "https://github.com/DeferredMonk/sql_crud_operations_with_csharp",
      },
      id: 4,
      createdUsing: ["C#", "SQL Client", "MS SQL Server"],
      desctrition: {
        application:
          "Small application created to learn how to make crud operations in C#.",
        technical: `A two part assignment. The first part of the assignment (sql_crud_operations_with_csharp) 
                    deals with manipulating SQL Server data in Visual Studio using a SQL Client library. 
                    Database used in assignment is Chinook. The C# application is created in repository pattern. 
                    The second part (SuperheroSQLQueries) deals with creating a SuperheroDb database. 
                    Sqripts written in SQL contains creation of tables, relationships and inserts, updates and deletes of data.`,
      },
    },
  ];
  return [listOfFEProjects, listOfBEProjects];
};
