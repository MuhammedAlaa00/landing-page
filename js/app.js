/**
 * landing page project.
 */
/**
 * Start of Global Variables
 */
const navItemsArr = ["section 1", "section 2", "section 3", "section 4"];
/**
 * End of Global Variables
 */
/**
 * Start of Create Navigation Element function
 */
// edit the css style in the css file.
window.addEventListener("load", () => {
  // create navbar , ul elements and append them in body & navbar
  const navbar = document.createElement("nav");
  document.body.append(navbar);
  const unorderList = document.createElement("ul");
  navbar.appendChild(unorderList);
  // create li elements
  for (let index = 0; index < navItemsArr.length; index++) {
    const el = document.createElement("li");
    el.innerHTML = navItemsArr[index];
    // set id & class attr in li elements
    el.setAttribute("id", navItemsArr[index]);
    el.setAttribute("class", "navItem");
    // add active class to first element in li elements
    const firstListItemElement = document.getElementsByClassName("navItem")[0];
    firstListItemElement?.classList.add("active");
    // append li elements in ul element
    unorderList.appendChild(el);
  }
  // function of toggle active class between li elements
  const navItems = document.querySelectorAll(".navItem");
  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      el.classList.add("active");
      console.log(el.getAttribute("id"));
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
});
/**
 * End of Create Navigation Element function
 */
/**
 * Start of create the sections elements
 */
window.addEventListener("load", () => {
  const mainContainer = document.createElement("div");
  document.body.append(mainContainer);
  for (let index = 0; index < navItemsArr.length; index++) {
    const sectionel = document.createElement("section");
    mainContainer.appendChild(sectionel);
    sectionel.innerHTML = navItemsArr[index];
    sectionel.setAttribute("class", "section");
    sectionel.setAttribute("data-scroll", navItemsArr[index]);
  }
});
/**
 * End of create the sections elements
 */
/**
 * Add class fixed to the navbar and remove it
 */
window.addEventListener("scroll", ()=> {
  if(window.pageYOffset > 100) {
    console.log("more than 60 px");
    document.getElementsByTagName("nav")[0].classList.add("fixed");
  }
  else {
    document.getElementsByTagName("nav")[0].classList.remove("fixed");
  }
})

