function closeBox(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.style.display = "none";
  }
}

navbar.generateNavbar(true)