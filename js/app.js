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
    });
  });
});
/**
 * End of Create Navigation Element function
 */
