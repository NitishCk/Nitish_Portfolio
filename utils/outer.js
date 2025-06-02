import { openLink } from "./methods";

const outer = {
  title1: `Hello, I am`,
  title2: "Nitish Ck,",
  decrypTexts: [
    "A Front - End Developer",
    "A Software Engineer",
    "A Full Stack Developer",
    "Fitness Enthusiast",
  ],
  desciption: `A passionate Software Engineer skilled in Java, JavaScript, and React, with experience in building scalable web applications and reusable components. Eager to learn and adapt to new technologies for optimized solutions.`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:cknitish02@gmail.com?subject=Hello"),
  },
};

export default outer;
