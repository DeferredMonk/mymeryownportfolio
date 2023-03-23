import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    contactInfo: {
      name: "Marco Angeli",
      username: "DeferredMonk",
      email: "Marcoangeli151@gmail.com",
      position: ".NET full-stack developer",
      schoolPosition: "Bachelor of business administration",
    },
    status: {
      work: "Experis academy",
      schoolShort: "Xamk",
      school: "South-Eastern Finland University of Applied Sciences",
    },
    skills: {
      title: "Who am I?",
      description: `
            I am a motivated web developer working as a .NET full-stack developer at experis academy
             and soon to be a graduate at South-Eastern Finland University of Applied Sciences. 
            My studies are online. That allowed me to work full-time and study at XAMK at the same time.
            My journey began in 2021 while studying web developement basics in Haaga-Helia open UAS. 
            I enjoyed it so much that I decided to continue and embrace it!
            `,
      personalSkills: [
        {
          skill: "A team player",
          description: `I try to contribute the best way I can with my teammates. If
                        needed I am not afraid to ask for help and I gladly help others
                        the best way I can.`,
        },
        {
          skill: "Proactive",
          description: `I do my best to complete even the hardest tasks. I try to approuch
              them from different perspectives to solve them.`,
        },
        {
          skill: "A customer servant",
          description: `I've been working with customers daily for over 4 years. I
              understand and know how to communicate with them.`,
        },
        {
          skill: "A problem solver",
          description: `Problem solving has become a day to day routine for me. Since 2018 
              I've been solving problems daily as an ICT-Specialist and later on as 
              a full-stack developer.`,
        },
      ],
      experticeAreas: {
        title: "Areas of expertise",
        description: `During the last three months, I've been attending a bootcamp 
        at Noroff meant as accelerated learning for working professionals. 
        This bootcamp was divided into three sections front-end, back-end, and final case. 
        The Front-end section helped me deepen my knowledge of Vanilla JavaScript, React, and Angular
         by creating one application with each library. 
         During the Back-end section, I learned C# by making a small console game using classes, 
         interfaces, abstract classes, and unit testing. 
         Then I learned how to create CRUD operations with C# using SQL queries. We created a small movie 
         API for our last project using the code first method and entity framework.`,
      },
    },
  },
  it: {},
  fi: {},
});
