const menuItems = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu");

menu.insertBefore(menuItems[2], menuItems[1]); 
const menuItemFive = document.createElement("li");
menuItemFive.textContent = "Пятый пункт";
menuItemFive.classList.add("menu-item")
menu.appendChild(menuItemFive);