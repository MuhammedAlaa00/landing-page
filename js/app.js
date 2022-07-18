/* global document, window */
/**
 * Description for The Landing Page
 */
/** @global sections array */
const navItemsArray = ["section 1", "section 2", "section 3", "section 4"];
/**
 * @event click => toggle between the navItems to add & remove active class & scroll to each element data-scroll attribute matches the navItem id
 */
const ScrolltoElement = () => {
  const navItems = document.querySelectorAll(".navItem");
  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      const targetIdattr = el?.getAttribute("id");
      const targetEl = document?.querySelector(
        `[data-scroll = "${targetIdattr}"]`
      );
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: "50px",
      });
    });
  });
};
const createNavbar = () => {
  const navbar = document.createElement("nav");
  document.body.append(navbar);
  const unorderList = document.createElement("ul");
  navbar.appendChild(unorderList);
  for (let index = 0; index < navItemsArray.length; index++) {
    const el = document.createElement("li");
    el.innerHTML = navItemsArray[index];
    el.setAttribute("id", navItemsArray[index]);
    el.setAttribute("class", "navItem");
    const firstListItemElement = document.getElementsByClassName("navItem")[0];
    firstListItemElement?.classList.add("active");
    unorderList.appendChild(el);
    ScrolltoElement();
  }
};
const createSections = () => {
  const mainContainer = document.createElement("div");
  document.body.append(mainContainer);
  for (let index = 0; index < navItemsArray.length; index++) {
    const sectionel = document.createElement("section");
    mainContainer.appendChild(sectionel);
    sectionel.innerHTML = navItemsArray[index];
    const bodyHeight = window.innerHeight;
    sectionel.style.height = `${bodyHeight - 100}px`;
    sectionel.setAttribute("class", "section");
    sectionel.setAttribute("data-scroll", navItemsArray[index]);
  }
};
/**
 * function check if the section In viewport add to the navItem which matches same index active class
 */
const addClassActiveToNavItem = () => {
  const sectionsEl = document.querySelectorAll(".section");
  for (const [index, section] of sectionsEl.entries()) {
    /**
     * @param {htmlElement} element individual section from the sections
     * @returns {boolean} if element in viewport true : false
     */
    function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 100 <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    }
    if (isInViewport(section)) {
      const links = document.querySelectorAll(".navItem");
      links.forEach((link) => link.classList.remove("active"));
      links[index].classList.add("active");
    }
  }
};
/**
 * check if the pageoffset > 100 add class fixed to the navbar else remove it.
 */
const checkPageYoffSet = () => {
  const element = document.querySelector("nav");
  // console.log(element.style)
  const elementOffset = document.querySelector("nav").offsetTop;
  if (window.pageYOffset > elementOffset) {
    element.classList.add("fixed");
  } else {
    element.classList.remove("fixed");
  }
};
/**
 * @event load => create the sections elements in the Dom
 * @event load => create the navbar and the navitems
 */
window.addEventListener("load", () => {
  createNavbar();
  createSections();
});
/**
 * @event scroll => toggle between the fixed class on the navbar to change the style of it
 */
window.addEventListener("scroll", () => {
  addClassActiveToNavItem();
  checkPageYoffSet();
});
