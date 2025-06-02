import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/NitishCk",
    instagram: "https://www.instagram.com/nitish_ck/",
    leetcode: "https://leetcode.com/u/NitishCk007/",
    linkedin: "https://www.linkedin.com/in/nitishck/",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "cknitish02@gmail.com",
    onClick: () => openLink("mailto:cknitish02@gmail.com?subject=Hello"),
  },
  handleIconClick,
};

export default sideElements;
