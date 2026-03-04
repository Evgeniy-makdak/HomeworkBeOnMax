const menuItems = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu"),
  body = document.querySelector("body"),
  adv = document.querySelector(".adv"),
  column = document.querySelectorAll(".column");

menu.insertBefore(menuItems[2], menuItems[1]);
const menuItemFive = document.createElement("li");
menuItemFive.textContent = "Пятый пункт";
menuItemFive.classList.add("menu-item");
menu.appendChild(menuItemFive);
body.style.background = "url(img/apple_true.jpg) center no-repeat";
column[1].removeChild(adv);
