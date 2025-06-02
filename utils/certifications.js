import { openLink } from "./methods";

const certifications = {
  heading: `Licenses & certifications`,
  list: [
      {
      size: 3,
      title: "META - Front-End Developer Professional Certificate",
      platform: "Coursera | META Staff",
      link: "https://coursera.org/verify/professional-cert/QW2DIWBOG3OW",
      date: "Issued May 2025 · No Expiration Date",
      logo: "/assets/react.svg",
      aos: "zoom-out-left",
    },
    {
      size: 3,
      title: "The Ultimate Redux Course 2023",
      platform: "Udemy | Code Bless You",
      link: "https://www.udemy.com/certificate/UC-4d75d12d-495e-41e6-a75d-bf1404063449/",
      date: "Issued Mar 2024 · No Expiration Date",
      logo: "/assets/redux.webp",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Developing Websites and Front-Ends with Bootstrap",
      platform: "Coursera | IBM Staff",
      link: "https://www.coursera.org/account/accomplishments/verify/FBCZ6ZT77CBJ",
      date: "Issued Jan 2024 · No Expiration Date",
      logo: "/assets/bootstrap.webp",
      aos: "zoom-out-left",
    },
    // {
    //   size: 1,
    //   title: "The Complete Sass &SCSS Course: From Beginner to Advanced",
    //   platform: "Udemy | Joe Parys, Peter Sommerhoff",
    //   link: "https://www.udemy.com/certificate/UC-fb30f2f6-6f05-468d-9234-8ee705973e84/",
    //   date: "Issued Feb 2024 · No Expiration Date",
    //   logo: "/assets/sass.png",
    //   aos: "zoom-out-left",
    // },
    {
      size: 2,
      title: "HTML, CSS, and Javascript for Web Developers",
      platform: "Coursera | Yaakov Chaikin",
      link: "https://www.coursera.org/account/accomplishments/verify/PESAUJZMYAW3",
      date: "Issued May 2020 · No Expiration Date",
      logo: "/assets/htmlcssjs.png",
      aos: "zoom-out-left",
    },
  ],
  handleIconClick: openLink,
};

export default certifications;
