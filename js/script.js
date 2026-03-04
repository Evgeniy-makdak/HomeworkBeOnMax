const menuItems = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu"),
  body = document.querySelector("body");
menu.insertBefore(menuItems[2], menuItems[1]); 
const menuItemFive = document.createElement("li");
menuItemFive.textContent = "Пятый пункт";
menuItemFive.classList.add("menu-item")
menu.appendChild(menuItemFive);
body.style.background = "url(img/apple_true.jpg) center no-repeat";
