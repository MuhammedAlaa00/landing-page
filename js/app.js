/**
 * landing page project.
 */
/**
 * Start of Global Variables
 */
let navItemsArr = ["section 1", "section 2", "section 3", "section 4"];
/**
 * End of Global Variables
 */
/**
 * Create Navigation Element function
 */
// edit the css style in the css file.
window.addEventListener("load", () => {
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "#000034";
  const Navbar = document.createElement("nav");
  Navbar.style.display = "flex";
  Navbar.style.justifyContent = "end";
  Navbar.style.width = "100%";
  Navbar.style.backgroundColor = "#fff";
  document.body.append(Navbar);
  const ulUnorderlist = document.createElement("ul");
  ulUnorderlist.style.display = "flex";
  ulUnorderlist.style.padding = "0 1rem"
  Navbar.appendChild(ulUnorderlist);
  for (let index = 0; index < navItemsArr.length; index++) {
    const el = document.createElement("li");
    el.innerHTML = navItemsArr[index];
    el.setAttribute("id", navItemsArr[index]);
    el.setAttribute("class", "navItem");
    const firstListItemElement = document.getElementsByClassName("navItem");
    firstListItemElement[0]?.classList.add("active");
    el.style.listStyle = "none";
    el.style.color = "#000";
    el.style.padding = "1rem";
    ulUnorderlist.appendChild(el);
  }
  console.log(Navbar);
});
