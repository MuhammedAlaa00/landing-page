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
  const Navbar = document.createElement("nav");
  document.body.append(Navbar);
  const ulUnorderList = document.createElement("ul");
  Navbar.appendChild(ulUnorderList);
  for (let index = 0; index < navItemsArr.length; index++) {
    const el = document.createElement("li");
    el.innerHTML = navItemsArr[index];
    el.setAttribute("id", navItemsArr[index]);
    el.setAttribute("class", "navItem");
    const firstListItemElement = document.getElementsByClassName("navItem")[0];
    firstListItemElement?.classList.add("active");
    ulUnorderList.appendChild(el);
  }
  let navItems = document.querySelectorAll(".navItem");
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
