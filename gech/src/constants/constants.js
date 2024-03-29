import AGTC from "../image/agtc.PNG"
import MyPortfolio from "../image/gechweb.PNG"
import MyEcommerce from "../image/My-ecommerce.PNG"
import MyTax from "../image/tax.PNG"
export const projects = [
  {
    title: "Personal Portfolio",
    description:
      "This is a personal Portfolio project built React, Material UI.",
    image: MyPortfolio,
    tags: ["React", "Material Design","JSX","Styled-Component"],
    source: "https://github.com/amsalugetasew/My-Portfolios",
    visit: "https://gechsew.netlify.app/",
    id: 0,
  },
  {
    title: "AGTC Website",
    description:
      "This is a College Website project built React, Redux, MongoDb, Material UI.",
      image: AGTC,
    tags: ["React", "Redux", "MongoDb", "Material Design"],
    source: "https://github.com/amsalugetasew/AGTC",
    visit: "https://github.com/amsalugetasew/AGTC",
    id: 1,
  },
  {
    title: "GHabesha Ecommerce Website",
    description:
      "This is a Ecommerce Website project built React, Redux,  Bootstrap.",
      image: MyEcommerce,
    tags: ["React", "Redux",  "Bootstrap"],
    source: "https://github.com/amsalugetasew/E-commerce-web-App",
    visit: "https://ghabesha.netlify.app/",
    id: 2,
  },
  {
    title: "E-tax web App",
    description:
      "This is a E-Tax Web App project built React, Tailwind,  SASS.",
      image: MyTax,
    tags: ["React", "Tailwind",  "SASS"],
    source: "https://github.com/amsalugetasew/Bereket_Tax",
    visit: "https://tax-test.netlify.app/",
    id: 3,
  },


];

export const TimeLineData = [
  { year: 2020, text: "Started my journey" },
  { year: 2021, text: "Worked as a freelance developer" },
  { year: 2022, text: "Shared my projects with the world" },
];
