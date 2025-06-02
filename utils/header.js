import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "About Me", id: "my-self" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "my-work" },
    // { title: "Reviews", id: "reviews" },
    { title: "Certifications", id: "certifications" },
    { title: "Contact", id: "contact" },
  ],
  rightBtn: {
    label: "Resume | CV",
    onClick: () => openLink("assets/Nitish_Resume.pdf"),
  },
  logo: {
    src: "/assets/headerdp.jpg",
    alt: "NitishCk",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
